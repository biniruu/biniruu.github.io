module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    // parser: 'babel-eslint',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    // ecmaFeatures: {
    //   jsx: true,
    // },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // eslint-disable-next-line prettier/prettier
  plugins: [
    'prettier',
    // 'vue',
    '@typescript-eslint',
  ],
  extends: [
    // 'standard',
    // 'plugin:vue/strongly-recommended',
    // 'plugin:nuxt/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended' /* Typescript Lint 규칙 모음 */,
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint-config-prettier',
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-extra-semi': 'error',
    'space-in-brackets': 'warn',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'prefer-const': 'error',
    'no-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'prettier/prettier': [
      'warn',
      { singleQuote: true, trailingComma: 'all', printWidth: 80 },
    ],
    // 'vue/v-bind-style': ['warn', 'shorthand'],
    // 'vue/require-v-for-key': 'warn',
    // 'vue/no-unused-components': 'warn',
    'new-cap': 'error',
    'prefer-rest-params': 'error',
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-inner-declarations': 'off',
    '@typescript-eslint/no-var-requires': 'error',
  },
  // globals: {
  //   $nuxt: true,
  // },
  settings: {
    'import/resolver': {
      alias: [['@', './src']],
    },
  },
}
