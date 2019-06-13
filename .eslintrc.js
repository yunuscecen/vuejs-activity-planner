module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      'vue/singleline-html-element-content-newline' : 0,
      'vue/max-attributes-per-line' : 0,
      'vue/html-indent' : 0
      // 'vue/no-unused-vars': 'error'
    }
}