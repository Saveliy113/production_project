module.exports = {
  // exclude: ['.eslintrc.js'],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    // Синхронизация с prettier
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],
    // Точка с запятой в конце строки
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    // Ключевое слово type в импортах типов
    '@typescript-eslint/consistent-type-imports': 'off',
    // Tabwidth
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    // Разделитель в типах и интерфейсах
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        }
      }
    ],
    // Отступ названия функции
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    // Запятая последней строки в объектах, массивах
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never'
      }
    ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // Отступ фигурных скобок в объектах
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': 'error',
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',
    // Отступ скобок в массиве
    'array-bracket-spacing': ['error', 'never'],
    // Неиспользуемые переменные
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Возвращаемый тип функции
    '@typescript-eslint/explicit-function-return-type': 'error',
    // Оптимальные типы
    '@typescript-eslint/consistent-type-definitions': 'error',
    // Использовать константы
    'prefer-const': 'error',
    // Возвращать значения в функциях массивов
    'array-callback-return': 'error',
    // Запись тела функции без фигурных скобок
    '@typescript-eslint/no-confusing-void-expression': 'off',
    // Круглые скобки в стрелочных функциях с одним аргументом
    'arrow-parens': ['error', 'as-needed']
  }
};
