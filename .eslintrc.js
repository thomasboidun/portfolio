module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:tailwindcss/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['vue', 'tailwindcss', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/no-unused-components': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      },
    ],
    semi: ['error', 'always'],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'off',
  },
  overrides: [
    {
      files: ['index.html'],
      rules: {
        // Désactiver les règles pour ce fichier
        'prettier/prettier': 'off',
        'vue/comment-directive': 'off',
      },
    },
    {
      files: ['*.css', '*.scss', '*.sass', '*.html', '*.vue'],
      excludedFiles: ['**/*.css', '**/*.scss'], // Ignore complètement les fichiers CSS et SCSS
    },
    {
      files: ['*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx'],
    },
  },
};
