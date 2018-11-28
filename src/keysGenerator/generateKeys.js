const bip32 = require('bip32');

const generatePrivateKey = xprivChildNode => {
  const hdPrivNode = bip32.fromBase58(xprivChildNode);
  return hdPrivNode.privateKey.toString('hex');
}

const generatePublicKey = xpubChildNode => {
  const hdPubNode = bip32.fromBase58(xpubChildNode);
  return hdPubNode.publicKey.toString('hex');
}

module.exports = { generatePublicKey, generatePrivateKey };
