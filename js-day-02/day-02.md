## Ngày 2: Điều kiện và vòng lặp

### 1. So sánh và logic

```js
5 > 3; // true
5 >= 5; // true
5 !== "5"; // true  (khác kiểu)

true && false; // false  (VÀ: cả hai cùng đúng)
true || false; // true   (HOẶC: một trong hai đúng)
!true; // false  (PHỦ ĐỊNH)
```

`&&` và `||` trả về chính giá trị của một trong hai vế, không nhất thiết là boolean:

```js
"An" || "Khách"; // "An"     (lấy giá trị truthy đầu tiên)
"" || "Khách"; // "Khách"
0 ?? 10; // 0        (?? chỉ thay thế khi là null/undefined)
0 || 10; // 10       (|| thay thế mọi giá trị falsy)
```

### 2. Rẽ nhánh

```js
const score = 75;

if (score >= 90) {
  console.log("Giỏi");
} else if (score >= 70) {
  console.log("Khá");
} else {
  console.log("Cần cố gắng");
}
```

Toán tử ba ngôi dùng cho trường hợp ngắn, chỉ có hai nhánh:

```js
const status = age >= 18 ? "Người lớn" : "Trẻ em";
```

`switch` dùng khi so một biến với nhiều giá trị cố định:

```js
switch (day) {
  case 6:
  case 7:
    console.log("Cuối tuần");
    break;
  default:
    console.log("Ngày thường");
}
```

Quên `break` thì code sẽ chạy tiếp xuống `case` bên dưới.

### 3. Vòng lặp

```js
// for: biết trước số lần lặp
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// while: lặp đến khi điều kiện sai
let n = 10;
while (n > 0) {
  n -= 3;
}

// for...of: duyệt từng phần tử của mảng hoặc chuỗi
for (const char of "abc") {
  console.log(char);
}
```

- `break` thoát hẳn vòng lặp.
- `continue` bỏ qua lần lặp hiện tại và sang lần kế tiếp.
- Nếu điều kiện không bao giờ sai, vòng lặp chạy vô hạn; bấm `Ctrl + C` trong terminal để dừng.

### 4. Bài tập

1. Cho const year = 2024, in ra năm đó có phải năm nhuận không (chia hết cho 4 và không chia hết cho 100, hoặc chia hết cho 400). Thử thêm với 1900 và 2000.
2. In các số từ 1 đến 50 chia hết cho 3 nhưng không chia hết cho 2.
3. FizzBuzz: in từ 1 đến 30; số chia hết cho 3 in Fizz, chia hết cho 5 in Buzz, chia hết cho cả hai in FizzBuzz, còn lại in chính số đó.
4. Tính tổng các số từ 1 đến 100 bằng vòng lặp.
5. Cho const n = 7, in bảng cửu chương của n (từ 7 x 1 = 7 đến 7 x 10 = 70).
6. Cho const num = 29, kiểm tra num có phải số nguyên tố không. Thử thêm với 1, 2, 15.
7. Cho const text = "JavaScript", đếm số nguyên âm (a, e, i, o, u) trong chuỗi, không phân biệt hoa thường.
8. Đoán kết quả trước khi chạy:

```js
console.log(0 || "a"); // "a"
console.log(0 ?? "a"); // 0
console.log("" && "b"); // "b"
console.log("x" && "y"); // "y"
console.log(null ?? undefined ?? 0); // "0"
if ("0") console.log("chạy"); // "chạy"
if ([]) console.log("cũng chạy?"); // "cũng chạy"
```

### => `||` trả về giá trị truthy đầu tiên. Nếu không có cái nào truthy thì trả về vế cuối. 0 là falsy nên nó bỏ qua và lấy "a".

### => `&&` trả về giá trị falsy đầu tiên. Nếu tất cả đều truthy thì trả về vế cuối. "" là falsy nên dừng luôn ở đó; còn "x" truthy nên đi tiếp và trả về "y".
