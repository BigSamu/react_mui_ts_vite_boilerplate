module.exports = {
  // Plugins
  plugins: [
    '@trivago/prettier-plugin-sort-imports', // Plugin for sorting imports
  ],

  // General formatting settings
  semi: true, // Use semicolons at the end of statements
  singleQuote: true, // Use single quotes for strings
  tabWidth: 2, // Number of spaces per indentation level
  printWidth: 100, // Line length that the printer will wrap on
  trailingComma: 'es5', // Print trailing commas wherever possible in ES5 (objects, arrays, etc.)
  arrowParens: 'always', // Always include parens for arrow function arguments
  endOfLine: 'auto', // Maintain existing line endings
  jsxSingleQuote: true, // Use single quotes in JSX
  quoteProps: 'consistent', // If at least one property in an object requires quotes, quote all properties
  useTabs: false, // Indent lines with spaces instead of tabs
  bracketSpacing: true, // Ensure space between brackets in object literals
  bracketSameLine: false, // Ensure opening bracket is not on the same line as tag

  // Import order settings
  importOrder: [
    '^(^react$|@react|react|^recoil$)', // React and Recoil related imports
    '^@mui/(.*)$', // MUI imports
    '<THIRD_PARTY_MODULES>', // Other third-party modules
    '^@/(.*)$', // Aliased paths
    '^[./]', // Relative paths
  ],
  importOrderGroupNamespaceSpecifiers: true, // Group namespace import specifiers separately
  importOrderSeparation: false, // Do not separate import groups with new lines
  importOrderSortSpecifiers: true, // Sort import specifiers within a single import statement
};

// {
//   "arrowParens": "always",
//   "bracketSameLine": false,
//   "bracketSpacing": true,
//   "semi": false,
//   "experimentalTernaries": false,
//   "singleQuote": true,
//   "jsxSingleQuote": true,
//   "quoteProps": "as-needed",
//   "trailingComma": "es5",
//   "singleAttributePerLine": true,
//   "htmlWhitespaceSensitivity": "css",
//   "vueIndentScriptAndStyle": false,
//   "proseWrap": "preserve",
//   "insertPragma": false,
//   "printWidth": 80,
//   "requirePragma": false,
//   "tabWidth": 2,
//   "useTabs": false,
//   "embeddedLanguageFormatting": "auto"
// }
