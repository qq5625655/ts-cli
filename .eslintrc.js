module.exports = {
    env: {
        node: true,
		browser: true,
		es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules:{
        '@typescript-eslint/no-var-requires': 0,
    },
    // lib与dist目录下的eslint错误通过eslintignore来进行
    
};
