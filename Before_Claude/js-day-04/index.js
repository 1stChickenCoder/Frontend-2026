// sumArray
function sumArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Error: All elements in the array must be numbers.';
    }
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// findmax
function findMax(arr) {
  if (arr.length === 0) {
    return 'Error: Array is empty.';
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Error: All elements in the array must be numbers.';
    }
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// countOccurrences
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      count++;
    }
  }
  return count;
}

// removeDuplicates
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// getEvens
function getEvens(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Error: All elements in the array must be numbers.';
    }
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

// reverseArray
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

// chunk
function chunk(arr, size) {
  if (size <= 0) {
    return 'Error: Size must be a positive integer.';
  }
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

// capitalizeWords
function capitalizeWords(str) {
  if (typeof str !== 'string') {
    return 'Error: Input must be a string.';
  }
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}