
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const PACKAGES_DIR = path.resolve(ROOT_DIR, 'packages');

const rootPackage = fs.readJsonSync(path.join(ROOT_DIR, 'package.json'));
const VERSION = rootPackage.version;

async function prepare() {
    console.log('🚀 Preparing packages for publishing...');

    // 1. Build everything
    console.log('📦 Building all targets...');
    execSync('npm run build', { stdio: 'inherit', cwd: ROOT_DIR }); // Vue (main build)
    execSync('npm run build:react', { stdio: 'inherit', cwd: ROOT_DIR });
    execSync('npm run build:native', { stdio: 'inherit', cwd: ROOT_DIR });

    // 2. Clean packages dir
    await fs.remove(PACKAGES_DIR);
    await fs.ensureDir(PACKAGES_DIR);

    // 3. Prepare Vue Package
    console.log('💚 Preparing cricons-vue...');
    const vueDir = path.join(PACKAGES_DIR, 'vue');
    await fs.ensureDir(vueDir);
    await fs.copy(path.join(DIST_DIR, 'cricons.js'), path.join(vueDir, 'index.js'));
    await fs.copy(path.join(DIST_DIR, 'cricons.umd.cjs'), path.join(vueDir, 'index.umd.js'));
    await fs.copy(path.join(DIST_DIR, 'index.d.ts'), path.join(vueDir, 'index.d.ts'));
    // Copy CSS if exists (it's in dist/style.css typically for Vite lib, need to check)
    if (fs.existsSync(path.join(DIST_DIR, 'style.css'))) {
        await fs.copy(path.join(DIST_DIR, 'style.css'), path.join(vueDir, 'style.css'));
    }

    const vuePackage = {
        name: 'cricons-vue',
        version: VERSION,
        description: 'Vue 3 components for Cricons medical icon library',
        main: 'index.umd.js',
        module: 'index.js',
        types: 'index.d.ts',
        peerDependencies: {
            vue: '^3.0.0'
        },
        author: rootPackage.author,
        license: rootPackage.license,
        repository: rootPackage.repository
    };
    await fs.writeJson(path.join(vueDir, 'package.json'), vuePackage, { spaces: 2 });
    await fs.copy(path.join(ROOT_DIR, 'README.md'), path.join(vueDir, 'README.md'));


    // 4. Prepare React Package
    console.log('💙 Preparing cricons-react...');
    const reactDir = path.join(PACKAGES_DIR, 'react');
    await fs.ensureDir(reactDir);
    await fs.copy(path.join(DIST_DIR, 'react'), reactDir);

    // Vite build for React output might need adjustment or is already es/umd
    // Checked config: it outputs to dist/react

    const reactPackage = {
        name: 'cricons-react',
        version: VERSION,
        description: 'React components for Cricons medical icon library',
        main: 'cricons-react.umd.js',
        module: 'cricons-react.es.js',
        types: 'index.d.ts', // Check if dts plugin outputs index.d.ts
        peerDependencies: {
            react: '^16.8.0 || ^17.0.0 || ^18.0.0',
            'react-dom': '^16.8.0 || ^17.0.0 || ^18.0.0'
        },
        author: rootPackage.author,
        license: rootPackage.license,
        repository: rootPackage.repository
    };
    await fs.writeJson(path.join(reactDir, 'package.json'), reactPackage, { spaces: 2 });
    await fs.copy(path.join(ROOT_DIR, 'README.md'), path.join(reactDir, 'README.md'));


    // 5. Prepare Native Package
    console.log('📱 Preparing cricons-native...');
    const nativeDir = path.join(PACKAGES_DIR, 'native');
    await fs.ensureDir(nativeDir);
    await fs.copy(path.join(DIST_DIR, 'native'), nativeDir);

    const nativePackage = {
        name: 'cricons-native',
        version: VERSION,
        description: 'React Native components for Cricons medical icon library',
        main: 'index.js',
        types: 'index.d.ts',
        peerDependencies: {
            react: '*',
            'react-native': '*',
            'react-native-svg': '*'
        },
        author: rootPackage.author,
        license: rootPackage.license,
        repository: rootPackage.repository
    };
    await fs.writeJson(path.join(nativeDir, 'package.json'), nativePackage, { spaces: 2 });
    await fs.copy(path.join(ROOT_DIR, 'README.md'), path.join(nativeDir, 'README.md'));

    console.log('✅ Packages prepared in /packages directory!');
}

prepare().catch(console.error);
