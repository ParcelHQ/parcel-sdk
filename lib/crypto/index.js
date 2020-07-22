const appRoot = require('app-root-path');
const crypto = require("crypto");
const Cryptr = require("cryptr");

const createHash = data => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
};

const encryptData = (data, signature) => {
  let encryptionKey = createHash(signature);
  const cryptr = new Cryptr(encryptionKey);
  return cryptr.encrypt(data);
};

const decryptData = (data, signature) => {
  let encryptionKey = createHash(signature);
  const cryptr = new Cryptr(encryptionKey);
  return cryptr.decrypt(data);
};

const getEncryptionKey = (signature) => {
  return createHash(signature);
}



module.exports = { createHash, encryptData, decryptData, getEncryptionKey };
