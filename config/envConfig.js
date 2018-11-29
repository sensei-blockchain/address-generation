const convict = require('convict');

const schema = {
  mnemonic: {
    doc: 'Mnemonic',
    format: String,
    default: 'spend victory pony absurd uphold tenant casual media fork hollow champion stereo tip oppose field',
    env: 'MNEMONIC',
    arg: 'mnemonic',
  },
  derivation_path: {
    doc: 'Path for which xpriv, xpub, public key, private key and address will be derived',
    format: String,
    default: 'm/0',
    env: 'PATH',
    arg: 'path',
  },
  coin_symbol: {
    doc: 'Symbol of coin in upper case',
    format: ['BTC', 'LTC', 'DASH', 'ETH', 'ETC', 'DOGE', 'BCH'],
    default: 'BTC',
    env: 'COIN',
    arg: 'coin',
  },
  blockchain_environment: {
    doc: 'Blockchain environment configuration',
    format: ['livenet', 'testnet'],
    default: 'testnet',
    env: 'ENVIRONMENT',
    arg: 'environment',
  },
};

const envConfig = convict(schema);
envConfig.validate({ allowed: 'strict' });

module.exports = envConfig;
