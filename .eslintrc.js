module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/airbnb',
    'plugin:vue/essential',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0,
    'max-len': ['error', { code: 200 }],
    'no-trailing-spaces': [2, { skipBlankLines: true }]
  }
};
