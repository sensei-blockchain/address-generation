const { generateBTCCloneAddress, generateETHCloneAddress } = require('./addressUtils');

const generateWalletAddress = (privateKey, publicKey, environment, coin) => {
  switch (coin) {
    case 'BTC':
    case 'LTC':
    case 'DOGE':
    case 'DASH':
    case 'BCH':
      return generateBTCCloneAddress(publicKey, environment, coin);
    case 'ETH':
    case 'ETC':
      return generateETHCloneAddress(privateKey);
  }
}

module.exports = generateWalletAddress;
