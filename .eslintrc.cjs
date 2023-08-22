module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
      },
    ],
    "quotes": [
      "error",
      "double",
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "semi": [
      "error",
      "always",
    ],
  },
};
