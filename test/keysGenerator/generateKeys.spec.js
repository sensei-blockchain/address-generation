const { generatePublicKey, generatePrivateKey } = require('../../src/keysGenerator/generateKeys');
const should = require('chai').should();
const expect = require('chai').expect;

describe('Generate Public and Private Keys', () => {

  const xPrivKey = 'xprv9xn6J86cQDtrMbn6x139oaWy1tBsZn3yuwmLfBwmNZYGZUricmkLKSnGY1WTekpV98m4wmYeZ7pgp29nFgQ5fEf215UTM7eEB2eqWzvcrQT';
  const xPubKey = 'xpub6BmShddWEbT9a5ra42aAAiThZv2MyEmqHAgwTaMNvu5FSHBsAK4asF6kPJvr8TPKrfJiPxvZz8ikhF7M2XwgLPAopY5zG4GS5ryAZYVBp1H';

  const expectedPrivateKey = '299c0d82d3d2b12bfa431cd27651d11eb3b740e3671290f1b2aded52896a9726';
  const expectedPublicKey = '03645dbfaa6da67bd47beab178a89653f48bda5f620aaa5c8949613faab7a3064f';

  it('should generate private key from extended private key', () => {
    const privateKey = generatePrivateKey(xPrivKey);

    privateKey.should.equal(expectedPrivateKey);
    privateKey.should.be.a('string');
  });

  it('should generate public key from extended public key', () => {
    const publicKey = generatePublicKey(xPubKey);

    publicKey.should.equal(expectedPublicKey);
    publicKey.should.be.a('string');
  });
});
