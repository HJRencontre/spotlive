import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    resolve: {
        alias: getAliases(),
    },
    plugins: [react(), tailwindcss()],
    preview: {
        port: 5173,
        strictPort: true,
    },
    server: {
        port: 5173,
        strictPort: true,
        host: true,
        origin: 'http://0.0.0.0:5173',
    },
});

function getAliases() {
    return [
        {
            find: '@',
            replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
            find: '@components',
            replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
        },
        {
            find: '@styles',
            replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
        },
    ];
}
