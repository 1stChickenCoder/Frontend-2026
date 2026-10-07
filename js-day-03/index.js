// isEven(n)
const isEven = (n) => n % 2 === 0;

// isOdd(n)
const isOdd = (n) => n % 2 !== 0;

// max3(a, b, c)
const max3 = (a, b, c) => Math.max(a, b, c);

// min3(a, b, c)
const min3 = (a, b, c) => Math.min(a, b, c);

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
const reverseString = (text) => text.split('').reverse().join('');

// isPalindrome(text)
const isPalindrome = (text) => {
  const reversed = reverseString(text);
  return text === reversed;
};

// calculate(a, b, operation)
const calculate = (a, b, operation) => {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) return undefined; // Avoid division by zero
      return a / b;
    default:
      return undefined; // Invalid operation
  }
};