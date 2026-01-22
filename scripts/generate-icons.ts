
import { optimize } from 'svgo';
import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';
import { pascalCase } from 'scule';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.resolve(__dirname, '../public/icons/svg');
const OUTPUT_DIR = path.resolve(__dirname, '../src/components');
const INDEX_FILE = path.resolve(__dirname, '../src/index.ts');

const typeMap: Record<string, string> = {
  'filled': 'Filled',
  'filled-24px': 'Filled24',
  'outline': 'Outline',
  'outline-24px': 'Outline24',
};

async function generate() {
  console.log('🚀 Starting icon generation...');
  
  // Clean output directory
  await fs.remove(OUTPUT_DIR);
  await fs.ensureDir(OUTPUT_DIR);

  const files = await glob('**/*.svg', { cwd: INPUT_DIR });
  const components: string[] = [];

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);
    const content = await fs.readFile(filePath, 'utf-8');
    
    // file path relative to INPUT_DIR, e.g., 'outline/emotions/angry.svg'
    // or 'filled/home.svg' (if no category)
    const parts = file.split('/'); // fast-glob returns forward slashes
    const styleDir = parts[0];
    const basename = path.basename(file, '.svg');

    // Determine style suffix
    const styleSuffix = typeMap[styleDir] || pascalCase(styleDir);
    
    // Component name: PascalCase(basename) + StyleSuffix
    // Example: angry.svg in outline -> AngryOutline
    let componentName = pascalCase(basename) + styleSuffix;

    // Ensure component name starts with a letter
    if (!/^[a-zA-Z]/.test(componentName)) {
      componentName = 'Icon' + componentName;
    }
    
    // Replace invalid characters if any (pascalCase usually handles spaces/dashes, but maybe others?)
    // pascalCase from 'scule' handles most, but let's be safe against '!'
    componentName = componentName.replace(/[^a-zA-Z0-9]/g, '');

    // TODO: Handle name collisions if multiple categories have same icon name
    if (components.includes(componentName)) {
      console.warn(`⚠️ Duplicate component name: ${componentName} for file ${file}. Prepending category.`);
      const category = parts.length > 2 ? parts[1] : '';
      if (category) {
        componentName = pascalCase(category) + componentName;
      }
    }

    // Optimize SVG
    const optimized = optimize(content, {
      path: filePath,
      plugins: [
        'removeDimensions', // remove width/height to allow CSS sizing
        'removeXMLNS',
        {
          name: 'convertColors',
          params: {
            currentColor: true, // Replace colors with currentColor
          },
        },
        {
          name: 'removeAttrs',
          params: {
            attrs: '(stroke|fill)', // Be careful here, sometimes we need them. Let's test first without forcing removal, but currentColor usually handles fill. 
            // Better strategy: keep strokes/fills but ensure they use currentColor if they are solid black/white
          }
        }
      ],
    });

    // For now, let's keep it simple with optimization. 
    // If the SVG has specific colors, we might lose them with forced currentColor. 
    // But for an icon lib, currentColor is standard.
    // Let's retry optimization config to be safer:
    
    const svgResult = optimize(content, {
      plugins: [
        'preset-default',
        'removeDimensions',
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [
              { width: '1em' },
              { height: '1em' },
            ],
          },
        },
      ],
    });
    
    // We will wrap the SVG in a template
    const vueContent = `
<template>
  ${svgResult.data}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '${componentName}'
});
</script>
`.trim();

    await fs.writeFile(path.join(OUTPUT_DIR, `${componentName}.vue`), vueContent);
    components.push(componentName);
    console.log(`✅ Generated ${componentName}`);
  }

  // Generate index.ts
  const exports = components
    .map(name => `export { default as ${name} } from './components/${name}.vue';`)
    .join('\n');

  const installFn = `
import type { App } from 'vue';
${components.map(name => `import ${name} from './components/${name}.vue';`).join('\n')}

export * from './components/index'; // We will create a components/index.ts too? No, let's put it all in main index or separate.
// Let's stick to the requested structure:
// Export individual components and a plugin.

export default {
  install(app: App) {
    ${components.map(name => `app.component('${name}', ${name});`).join('\n    ')}
  }
};
`;

  // Actually, standard practice:
  // src/components/index.ts -> exports all components
  // src/index.ts -> exports all from components + default install
  
  const componentsIndex = components
    .map(name => `export { default as ${name} } from './${name}.vue';`)
    .join('\n');
    
  await fs.writeFile(path.join(OUTPUT_DIR, 'index.ts'), componentsIndex);

  const mainIndex = `
import type { App } from 'vue';
import * as components from './components';

export * from './components';

export default {
  install(app: App) {
    for (const key in components) {
      app.component(key, (components as any)[key]);
    }
  }
};
`;

  await fs.writeFile(INDEX_FILE, mainIndex);
  
  console.log(`🎉 Successfully generated ${components.length} icons!`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
