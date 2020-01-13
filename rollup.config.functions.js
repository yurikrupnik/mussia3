import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';

const cwd = process.cwd();

const globals = {};

const defaultModule = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        globals
    },
    plugins: [
        external({}),
        babel({}),
        resolve({
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        commonjs({}),
        copy({
            targets: [
                { src: path.join(cwd, 'package.json'), dest: 'dist' },
            ]
        })
    ]
};

export default defaultModule;
