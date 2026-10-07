// Bài 1
const year = 4000;
const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(`${year} ${isLeap ? "is" : "is not"} a leap year.`);

// Bài 2
const res = [];
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    res.push(i);
  }
}
for (i in res) {
  console.log(res[i]);
}

// Bài 3
const fizzBuzz = 30;
for (let i = 1; i <= fizzBuzz; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Bài 4
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 100 is: " + sum);

// Bài 5
const num = 7;
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// Bài 6
const n = 29;
let isPrime = true;
if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(n + " is a prime number.");
} else {
  console.log(n + " is not a prime number.");
}   

// Bài 7
const text = "JavaScript";
const lowText = text.toLowerCase();
let count = 0;
for (const char of text.toLowerCase()) {
  if ("aeiou".includes(char)) count++;
}
console.log("Number of vowels in '" + text + "' is: " + count);