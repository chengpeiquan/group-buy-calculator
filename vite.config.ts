import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const manualChunks = {}
for (const key in pkg.dependencies) {
  if (Object.prototype.hasOwnProperty.call(pkg.dependencies, key)) {
    manualChunks[key] = key
  }
}
console.log(manualChunks)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/group-buy-calculator/',
  server: {
    port: 1949,
  },
  build: {
    rollupOptions: {
      output: {
        // 其中一种方式
        manualChunks: {
          antd: ['antd'],
          react: ['react'],
          'react-dom': ['react-dom'],
        },

        // 另外一种方式
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id
        //       .toString()
        //       .split('node_modules/')[1]
        //       .split('/')[0]
        //       .toString()
        //   }
        // },
      },
    },
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
