import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        monacoEditorPlugin({
            forceBuildCDN: false,
        }),
        mockDevServerPlugin({
            include: 'app/mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
        }),
    ],
    server: {
        cors: false,
        proxy: {
            '^/api': {
                target: '',
            },
        },
    },
});
