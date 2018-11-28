const { address, crypto } = require('bitcoinjs-lib');
const networks = require('../networks/networks');
const ethUtils = require('ethereumjs-util');


const generateBTCCloneAddress = (publicKey, environment, coin) => {
  const publicKeyBuff = new Buffer(publicKey, 'hex');
  const network = environment === 'testnet' ? networks[coin].testnet : networks[coin].mainnet;

  return address.toBase58Check(
    crypto.hash160(publicKeyBuff),
    network.pubKeyHash
  );
}

const generateETHCloneAddress = (privateKey) => {
  const privateKeyBuff = new Buffer(privateKey, 'hex');
  return ethUtils.addHexPrefix(ethUtils.privateToAddress(privateKeyBuff).toString("hex"));
}

module.exports = { generateBTCCloneAddress, generateETHCloneAddress };
