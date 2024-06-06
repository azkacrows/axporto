/* eslint-env node */
module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    rules: {
        'vue/no-parsing-error': [
            'error',
            {
                'invalid-first-character-of-tag-name': false,
            },
        ],
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
};
