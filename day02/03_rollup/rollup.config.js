import json from '@rollup/plugin-json'; // 解析 json
import { terser } from 'rollup-plugin-terser'; // 代码压缩
import nodeResolve from '@rollup/plugin-node-resolve'; // 生成 esm
import commonjs from '@rollup/plugin-commonjs'; // 生成cjs

// esm
export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',// cjs -> commonjs esm
      plugins: [terser()],
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs', // cjs -> commonjs esm
    }
  ],
  plugins: [json(), nodeResolve(), commonjs()],
  external: ['vue']
}