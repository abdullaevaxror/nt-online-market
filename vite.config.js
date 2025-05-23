import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        watch: {
            usePolling: true,
            interval: 1000, // 1 sekundda bir tekshiradi
        },
        host: 'localhost',
        cors: true,
        // yoki aniq ruxsatlar
        origin: 'http://localhost:8060',
        port: 8040,
        hmr: {
            host: 'localhost',
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});

