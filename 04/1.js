const start = 231832;
const end = 767346;

const findPasswords = () => {
  let validPasswords = 0;
  for (let idx = start; idx < end; idx++) {
    if (passwordValid(idx)) {
      validPasswords++;
    }
  }
  return validPasswords;
};

const passwordValid = num => {
  const numArray = [];
  while (num > 0) {
    numArray.push(num % 10);
    num = parseInt(num / 10);
  }
  let highest = numArray[0];
  let hasDouble = false;
  for (let idx = 0; idx < numArray.length; idx++) {
    if (numArray[idx] >= highest) {
      highest = numArray[idx];
    } else {
      return false;
    }
    if (numArray[idx] === numArray[idx + 1]) {
      hasDouble = true;
    }
  }
  return hasDouble;
};

console.log(findPasswords());
