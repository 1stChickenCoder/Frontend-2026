let a = 10;
let b = a; // copy giá trị 10
b = 20;
console.log(a); // 10

const user1 = { name: "Hung" };
const user2 = user1;
user2.name = "Lan";

console.log(user1);
console.log(user2);
// Lan
// Lan

console.log("abc" === "abc")
// true
// console.log([] === [])
// console.log({ a: 1 } === { a: 1 })
// This condition will always return 'false' since JavaScript compares objects by reference, not value.
const x = {}; const y = x;