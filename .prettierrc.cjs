// https://prettier.io/
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'auto',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: true,
  organizeImportsSkipDestructiveCodeActions: true,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
  tailwindConfig: './tailwind.config.js',
};
