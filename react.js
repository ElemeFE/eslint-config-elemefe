const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },

  // dependencies: eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
  'plugins': [
    'react',
    'import',
    'jsx-a11y'
  ],

  'parser': 'babel-eslint',

  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    }
  },

  'rules': rules
};
