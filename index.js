const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },

  "parserOptions": {
    ecmaVersion: 6,
    sourceType: "module"
  },

  'ecmaFeatures': {
    'arrowFunctions': true,
    'destructuring': true,
    'classes': true,
    'defaultParams': true,
    'blockBindings': true,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'restParams': true,
    'spread': true,
    'forOf': false,
    'generators': false,
    'templateStrings': true,
    'superInFunctions': true,
    'experimentalObjectRestSpread': true
  },

  rules: rules
};