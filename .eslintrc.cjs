module.exports = {
  root: true,
  env: { node: true, browser: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['vuejs-accessibility'],
  rules: {
    // accessibility plugin recommended rules can be enabled incrementally
    'vuejs-accessibility/alt-text': 'warn'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
