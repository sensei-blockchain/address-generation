const envConfig = require('./config/envConfig');
const generateChildNode = require('./src/extendedKeysGenerator/generateChilNode');
const generateXPriv = require('./src/extendedKeysGenerator/generateXPriv');
const generateXPub = require('./src/extendedKeysGenerator/generateXPub');
const generatePrivateKey = require('./src/keysGenerator/privateKey');
const generatePublicKey = require('./src/keysGenerator/publicKey');
const generateWalletAddress = require('./src/addressGenerator/generateAddress');
const { isValidMnemonic, isValidPath } = require('./src/validator/validate');

const derivationPath = envConfig.get('derivation_path');
const mnemonic = envConfig.get('mnemonic');
const coin = envConfig.get('coin_symbol');
const environment = envConfig.get('blockchain_environment');

const main = (mnemonic, path, coin) => {
  const isEthClone = (coin === 'ETH' || coin === 'ETC');

  const childNode = generateChildNode(mnemonic, path);
  const xprivChildNode = generateXPriv(childNode);
  const xpubChildNode = generateXPub(childNode);
  const privateKey = generatePrivateKey(xprivChildNode);
  const publicKey = generatePublicKey(xpubChildNode);
  const walletAddress = generateWalletAddress(privateKey, publicKey, environment, coin);

  console.log('Extended Private Key:', xprivChildNode);
  console.log('Extended Public Key:', xpubChildNode);
  console.log('Private Key:', isEthClone ? `0x${privateKey}` : privateKey);
  console.log('Public Key:', isEthClone ? `0x${publicKey}` : publicKey);
  console.log('Wallet Address:', walletAddress);
}

if (isValidMnemonic(mnemonic) && isValidPath(derivationPath)) {
  main(mnemonic, derivationPath, coin);
} else {
  throw new Error('Error in Mnemonic or Derivation Path')
}
