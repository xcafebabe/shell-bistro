module.exports = [
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
    },
    plugins: ['import', '@typescript-eslint', 'jest'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jest/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    ignorePatterns: ['node_modules', 'build', 'coverage'],
    env: {
      browser: false,
      es6: true,
      node: true,
    },
    rules: {
      // The following rule is enabled only to supplement the inline suppression
      // examples, and because it is not a recommended rule, you should either
      // disable it, or understand what it enforces.
      // https://typescript-eslint.io/rules/explicit-function-return-type/
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          js: 'never',
        },
      ],
      'import/no-unresolved': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
];
