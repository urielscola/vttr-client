module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": ["eslint:recommended", "airbnb", "prettier", "prettier/react", "plugin:import/warnings"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
      "react/forbid-prop-types": 0,
      "react/jsx-filename-extension": 0,
      "react/react-in-jsx-scope": 0,
      "class-methods-use-this": 0,
      "no-unused-expressions": ["error", { "allowTaggedTemplates": true }],
      "no-underscore-dangle": [
        "error",
        {
          "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__", "_allPostsMeta"]
        }
      ],
      "react/no-unused-prop-types": 0,
      "consistent-return": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "prettier/prettier": "error",
      "react/destructuring-assignment": 0
    }
};