const bip39 = require('bip39');
const bipPath = require('bip32-path');

const isValidMnemonic = mnemonic => {
  if (!bip39.validateMnemonic(mnemonic)) {
    throw new Error('Invalid Mnemonic');
  } else {
    return true;
  }
}

const isValidPath = path => {
  if (!bipPath.validateString(path)) {
    throw new Error('Invalid Derivation Path');
  } else {
    return true;
  }
}

module.exports = { isValidMnemonic, isValidPath };