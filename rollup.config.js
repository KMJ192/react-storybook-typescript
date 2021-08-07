import image from '@rollup/plugin-image';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './index.ts',
  output: [
    {
      dir: 'build',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    }
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    commonjs({
      include: /node_modules/
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      extensions, 
      include: ['src/**/*'], 
      babelHelpers: 'bundled'
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    })
  ]
}