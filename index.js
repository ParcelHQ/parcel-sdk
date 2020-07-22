const appRoot = require('app-root-path');
const ipfs = require(`${appRoot}/lib/ipfs`);
const cryptoUtils = require(`${appRoot}/lib/crypto`);


module.exports = {
  ipfs,
  cryptoUtils
}
