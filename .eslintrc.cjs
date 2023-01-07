/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'vue/no-mutating-props': 'off',
        'vue/no-template-shadow': 'off',
        'no-console': 1,
        'no-mixed-spaces-and-tabs': 1,
        'no-unused-vars': 0,
        'no-return-assign': 0,
        eqeqeq: 1,
        'func-names': 1,
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-multiple-template-root': 'off',
        'no-param-reassign': 'off',
        'no-use-before-define': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'consistent-return': 'off',
        'no-empty-pattern': 'off',
        'no-nested-ternary': 'off',
        'prefer-template': 'off',
        'no-useless-return': 'off',
        'jest/no-focused-tests': 'off',
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/no-v-for-template-key': 'off'
    }
};
