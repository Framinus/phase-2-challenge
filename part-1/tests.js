const expect = require('chai').expect;
const { month, reverseSentence } = require('./functions.js');

describe('month()', function () {
  it('should return september when passed new Date(1981, 8, 24)', function () {
    const birthDay = new Date(1981, 8, 24);
    expect(month(birthDay)).to.equal('September');
  });
  it('should return january when passed new Date(2008, 0, 21)', function () {
    const randoDate = new Date(2008, 0, 21);
    expect(month(randoDate)).to.equal('January');
  });
  it('should return "undefined" when passed a bad date object', function () {
    const badDate = "january 21 2008";
    expect(month(badDate)).to.equal(undefined);
  });
});

describe('reverseSentence()', function () {
  it('should return "walrus the am I" when passed "I am the walrus"', function () {
    expect(reverseSentence("I am the walrus")).to.equal("walrus the am I");
  });
  it('should return "bananas" when passed "bananas"', function () {
    expect(reverseSentence("bananas")).to.equal("bananas");
  });
})
