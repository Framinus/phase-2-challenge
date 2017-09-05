// Write a function month(date) to find the month for a given Date object,
// returing the name of the month as a string ('January', 'February', 'March', 'April', 'May',
// ... etc).

function month(date) {
  const monthNum = date.getMonth();
  let monthName;
  switch (monthNum) {
    case 0: {
      monthName = 'January';
      break;
    }
    case 1: {
      monthName = 'February';
      break;
    }
    case 2: {
      monthName = 'March';
      break;
    }
    case 3: {
      monthName = 'April';
      break;
    }
    case 4: {
      monthName = 'May';
      break;
    }
    case 5: {
      monthName = 'June';
      break;
    }
    case 6: {
      monthName = 'July';
      break;
    }
    case 7: {
      monthName = 'August';
      break;
    }
    case 8: {
      monthName = 'September';
      break;
    }
    case 9: {
      monthName = 'October';
      break;
    }
    case 10: {
      monthName = 'November';
      break;
    }
    case 11: {
      monthName = 'December';
      break;
    }
    default: {
      monthName = 'Invalid date object entered';
      break;
    }
  }
  return monthName;
}

// Write a function reverseSentence(string) that takes a string of words and returns
// a string with the words in reverse order. If there is only one word in the string,
// return it unchanged. Consider any series of non-space characters a word.

function reverseSentence(string) {
  if (typeof string !== 'string') {
    throw new TypeError("input must be a string");
  }
  const wordArray = string.split(/\s/g);
  const reversedArray = [];
  if (wordArray.length === 1) {
    return wordArray.join();
  } else {
    for (let i = wordArray.length - 1; i >= 0; i -= 1) {
      reversedArray.push(wordArray[i]);
    }
  }
  try {
    return reversedArray.join(" ");
  } catch (e) {
    console.log(TypeError);
  }
}

// Write a function nameProps(obj) that returns the names of the properties
// an object has in alphabetical order. Ignore symbolic properties and
// count only the "own properties" (not inherited) of the object.

function nameProps(obj) {
  if (typeof obj !== "object" || Array.isArray(obj) === true) {
    throw new TypeError("not an object");
  }
  try {
    const valuesArray = Object.values(obj);
    return valuesArray.sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    });
  } catch (e) {
    console.log(e);
  }
}

console.log(nameProps({ pet: "cats", cookie: "oatmeal raisin", fruit: "bananas" }));

module.exports = { month, reverseSentence, nameProps };
