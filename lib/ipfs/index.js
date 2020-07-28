let config = require('../config');
const ipfsHttpClient = require('ipfs-http-client')

console.log( config.ipfsGatewayUrl);
const ipfs = ipfsHttpClient({
  url : config.ipfsGatewayUrl
});


const addData = async (data) => {
  try {
    if (typeof data === 'string') {
      const obj = {
        Data: Buffer.from(data),
        Links: []
      }

      const cid = await ipfs.object.put(obj)
      console.log(cid.toString());

      return cid;
    } else {
      console.log(`Data should be of type string`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

const getData = async (cid) => {
  try {
    if (typeof cid === 'string') {
      const node = await ipfs.object.get(cid);
      console.log(node._data.toString());

      return node._data.toString();
    } else {
      console.log(`CID should be of type string`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  addData,
  getData
}
