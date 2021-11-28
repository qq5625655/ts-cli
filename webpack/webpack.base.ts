// scripts/webpack.base.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');

module.exports = {
    // 入口文件，这里之后会着重强调
    entry: {
        main: path.resolve(__dirname, '../src/index.ts'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new ESLintPlugin({
            extensions:['js', 'ts'],
            files:path.resolve(__dirname, '../src/**'),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        
    ]
};
