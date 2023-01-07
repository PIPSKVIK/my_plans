import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        EnvironmentPlugin({
            API_KEY: 'http://0.0.0.0:8000/'
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 4000,
        open: false,
        cors: true
    },
    preview: {
        open: false
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/global.scss";`
            }
        }
    }
});
