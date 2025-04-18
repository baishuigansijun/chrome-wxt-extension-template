// babel.config.cjs
console.log('📦 babel.config.cjs loaded')

module.exports = {
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        ['@babel/preset-env', {
            targets: '>0.2%, not dead',
            useBuiltIns: false,
            corejs: 3,
            modules: false
        }]
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', {
            corejs: 3,
            helpers: true,
            regenerator: true
        }]
    ]
};
