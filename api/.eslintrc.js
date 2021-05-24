
module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
  },

  plugins: ['prettier', '@typescript-eslint'],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    // 'babel/new-cap': 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', varsIgnorePattern: '^_' },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['src'],
      },
    },
  },
  env: {
    node: true,
    jest: true,
  },
};