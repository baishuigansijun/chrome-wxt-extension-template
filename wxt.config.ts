import {defineConfig} from 'wxt';
import react from '@vitejs/plugin-react';

console.log('📦 wxt.config.ts loaded')

// See https://wxt.dev/api/config.html
export default defineConfig({
    // modules: ['@wxt-dev/module-react'],
    srcDir: 'src',
    vite: () => (
        {
            plugins: [
                react({
                    babel: {
                        // Use babel.config.cjs files
                        configFile: true,
                    }
                })
            ],
            resolve: {
                alias: {'@': '/src'}
            }
        }
    ),
    manifest: {
        permissions: [
            'storage',
            'tabs',
            'scripting',
            "activeTab",
            "alarms"
        ],
        host_permissions: [
            // '<all_urls>',
            'https://api.example.com/*'
        ],
    }
});
