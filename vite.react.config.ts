import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        dts({
            outDir: 'dist/react',
            include: ['src/react']
        })
    ],
    build: {
        outDir: 'dist/react',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/react/index.ts'),
            name: 'CriconsReact',
            fileName: (format) => `cricons-react.${format}.js`
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})
