
import { generateFonts, FontAssetType, OtherAssetType } from 'fantasticon';
import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_ROOT = path.resolve(__dirname, '../public/icons/svg');
const TEMP_DIR = path.resolve(__dirname, '../dist/temp-icons');
const OUTPUT_DIR = path.resolve(__dirname, '../dist/webfonts');

async function generate() {
    console.log('🚀 Starting Webfont generation...');

    // 1. Prepare temp directory
    await fs.remove(TEMP_DIR);
    await fs.ensureDir(TEMP_DIR);
    await fs.ensureDir(OUTPUT_DIR);

    // 2. Flatten icons
    const files = await glob('**/*.svg', { cwd: INPUT_ROOT });
    console.log(`Found ${files.length} icons. Flattening...`);

    for (const file of files) {
        // file is like 'filled/name.svg' or 'outline/name.svg'
        const parts = file.split('/');
        // fast-glob returns forward slashes always, so split is safe on all OS
        const style = parts[0]; // 'filled', 'outline'
        const basename = path.basename(file, '.svg');

        // New name: name-style.svg (e.g., blood-filled.svg)
        const newName = `${basename}-${style}.svg`;

        await fs.copy(
            path.join(INPUT_ROOT, file),
            path.join(TEMP_DIR, newName)
        );
    }

    try {
        const result = await generateFonts({
            inputDir: TEMP_DIR,
            outputDir: OUTPUT_DIR,
            name: 'cricons',
            fontTypes: [FontAssetType.WOFF2, FontAssetType.WOFF, FontAssetType.TTF],
            assetTypes: [OtherAssetType.CSS, OtherAssetType.HTML, OtherAssetType.JSON],
            formatOptions: {
                json: {
                    indent: 2
                }
            },
            templates: {},
            pathOptions: {},
            codepoints: {},
            fontHeight: 300,
            normalize: true
        });

        console.log('✅ Generated Webfonts:', Object.keys(result.assetsOut).join(', '));

        // Cleanup
        await fs.remove(TEMP_DIR);
        console.log('🧹 Cleaned up temp files.');
        console.log('🎉 Webfont generation complete!');
    } catch (error) {
        console.error('❌ Error generating webfonts:', error);
        process.exit(1);
    }
}

generate();
