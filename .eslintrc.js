module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',   // 或 '@babel/eslint-parser'
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json'      // 让 TS 插件能读取你的 tsconfig
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'prettier'
    ],
    extends: [
        'airbnb',                           // 核心规则
        'airbnb/hooks',                     // React Hooks
        'plugin:@typescript-eslint/recommended',  // TS 规则
        'plugin:jsx-a11y/recommended',      // 可访问性
        'prettier'                          // 如果你也用 Prettier
    ],
    settings: {
        react: { version: 'detect' }
    },
    rules: {
        // React×TSX
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        // import 省略 .ts/.tsx/.js 后缀
        'import/extensions': 'off',
        // TypeScript 函数返回类型可省略
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // 让 ESLint 报出 Prettier 格式问题
        'prettier/prettier': 'error'
    }
};
