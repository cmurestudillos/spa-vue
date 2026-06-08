import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      eqeqeq: ['error', 'always'],
    },
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
    },
  },
  prettier,
];
