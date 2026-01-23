
import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import { transform } from '@svgr/core';
import { pascalCase } from 'scule';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../public/icons/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/native');
const INDEX_FILE = path.resolve(__dirname, '../src/native/index.ts');

const typeMap: Record<string, string> = {
    'filled': 'Filled',
    'filled-24px': 'Filled24',
    'outline': 'Outline',
    'outline-24px': 'Outline24',
};

async function generate() {
    console.log('🚀 Starting React Native icon generation...');

    await fs.remove(OUTPUT_DIR);
    await fs.ensureDir(OUTPUT_DIR);

    const files = await glob('**/*.svg', { cwd: INPUT_DIR });
    const components: string[] = [];

    for (const file of files) {
        const filePath = path.join(INPUT_DIR, file);
        const content = await fs.readFile(filePath, 'utf-8');

        const parts = file.split('/');
        const styleDir = parts[0];
        const category = parts.length > 2 ? parts[1] : 'uncategorized';
        const basename = path.basename(file, '.svg');

        const styleSuffix = typeMap[styleDir] || pascalCase(styleDir);
        let componentName = pascalCase(basename) + styleSuffix;

        if (!/^[a-zA-Z]/.test(componentName)) {
            componentName = 'Icon' + componentName;
        }

        componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');

        if (components.includes(componentName)) {
            if (category && category !== 'uncategorized') {
                componentName = pascalCase(category) + componentName;
            }
        }

        const jsCode = await transform(
            content,
            {
                native: true, // This enables React Native mode
                icon: true,
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
                typescript: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                        'removeDimensions',
                    ],
                },
            },
            { componentName }
        );

        await fs.writeFile(path.join(OUTPUT_DIR, `${componentName}.tsx`), jsCode);
        components.push(componentName);
    }

    const exportStatements = components
        .map(name => `export { default as ${name} } from './${name}';`)
        .join('\n');

    await fs.writeFile(INDEX_FILE, exportStatements);

    console.log(`🎉 Successfully generated ${components.length} React Native icons!`);
}

generate().catch(err => {
    console.error(err);
    process.exit(1);
});
