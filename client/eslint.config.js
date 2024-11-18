// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "jsx-a11y"],
  rules: {
    // General ESLint rules
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "no-console": "warn",
    "prefer-const": "error",

    // TypeScript-specific rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // React-specific rules
    "react/react-in-jsx-scope": "off", // Disable since React 17+ does not require imports
    "react/prop-types": "off", // Not needed with TypeScript

    // React Hooks rules
    "react-hooks/rules-of-hooks": "error", // Checks the rules of hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    // Accessibility rules
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  ignorePatterns: ["dist", "node_modules"],
};
