const expect = require('chai').expect;
const { month, reverseSentence, nameProps, filterBetween } = require('./functions.js');

describe('month()', function () {
  it('should return september when passed new Date(1981, 8, 24)', function () {
    const birthDay = new Date(1981, 8, 24);
    expect(month(birthDay)).to.equal('September');
  });
  it('should return january when passed new Date(2008, 0, 21)', function () {
    const randoDate = new Date(2008, 0, 21);
    expect(month(randoDate)).to.equal('January');
  });
  it('should return "not a valid date object" if passed in something other than an object.', function () {
    const badDate = "2017, 8, 4";
    expect(() => month(badDate)).to.throw(TypeError, "not a valid date object");
  });
});

describe('reverseSentence()', function () {
  it('should return "walrus the am I" when passed "I am the walrus"', function () {
    expect(reverseSentence("I am the walrus")).to.equal("walrus the am I");
  });
  it('should return "bananas" when passed "bananas"', function () {
    expect(reverseSentence("bananas")).to.equal("bananas");
  });
  it('should throw a TypeError when passed an array', function () {
    expect(() => reverseSentence([])).to.throw(TypeError, "input must be a string");
  });
});

describe('nameProps()', function () {
  it('should return ["bananas", "cats", "oatmeal raisin"] if passed { pet: "cats", cookie: "oatmeal raisin", fruit: "bananas" }', function () {
    const testObj = { pet: "cats", cookie: "oatmeal", fruit: "bananas" };
    expect(nameProps(testObj)).to.eql(["bananas", "cats", "oatmeal"]);
  });
  it('should return ["bananas, "cats", "Fiji"] if passed { pet: "cats", country: "Fiji", fruit: "bananas" }', function () {
    const testObj = { pet: "cats", country: "Fiji", fruit: "bananas" };
    expect(nameProps(testObj)).to.eql(["bananas", "cats", "Fiji"]);
  });
  it('should throw an error if passed a string', function () {
    expect(() => nameProps("bananas")).to.throw(TypeError, "not an object");
  });
  it('should throw an error if passed an array', function () {
    expect(() => nameProps(["bananas", "cats", "Fiji"])).to.throw(TypeError, "not an object");
  });
});

describe('filterBetween()', function () {
  it('should return ["dates", "kiwis"] if min is "cherries" and max is "strawberries"', function () {
    const fruitArray = ["apples", "bananas", "dates", "kiwis", "watermelons"];
    expect(filterBetween(fruitArray, "cherries", "strawberries")).to.eql(["dates", "kiwis"]);
  });
  it('should throw an error if first argument is not an array', function () {
    expect(() => filterBetween("fakeArray", "elephant", "kazoo")).to.throw(TypeError, "first argument must be an array");
  });
  it('should throw an error if min is not a string', function () {
    expect(() => filterBetween(["apples", "bananas"], 5, "strawberries")).to.throw(TypeError, "min must be a string");
  });
  it('should throw an error if max is a not a string', function () {
    expect(() => filterBetween(["apples", "bananas"], "cherries", 7)).to.throw(TypeError, "max must be a string");
  });
});
