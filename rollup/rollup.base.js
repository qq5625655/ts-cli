const path = require('path');
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve'; // rollup-plugin-node-resolve 插件允许我们加载第三方模块
import commanjs from '@rollup/plugin-commonjs';  // @rollup/plugin-commons 插件将它们转换为ES6版本
// rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。
// 然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm 模块不能直接编译使用。
// 所以辅助rollup.js编译支持 npm模块和CommonJS模块方式的插件就应运而生。
import eslint from '@rollup/plugin-eslint';

import pkg from '../package.json';

const extensions = ['.js', '.ts'];
export default {
    input: path.resolve(__dirname, '../src/index.ts'),
    output:[
        {
            file: pkg.main,
            format: 'cjs',

        },
        {
            file: pkg.module,
            format: 'esm',

        },
        {
            file: pkg.browser,
            format: 'umd',
            name: 'axios-zxs',

        },

        
    ],
    watch:{
        include: '../src/**',
    },
    plugins:[
        resolve(),
        commanjs(),
        eslint({
            include: ['src/**'],
            throwOnError: true,
        }),
        babel({
            exclude: '../node_modules/**',
            runtimeHelpers: true,
            extensions,
        }),
        
    ],
};