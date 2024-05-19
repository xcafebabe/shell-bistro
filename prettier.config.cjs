module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.ts', '*.mts'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
