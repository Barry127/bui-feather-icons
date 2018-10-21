import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

process.env.NODE_ENV = 'production';

export default {
  input: './src/index.js',
  output: [
    {
      name: 'bui-feather-icons',
      file: './build/index.js',
      format: 'umd',
      globals: { '@barry127/bui/Icon': 'Icon' }
    },
    {
      name: 'bui-feather-icons',
      file: './build/index.module.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    resolve(),
    commonjs()
  ],
  external: ['@barry127/bui/Icon']
};
