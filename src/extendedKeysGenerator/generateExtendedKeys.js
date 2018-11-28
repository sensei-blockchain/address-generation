const bip39 = require('bip39');
const bip32 = require('bip32');

const generateChildNode = (mnemonic, path) => {
  const masterNode = bip32.fromSeed(bip39.mnemonicToSeed(mnemonic));
  return masterNode.derivePath(path);
}

const generateXPriv = childNode => childNode.toBase58();

const generateXPub = childNode => childNode.neutered().toBase58();

module.exports = { generateXPriv, generateChildNode, generateXPub };
