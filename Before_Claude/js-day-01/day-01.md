# Ngày 1: Biến, kiểu dữ liệu, toán tử

**Mục tiêu:** chạy được file JS đầu tiên, hiểu let/const, 7 kiểu nguyên thủy và cách JS ép kiểu.

1. Chuẩn bị

- Cài `Node.js (bản LTS)` và `VS Code`.
- Tạo thư mục `js-day-01`, bên trong tạo file `index.js`.
- Chạy thử bằng terminal: `node index.js`.

2. Biến

```js
const name = "An"; // không gán lại được
let age = 20; // gán lại được
age = 21;

// var: kiểu cũ, không dùng nữa
```

Quy tắc: mặc định dùng `const`, chỉ đổi sang `let` khi thật sự cần gán lại. Đặt tên theo `camelCase` và có nghĩa (`userAge`, không phải `x`).

3. Kiểu dữ liệu

```js
typeof "hello"; // "string"
typeof 42; // "number"  (số nguyên và số thực chung một kiểu)
typeof true; // "boolean"
typeof undefined; // "undefined"  (chưa có giá trị)
typeof null; // "object"  (lỗi lịch sử của JS; null nghĩa là "cố ý để trống")
typeof 10n; // "bigint"
typeof Symbol(); // "symbol"
```

Với chuỗi, hãy dùng `template literal`:

```js
const greeting = `Xin chào ${name}, bạn ${age} tuổi`;
```

4. Toán tử và ép kiểu

```js
10 % 3; // 1  (chia lấy dư)
2 ** 3; // 8  (lũy thừa)

"5" + 1; // "51"  (+ với chuỗi thành nối chuỗi)
"5" - 1; // 4     (- ép chuỗi thành số)
Number("42"); // 42
String(42); // "42"

5 == "5"; // true   (so sánh có ép kiểu, tránh dùng)
5 === "5"; // false  (so sánh cả kiểu, luôn dùng cái này)

0.1 + 0.2 === 0.3; // false  (sai số số thực)
```

Các giá trị `falsy` cần thuộc: `false`, `0`, `"",` `null`, `undefined`, `NaN`. Mọi thứ còn lại là `truthy`.

5. Bài tập (45–60 phút)

Tự đoán kết quả trước, sau đó mới chạy để kiểm tra.

- Khai báo tên, tuổi, thành phố của bạn rồi in ra một câu giới thiệu bằng template literal.
- Cho const celsius = 30, tính và in ra độ F (công thức: C \* 9/5 + 32).
- Cho const totalSeconds = 3725, in ra dạng 1 giờ 2 phút 5 giây (gợi ý: dùng % và Math.floor).
- Hoán đổi giá trị của hai biến a và b.
- Đoán kết quả từng dòng:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
"10" / "2"; // 5
true + 1; // 2 => true sẽ bị ép thành 1
null + 1; // 1 => null sẽ bị ép thành 0
undefined + 1; // NaN
"abc" * 2; // Nan
```

## => Toán tử số học không bao giờ trả về Boolean.

6. Đoán `typeof` của: `NaN`, `[],` `"123"`, `Number("abc")`.

number, object, string, number

## => Falsy sẽ được coi là 0 khi sử dụng typeof
