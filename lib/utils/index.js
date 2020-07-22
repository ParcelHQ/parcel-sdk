const uuidv4 = require("uuid/v4");

const generateId = () => {
  return uuidv4();
}

module.exports = { generateId };
