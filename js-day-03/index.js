// isEven(n)
const isEven = (n) => n % 2 === 0;

// isOdd(n)
const isOdd = (n) => n % 2 !== 0;

// max3(a, b, c)
const max3 = (a, b, c) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return 'Error: All arguments must be numbers.';
  }
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// countVowels
const countVowels = (text) => {
  if (typeof text !== 'string') {
    return 'Error: Input must be a string.';
  }
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// isPrime(n)
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// factorial(n)
const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// reverseString(text)
const reverseString = (text) => {
  if (typeof text !== 'string') {
    return 'Error: Input must be a string.';
  }
  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

// isPalindrome(text)
const isPalindrome = (text) => {
  const lower = text.toLowerCase();
  return lower === reverseString(lower);
};
// calculate(a, b, operation)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const calculate = (a, b, operation) => {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      if (b === 0) return undefined; // Avoid division by zero
      return divide(a, b);
    default:
      return undefined; // Invalid operation
  }
};
// applyTwice(fn, x)
const applyTwice = (fn, x) => fn(fn(x));

// transformAll(arr, fn)
const transformAll = (arr, fn) => {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
};

console.log(max3(5, 5, 3)); // 5
console.log(isPalindrome('Level')); // true
console.log(applyTwice((n) => n * 3, 2)); // 18
console.log(transformAll([1, 2, 3], (n) => n * 10)); // [10, 20, 30]
