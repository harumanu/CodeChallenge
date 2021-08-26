module.exports = {
  "parser": "babel-eslint",
  "env": {
      "jest": true,
      "detox/detox": true
  },
  "extends": ["airbnb", "airbnb/hooks"],
  "plugins": ["detox"],
  "rules": {
      "arrow-parens": [2, "as-needed"],
      "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
      "class-methods-use-this": 0,
      "global-require": 0,
      "import/newline-after-import": 2,
      "import/no-extraneous-dependencies": [2, {"devDependencies": true}],
      "import/no-named-as-default-member": 0, // disabled because in our Redux files default exports are Actions, named exports are Reducers
      "indent": [2, 4, { "SwitchCase": 1 }],
      "jsx-quotes": [2, "prefer-single"],
      "max-len": [1, 120],
      "no-mixed-operators": [2, { "allowSamePrecedence": true }],
      "object-curly-newline": [2, { "minProperties": 2 }],
      "object-property-newline": 2,
      "react/destructuring-assignment": [2, "always"], // can be disabled for class components only – if it gets too annoying
      "react/jsx-filename-extension": 0,
      "react/jsx-first-prop-new-line": [2, "multiline"],
      "react/jsx-indent": [2, 4],
      "react/jsx-indent-props": [2, 4],
      "react/jsx-max-props-per-line": 2,
      "react/jsx-one-expression-per-line": [2, { "allow": "single-child" }],
      "react/jsx-sort-props": [
          1,
          {
              "callbacksLast": true,
              "ignoreCase": true,
              "reservedFirst": true
          }
      ],
      "react/require-default-props": [
          2,
          { "ignoreFunctionalComponents": true }
      ],
      "react/static-property-placement": [
          2,
          "static public field",
          {
              "defaultProps": "property assignment",
              "propTypes": "property assignment"
          }
      ],
      "semi": [2, "always"]
  }
}