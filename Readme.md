# Parcel SDK

Welcome to the Parcel SDK Repo.

### What is this package for?
This package includes all the methods to interact with ipfs gateway via end to end encryption.

### How do I get set up?

- npm i parcel-sdk --save
- make sure you have node installed on your machine

# Methods

## Add Data to IPFS

```js
const parcel = require("parcel-sdk");

let data = "Hello World";
await parcel.ipfs.addData(data);

```

## Get Data from IPFS

```js
const parcel = require("parcel-sdk");

let cid = "QmPb5f92FxKPYdT3QNBd1GKiL4tZUXUrzF4Hkpdr3Gf1gK";
await parcel.ipfs.getData(cid);
```
## Encrypt Data using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.encryptData("some data",signature, safeAddress);

```

## Decrypt Data using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.decryptData(<Encrypted String>,signature, safeAddress);

```

## Encrypt Data using Encryption Key

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.encryptDataUsingEncryptionKey("some data",encryptionKey);

```

## Decrypt Data using Encryption Key

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.decryptDataUsingEncryptionKey(<Encrypted String>, encryptionKey);

```


## Get Encryption Key using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.getEncryptionKey(signature, safeAddress);

```

## Encrypt data using public key

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
await parcel.cryptoUtils.encryptUsingPublicKey(data, publicKey);

```

## Encrypt data using signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
await parcel.cryptoUtils.encryptUsingSignatures(data, signature);

```

## Decrypt data using signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
await parcel.cryptoUtils.decryptUsingSignatures(encryptedData, signature);

```

## Get public key using signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.getPublicKey(signature);
