import { defineConfig } from 'vite'
import path from 'path';
import { compression } from 'vite-plugin-compression2'
import ViteRestart from 'vite-plugin-restart'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ command }) => {
    return {
        base: command === 'serve' ? '' : '/dist/',
        plugins: [
            ViteRestart({
                restart: [
                    './templates/**/*',
                    './src/css/**/*',
                    './src/js/**/*',
                    './src/img/**/*',
                ]
            }),
            compression({
                exclude: [/\.(br)$/, /\.(gz)$/]
            })
        ],
        build: {
            manifest: true,
            outDir: 'web/dist/',
            sourcemap: false,
            rollupOptions: {
                treeshake: 'smallest',
                input: {
                    app: 'src/js/app.js',
                    css: 'src/css/style.pcss'
                },
                output: {
                    manualChunks(id) {
                        if (id.includes('alpinejs')) {
                            return 'alpinejs';
                        }
                    }
                }
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        server: {
            fs: {
                strict: false
            },
            origin: 'http://localhost:3000',
            port: 3000,
            host: '0.0.0.0',
            strictPort: true,
        }
    }
});
