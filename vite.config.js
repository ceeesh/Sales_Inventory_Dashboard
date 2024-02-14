import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

// const env = loadEnv(mode, process.cwd(), '');

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        react(),
    ], 
    // define: {
    //     'process.env.APP_KEY': JSON.stringfy(env.APP_KEY)
    // },
    esbuild: {
        loader: 'jsx'
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                ".js": "jsx",
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
            }
        },
        chunkSizeWarningLimit: 1500000
    }
});
