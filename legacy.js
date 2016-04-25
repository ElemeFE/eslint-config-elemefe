const rules = require('./rules');

module.exports = {
  'root': true,

  'env': {
    'browser': true,
    'node': true,
    'mocha': false
  },

  'rules': rules
};