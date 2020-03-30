import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import sizeCheck from 'rollup-plugin-filesize-check'

import { version } from './package.json'
console.log('\n 📦  - running rollup..\n')

const name = 'wtf-plugin-nsfw'
const banner = `/* ${name} ${version}  MIT */`
export default [
  // ===  es-module ===
  {
    input: 'src/index.js',
    output: [{ banner: banner, file: `builds/${name}.mjs`, format: 'esm' }],
    plugins: [
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      })
    ]
  },

  // === .js ===
  {
    input: 'src/index.js',
    output: [
      {
        banner: banner,
        file: `builds/${name}.js`,
        format: 'umd',
        name: 'wtfNSFW',
        sourcemap: true
      }
    ],
    plugins: [
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      })
    ]
  },
  // ===  min.js ===
  {
    input: 'src/index.js',
    output: [
      {
        banner: banner,
        file: `builds/${name}.min.js`,
        format: 'umd',
        name: 'wtfNSFW',
        sourcemap: false
      }
    ],
    plugins: [
      commonjs(),
      babel({
        babelrc: false,
        presets: ['@babel/preset-env']
      }),
      terser(),
      sizeCheck({ expect: 22, warn: 10 })
    ]
  }
]
