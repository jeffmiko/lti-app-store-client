import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const name = 'ltiappstore-client'

import { version } from './package.json'
const banner = `/* ${name} ${version} MIT */`

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.mjs`,
        format: 'esm',
        banner: banner,
      },
    ],
    plugins: [
      nodePolyfills(),
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      filesize(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.js`,
        format: 'umd',
        sourcemap: true,
        name: 'ltiappstoreClient',
        banner: banner,
      },
    ],
    plugins: [
      nodePolyfills(),
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      filesize(),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: `builds/${name}.min.js`,
        format: 'umd',
        name: 'ltiappstoreClient',
      },
    ],
    plugins: [
      nodePolyfills(),
      resolve(),
      commonjs(),
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
      filesize(),
    ],
  },
]