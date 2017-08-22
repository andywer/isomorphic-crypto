# isomorphic-crypto [![NPM Version](https://img.shields.io/npm/v/isomorphic-crypto.svg)](https://www.npmjs.com/package/isomorphic-crypto)

Isomorphic crypto package for node and the browser. Uses the [native crypto module](https://nodejs.org/api/crypto.html) when run in node and [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) when run in the browser. Use it for hashing, signing and your other crypto needs!


## Installation

```sh
npm install --save isomorphic-crypto

# using yarn:

yarn add isomorphic-crypto
```


## Usage

Have a look at the official [crypto documentation](https://nodejs.org/api/crypto.html).

Please be aware that the browser version of this library uses `crypto-browserify`, which is only a partial implementation of node's native `crypto` module. Check out [their documentation](https://www.npmjs.com/package/crypto-browserify) to see what is supported and what not.


## Example

```js
const crypto = require('isomorphic-crypto')

function sha512 (string) {
  const hash = crypto.createHash('sha512')
  hash.write(string)
  return hash.digest('hex')
}

console.log(`sha512('crypto rocks') = ${sha512('crypto rocks')}`)
```


## Versioning

The library's major version matches the major version of the [crypto-browserify](https://www.npmjs.com/package/crypto-browserify) package. The minor and patch version can be bumped independently.

## License

MIT
