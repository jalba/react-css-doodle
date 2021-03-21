import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

const config = [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'] }),
      typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true
      })
    ],
    external: Object.keys(pkg.peerDependencies || {})
  },
];

export default config;
