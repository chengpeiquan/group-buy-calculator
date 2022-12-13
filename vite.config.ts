import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/group-buy-calculator/',
  server: {
    port: 1949,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    banner(
      [
        `/*`,
        ` * name: ${pkg.name}`,
        ` * description: ${pkg.description}`,
        ` * author: ${pkg.author}`,
        ` * homepage: ${pkg.homepage}`,
        ` * license: ${pkg.license}`,
        ` */`,
      ].join('\n')
    ),
  ],
})
