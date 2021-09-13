import resolve from '@rollup/plugin-node-resolve';
import image from 'rollup-plugin-image';
import svgr from '@svgr/rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './index.ts',
  output: [
    {
      dir: 'build',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: '.',
    },
    {
      dir: 'build',
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    svgr(),
    resolve({ extensions }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    analyze({
      summaryOnly: true,
    }),
    terser(),
  ],
};
