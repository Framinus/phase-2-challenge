const expect = require('chai').expect;
const month = require('./functions.js');

describe('month()', function () {
  it('should return september when passed new Date(1981, 8, 24)', function () {
    const birthDay = new Date(1981, 8, 24);
    expect(month(birthDay)).to.equal('September');
  });
  it('should return january when passed new Date(2008, 0, 21)', function () {
    const randoDate = new Date(2008, 0, 21);
    expect(month(randoDate)).to.equal('January');
  });
});
