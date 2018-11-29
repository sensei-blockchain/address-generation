const { generateXPriv, generateChildNode, generateXPub } = require('../../src/extendedKeysGenerator/generateExtendedKeys');
const should = require('chai').should();
const expect = require('chai').expect;

describe('Generate Extended Keys', () => {

  const mnemonic = "cement lunar mass act cause old aerobic position guitar crawl refuse thrive";
  const path = "m/44'/0'/0";
  const expectedXPrivKey = "xprv9xn6J86cQDtrMbn6x139oaWy1tBsZn3yuwmLfBwmNZYGZUricmkLKSnGY1WTekpV98m4wmYeZ7pgp29nFgQ5fEf215UTM7eEB2eqWzvcrQT";
  const expectedXPubKey = "xpub6BmShddWEbT9a5ra42aAAiThZv2MyEmqHAgwTaMNvu5FSHBsAK4asF6kPJvr8TPKrfJiPxvZz8ikhF7M2XwgLPAopY5zG4GS5ryAZYVBp1H";

  let childNode

  it('should generate child node for given mnemonic and path', () => {
    childNode = generateChildNode(mnemonic, path);

    childNode.should.be.a('object');
  });

  it('should generate extended private key for given child node', () => {
    const xPrivKey = generateXPriv(childNode);

    xPrivKey.should.equal(expectedXPrivKey);
    xPrivKey.should.be.a('string');
    expect(xPrivKey).to.include('xprv');
  });

  it('should generate extended public key for given child node', () => {
    const xPubKey = generateXPub(childNode);

    xPubKey.should.equal(expectedXPubKey);
    xPubKey.should.be.a('string');
    expect(xPubKey).to.include('xpub');
  });

});
