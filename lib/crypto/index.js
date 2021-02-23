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


const encryptDataUsingEncryptionKey = (data, encryptionKey, organisationType) => {

  if (organisationType == undefined || organisationType == 0) {
    const cryptr = new Cryptr(encryptionKey);
    return cryptr.encrypt(data);
  } else {
    return data;
  }

};

const decryptDataUsingEncryptionKey = (data, encryptionKey, organisationType) => {
  if (organisationType == undefined || organisationType == 0) {
    const cryptr = new Cryptr(encryptionKey);
    return cryptr.decrypt(data);
  } else {
    return data;
  }
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

const encryptUsingSignatures = async (data, signature) => {
  let {publicKey, privateKey } = getKeyPair(signature);

  const encrypted = await EthCrypto.encryptWithPublicKey(
        publicKey, // publicKey
        data // message
    );

  return EthCrypto.cipher.stringify(encrypted);

}

const encryptUsingPublicKey = async (data, publicKey) => {

  const encrypted = await EthCrypto.encryptWithPublicKey(
        publicKey, // publicKey
        data // message
    );

  return EthCrypto.cipher.stringify(encrypted);

}


const decryptUsingSignatures = async (data, signature, organisationType) => {
  if (organisationType == undefined || organisationType == 0) {
    let {publicKey, privateKey } = getKeyPair(signature);

    const str = EthCrypto.cipher.parse(data);

    const decrypted = await EthCrypto.decryptWithPrivateKey(
          privateKey, // publicKey
          str // message
      );

    return decrypted;
  } else {
    return data;
  }
}

const getPublicKey = (signature) => {
  let {publicKey, privateKey } = getKeyPair(signature);

  return publicKey;
}


module.exports = {
  createHash,
  encryptData,
  decryptData,
  getEncryptionKey,
  encryptUsingSignatures,
  decryptUsingSignatures,
  getPublicKey,
  encryptUsingPublicKey,
  encryptDataUsingEncryptionKey,
  decryptDataUsingEncryptionKey

};
