export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};
export function caesorCipher(string, factor) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipher = [];
  let result = "";
  for (let i = 0; i < alphabet.length; i++) {
    let index = (i + factor) % alphabet.length;
    cipher.push(alphabet[index]);
  }
  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i])) {
      let alphabetIndex = alphabet.indexOf(string[i]);
      result += cipher[alphabetIndex];
    } else if (alphabet.includes(string[i].toLowerCase())) {
      let alphabetIndex = alphabet.indexOf(string[i].toLowerCase());
      result += cipher[alphabetIndex].toUpperCase();
    } else {
      result += string[i];
    }
  }

  console.log(result);

  return result;
}

export function analyzeArray(array) {
  let average = 0;
  let min = array[0];
  let max = array[0];
  let length = array.length;

  let total = 0;

  for (let i = 0; i < length; i++) {
    total += array[i];
    if (min > array[i]) {
      min = array[i];
    }
    if (max < array[i]) {
      max = array[i];
    }
  }
  average = total / length;

  return {
    average,
    min,
    max,
    length,
  };
}
