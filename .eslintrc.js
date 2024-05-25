module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}', '*.test.tsx'],
      parserOptions: {
        sourceType: 'script',
        project: './tsconfig.json',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'space-before-function-paren': ['error', 'never'],
      },
    ],
    // // Ключевое слово type в импортах типов
    '@typescript-eslint/consistent-type-imports': 'off',
    // // Неиспользуемые переменные
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // // Возвращаемый тип функции
    '@typescript-eslint/explicit-function-return-type': 'error',
    // // Оптимальные типы
    '@typescript-eslint/consistent-type-definitions': 'error',
    // // Использовать константы
    'prefer-const': 'error',
    // // Возвращать значения в функциях массивов
    'array-callback-return': 'error',
    // Запись тела функции без фигурных скобок
    '@typescript-eslint/no-confusing-void-expression': 'off',
    // Использование не boolean в выражениях
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Ошибка при использовании ts-ignore, error и т.д.
    '@typescript-eslint/ban-ts-comment': 'error',
    // Обработка промисов
    '@typescript-eslint/no-floating-promises': 'error',
  },
};
