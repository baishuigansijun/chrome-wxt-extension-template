import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

console.log('📦 wxt.config.ts loaded')

// See https://wxt.dev/api/config.html
export default defineConfig({
  // modules: ['@wxt-dev/module-react'],
  srcDir: 'src',
  vite:()=>(
      {
        plugins: [
          // 用 Babel 版的 React 插件，它会自动读取根目录的 babel.config.cjs
          react({
              babel: {
                  // Use babel.config.cjs files
                  configFile: true,
              }
          })
        ],
        resolve: {
          alias: { '@': '/src' }
        }
      }
  )
});
