module.exports = {
  root: true, // Indicates that this is the root configuration file.
  env: {
    browser: true, // Specifies that the code is intended to run in browser environments.
    es2021: true, // Enables ES2021 globals and syntax.
  },
  extends: [
    'airbnb', // Extends the base Airbnb configuration.
    'airbnb-typescript', // Extends Airbnb's TypeScript configuration.
    'airbnb/hooks', // Extends Airbnb's React hooks configuration.
    'plugin:react/recommended', // Uses the recommended rules from eslint-plugin-react.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Should be last in the extends array.
  ],
  overrides: [], // Allows you to override settings for specific files or file patterns.
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript.
  parserOptions: {
    ecmaVersion: 'latest', // Allows for parsing modern ECMAScript features.
    sourceType: 'module', // Allows for the use of imports.
    project: './tsconfig.json', // Specifies the path to the TypeScript configuration file.
  },
  plugins: [
    'react', // Includes eslint-plugin-react for React-specific linting rules.
    '@typescript-eslint', // Includes @typescript-eslint/eslint-plugin for TypeScript-specific linting rules.
    'prettier', // Includes eslint-plugin-prettier to integrate Prettier with ESLint.
    'react-refresh', // Includes eslint-plugin-react-refresh for React Fast Refresh-specific linting rules.
  ],
  rules: {
    'react/react-in-jsx-scope': 0, // Disables the rule that enforces React to be in scope when using JSX (not needed with React 17+).
    'prettier/prettier': 'error', // Displays prettier errors as ESLint errors.
    'react-refresh/only-export-components': [
      'warn', // or 'error' depending on how strict you want to be
      { allowConstantExport: true }, // Allow exporting constants along with components
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
};
