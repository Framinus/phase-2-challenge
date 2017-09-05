// Write a function month(date) to find the month for a given Date object,
// returing the name of the month as a string ('January', 'February', 'March', 'April', 'May',
// ... etc).

const dateObj = new Date();

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

console.log(month(dateObj));

module.exports = month;
