
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const PACKAGES_DIR = path.resolve(ROOT_DIR, 'packages');

const PACKAGES = ['vue', 'react', 'native'];

async function publishAll() {
    console.log('🚀 Starting automated publishing to NPM...');

    for (const pkg of PACKAGES) {
        const pkgDir = path.join(PACKAGES_DIR, pkg);

        // Ensure package.json exists
        if (!fs.existsSync(path.join(pkgDir, 'package.json'))) {
            console.error(`❌ Package not found: ${pkg}`);
            continue;
        }

        console.log(`\n📦 Publishing @cricons/${pkg}...`);
        try {
            // Execute npm publish in the package directory
            execSync('npm publish --access public', {
                stdio: 'inherit',
                cwd: pkgDir
            });
            console.log(`✅ Successfully published ${pkg}`);
        } catch (error) {
            console.error(`❌ Failed to publish ${pkg}:`, error);
            // Don't stop the whole process, try the next one? Or stop? 
            // Usually if one fails, we might want to know. But let's verify connectivity first manually.
            process.exit(1);
        }
    }

    console.log('\n✨ All packages published successfully!');
}

publishAll().catch(console.error);
