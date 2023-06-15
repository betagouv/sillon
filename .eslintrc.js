module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: { node: true, browser: true },
  rules: {
    'interface-name': 'off',
    'no-console': 'off',
    'no-implicit-dependencies': 'off',
    'no-submodule-imports': 'off',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'react/jsx-key': 'off',
    // When hunting dead code it's useful to use the following:
    // ---
    // 'import/no-unused-modules': [1, { unusedExports: true }],
  },
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      extends: 'plugin:mdx/recommended',
      parserOptions: {
        // The version needs to be "fixed" due to linting errors otherwise (ref: https://github.com/mdx-js/eslint-mdx/issues/366#issuecomment-1361898854)
        ecmaVersion: 12,
      },
      rules: {
        'no-unused-vars': 'off', // It triggers for no reason on statically used variables like the Storybook for `<Meta>`
      },
    },
    {
      // Needed to avoid the "'JSX' is not defined" error (ref: https://stackoverflow.com/questions/64170868/why-eslint-consider-jsx-or-some-react-types-undefined-since-upgrade-typescript)
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
