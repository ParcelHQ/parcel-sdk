const crypto = require("crypto");
const Cryptr = require("cryptr");
const EthCrypto = require('eth-crypto');

const createHash = data => {
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
};

const encryptData = (data, signature, safeAddress) => {
  let encryptionKey = createHash(signature + safeAddress);
  const cryptr = new Cryptr(encryptionKey);
  return cryptr.encrypt(data);
};

const decryptData = (data, signature, safeAddress) => {
  let encryptionKey = createHash(signature + safeAddress);
  const cryptr = new Cryptr(encryptionKey);
  return cryptr.decrypt(data);
};

const getEncryptionKey = (signature, safeAddress) => {
  return createHash(signature + safeAddress);
}

const getKeyPair = (signature) => {
  const entropy = Buffer.from(signature, 'utf-8'); // must contain at least 128 chars
  const identity = EthCrypto.createIdentity(entropy);

  let {address, publicKey, privateKey} = identity;

  return {publicKey, privateKey};
}

const encryptUsingPublicKey = async (data, signature) => {
  let {publicKey, privateKey } = getKeyPair(signature);

  const encrypted = await EthCrypto.encryptWithPublicKey(
        publicKey, // publicKey
        data // message
    );

  return EthCrypto.cipher.stringify(encrypted);

}

const decryptUsingPrivateKey = async (data, signature) => {
  let {publicKey, privateKey } = getKeyPair(signature);

  const str = EthCrypto.cipher.parse(data);

  const decrypted = await EthCrypto.decryptWithPrivateKey(
        privateKey, // publicKey
        str // message
    );

  return decrypted;
}

const getPublicKey = (signature) => {
  let {publicKey, privateKey } = getKeyPair(signature);

  return publicKey;
}

console.log(getPublicKey("0x4769663a9d920d85507d293e39ea9f93371d5adc088d5dcad9b68fc81d4b50160e76ab92a84c8642d6cd712120a4daffa7c0f62ba9460927e0bdefc10b4a6a181c"));


module.exports = {
  createHash,
  encryptData,
  decryptData,
  getEncryptionKey,
  encryptUsingPublicKey,
  decryptUsingPrivateKey,
  getPublicKey
};
