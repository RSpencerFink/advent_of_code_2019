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
  let freq = {};
  for (let idx = 0; idx < numArray.length; idx++) {
    if (numArray[idx] >= highest) {
      highest = numArray[idx];
    } else {
      return false;
    }
    if (freq[numArray[idx]]) {
      freq[numArray[idx]]++;
    } else {
      freq[numArray[idx]] = 1;
    }
  }
  return Object.values(freq).some(el => el === 2);
};

console.log(findPasswords());
