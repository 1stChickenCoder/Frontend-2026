const name = "An"; // không gán lại được
let age = 20; // gán lại được
age = 21;

// var: kiểu cũ, không dùng nữa

// Khai báo tên, tuổi, thành phố của bạn rồi in ra một câu giới thiệu bằng template literal.
const myName = "Doan Duy Hoan";
const myAge = 25;
const myCity = "Hai Phong";

console.log(
  `Xin chào, tôi tên là ${myName}, tôi ${myAge} tuổi và tôi sống ở ${myCity}.`,
);

// Cho const celsius = 30, tính và in ra độ F (công thức: C * 9/5 + 32)
const celsius = 30;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius} độ C = ${fahrenheit} độ F`);

// Cho const totalSeconds = 3725, in ra dạng 1 giờ 2 phút 5 giây (gợi ý: dùng % và Math.floor)
const totalSeconds = 3725;
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

console.log(
  `${totalSeconds} giây = ${hours} giờ, ${minutes} phút, ${seconds} giây`,
);

// Hoán đổi giá trị của hai biến a và b
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(`Sau khi hoán đổi: a = ${a}, b = ${b}`);

// Hoán đổi không sử dụng biến tạm

let x = 5;
let y = 10;
[x, y] = [y, x];

console.log(`Sau khi hoán đổi: x = ${x}, y = ${y}`);
