import stylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'

export default [{
  "extends": "next/core-web-vitals",
  "plugins": [
    "@stylistic/ts": stylisticTs
  ],
  "parser": parserTs,
  "rules": {
    '@stylistic/ts/quotes': ["error", "double"];
    "semi": [
      2,
      "always"
    ],
    "indent": [
      "error",
      2
    ],
    "no-trailing-spaces": "error",
    "curly": "error",
    "brace-style": "error",
    "no-multi-spaces": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "no-whitespace-before-property": "error",
    "func-call-spacing": "error",
    "space-before-blocks": "error",
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "block-spacing": "error",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "key-spacing": [
      "error",
      {
        "mode": "strict"
      }
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "assert": "either"
      }
    ],
    "linebreak-style": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}];