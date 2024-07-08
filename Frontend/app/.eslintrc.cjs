module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true, // Updated to es2022 for the latest ECMAScript support
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 2022, // Updated to 2022 for the latest ECMAScript version
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react", "react-hooks", "prettier"], // Removed react-refresh as it's not needed for ESLint
  rules: {
    "react/jsx-no-target-blank": "off",
    "react/react-in-jsx-scope": "off", // May need to turn this off depending on your setup
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error",
  },
};
