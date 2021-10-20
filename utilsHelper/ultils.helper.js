const crypto = require("crypto");
const utilsHelper = {};
utilsHelper.generateRandomHexString = (len) => {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, len)
    .toLowerCase(); // return required number of characters
};
module.exports = utilsHelper;
