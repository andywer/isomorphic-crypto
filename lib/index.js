if (typeof process === 'undefined' || process.browser) {
  module.exports = require('./browser')
} else {
  module.exports = require('crypto')
}
