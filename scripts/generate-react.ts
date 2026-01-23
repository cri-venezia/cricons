
import { transform } from '@svgr/core';
import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import { pascalCase } from 'scule';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../public/icons/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/react');

const typeMap: Record<string, string> = {
    'filled': 'Filled',
    'filled-24px': 'Filled24',
    'outline': 'Outline',
    'outline-24px': 'Outline24',
};

async function generate() {
    console.log('🚀 Starting React icon generation...');

    // Clean output directory
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

        // Handle collisions (same logic as Vue script)
        if (components.includes(componentName)) {
            console.warn(`⚠️ Duplicate component name: ${componentName}. Prepending category.`);
            if (category && category !== 'uncategorized') {
                componentName = pascalCase(category) + componentName;
            }
        }

        try {
            const tsxCode = await transform(
                content,
                {
                    typescript: true,
                    icon: true, // sets width/height usually 1em
                    replaceAttrValues: {
                        '#000': 'currentColor',
                        '#000000': 'currentColor',
                        'black': 'currentColor'
                    },
                    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
                },
                { componentName }
            );

            await fs.writeFile(path.join(OUTPUT_DIR, `${componentName}.tsx`), tsxCode);
            components.push(componentName);

        } catch (e) {
            console.error(`Error transforming ${file}:`, e);
        }
    }

    // Generate index.ts
    const indexContent = components
        .map(name => `export { default as ${name} } from './${name}';`)
        .join('\n');

    await fs.writeFile(path.join(OUTPUT_DIR, 'index.ts'), indexContent);

    console.log(`🎉 Successfully generated ${components.length} React icons!`);
}

generate().catch(err => {
    console.error(err);
    process.exit(1);
});
