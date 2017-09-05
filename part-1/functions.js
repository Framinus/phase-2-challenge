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

module.exports = { month, reverseSentence };
