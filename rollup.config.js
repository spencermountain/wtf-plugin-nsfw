import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import fs from 'fs'

const pkg = JSON.parse(fs.readFileSync('./package.json').toString())
const version = pkg.version
console.log('\n 📦  - running rollup..\n')

const banner = '/* spencermountain/wtf-plugin-nsfw ' + version + ' MIT */'

export default [
  {
    input: 'src/index.js',
    output: [{ banner: banner, file: 'builds/wtf-plugin-nsfw.mjs', format: 'esm' }],
    plugins: [nodeResolve(), json(), terser()]
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner: banner,
        file: 'builds/wtf-plugin-nsfw.cjs',
        format: 'umd',
        sourcemap: false,
        name: 'wtf-plugin-nsfw'
      }
    ],
    plugins: [nodeResolve(), json(),
      commonjs(),
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {
        banner: banner,
        file: 'builds/wtf-plugin-nsfw.min.js',
        format: 'umd',
        name: 'wtf-plugin-nsfw'
      }
    ],
    plugins: [nodeResolve(), json(), commonjs(), terser()]
  }
]
