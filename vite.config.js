import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { plugin as markdown } from 'vite-plugin-markdown';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/thomasboidun.github.io/' : '/',
  plugins: [
    vue(), //
    markdown({ mode: ['vue'] }),
    eslintPlugin(),
  ],
});
