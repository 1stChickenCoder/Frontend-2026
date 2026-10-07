## Ngày 3: Hàm và scope

### 1. Khai báo hàm

```js
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
const subtract = function (a, b) {
  return a - b;
};

// Arrow function (dùng nhiều nhất trong React)
const multiply = (a, b) => {
  return a * b;
};

// Arrow function rút gọn: một biểu thức thì bỏ được {} và return
const square = (x) => x * x;
```

- `Function declaration` gọi được trước dòng khai báo (hoisting); hai cách còn lại thì không.
- Hàm không có `return` sẽ trả về `undefined`.
- `return` kết thúc hàm ngay lập tức, code phía sau không chạy.

### 2. Tham số

```js
// Giá trị mặc định
const greet = (name = "bạn") => `Xin chào ${name}`;
greet(); // "Xin chào bạn"
greet("An"); // "Xin chào An"

// Thiếu đối số thì tham số là undefined
const show = (a, b) => console.log(a, b);
show(1); // 1 undefined
```

Phân biệt in ra và trả về: `console.log` chỉ hiển thị lên màn hình, còn `return` đưa giá trị ra ngoài để dùng tiếp.

```js
const logSum = (a, b) => {
  console.log(a + b);
};
const getSum = (a, b) => a + b;

const x = logSum(1, 2); // in 3, nhưng x là undefined
const y = getSum(1, 2); // không in gì, y là 3
```

### 3. Scope

```js
const globalVar = "toàn cục";

function outer() {
  const outerVar = "trong outer";

  if (true) {
    const blockVar = "trong khối";
    console.log(globalVar, outerVar, blockVar); // thấy cả ba
  }

  console.log(blockVar); // ReferenceError: ra khỏi {} là mất
}
```

- `let` và `const` chỉ sống trong cặp `{}` gần nhất (block scope).
- Code bên trong nhìn thấy biến bên ngoài, bên ngoài không nhìn thấy biến bên trong.
- Biến trong hàm trùng tên biến ngoài sẽ che biến ngoài (shadowing).

### 4. Hàm là giá trị

- Hàm có thể gán vào biến và truyền làm đối số cho hàm khác (gọi là `callback`). Đây là nền tảng của `map`/`filter` tuần sau và của React.

```js
const repeat = (times, action) => {
  for (let i = 1; i <= times; i++) {
    action(i);
  }
};

repeat(3, (i) => console.log(`Lần ${i}`));
```

### 5. Bài tập

1. isEven(n): trả về true nếu n chẵn. Viết bằng arrow function rút gọn một dòng.
2. max3(a, b, c): trả về số lớn nhất trong ba số, không dùng Math.max.
3. isPrime(n) và countVowels(text): chuyển bài 6 và 7 hôm qua thành hàm.
4. factorial(n): tính giai thừa (factorial(5) là 120, factorial(0) là 1).
5. reverseString(text): đảo ngược chuỗi bằng vòng lặp ("hello" thành "olleh").
6. isPalindrome(text): kiểm tra chuỗi đối xứng, không phân biệt hoa thường ("Level" là true). Hãy dùng lại hàm ở bài 5.
7. calculate(a, b, operation): operation là một hàm. Gọi thử calculate(6, 3, add) và calculate(6, 3, (x, y) => x / y).
8. Đoán kết quả trước khi chạy:

```js
let count = 1;

function test() {
  let count = 2;
  if (true) {
    let count = 3;
    console.log(count);
  }
  console.log(count);
}

test();
console.log(count);

const double = (x) => {
  x * 2;
};
console.log(double(5));

console.log(typeof double);
```
