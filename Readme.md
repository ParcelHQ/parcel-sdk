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

let cid = "Hello World";
await parcel.ipfs.getData(cid);
```
## Encrypt Data using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.encryptData("some data",signature);

```

## Decrypt Data using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.decryptData(<Encrypted String>,signature);

```

## Get Encryption Key using Ethereum Signatures

```js
const parcel = require("parcel-sdk");

let signature = <Get signature from ethereum private key by signing a message>
parcel.cryptoUtils.getEncryptionKey(signature);

```
