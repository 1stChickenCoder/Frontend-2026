## Ngày 4: Mảng (array)

### 1. Tạo và truy cập

```js
const fruits = ["táo", "cam", "xoài"];

fruits[0]; // "táo"   (chỉ số bắt đầu từ 0)
fruits[fruits.length - 1]; // "xoài"  (phần tử cuối)
fruits.at(-1); // "xoài"  (cách viết mới, gọn hơn)
fruits[10]; // undefined (không báo lỗi)
fruits.length; // 3

fruits[1] = "chuối"; // sửa phần tử
```

Mảng khai báo bằng `const` vẫn sửa được phần tử bên trong. `const` chỉ cấm gán cả biến sang một mảng khác (`fruits = [...]` sẽ báo lỗi).

### 2. Thêm và xóa

```js
const arr = [1, 2, 3];

arr.push(4); // thêm cuối    → [1, 2, 3, 4]
arr.pop(); // xóa cuối     → [1, 2, 3], trả về 4
arr.unshift(0); // thêm đầu     → [0, 1, 2, 3]
arr.shift(); // xóa đầu      → [1, 2, 3], trả về 0
```

Bốn phương thức này đều **thay đổi mảng gốc**.

### 3. Tìm kiếm và cắt

```js
const nums = [10, 20, 30, 20];

nums.includes(20); // true
nums.indexOf(20); // 1   (vị trí đầu tiên)
nums.indexOf(99); // -1  (không tìm thấy)

// slice: CẮT RA MẢNG MỚI, không đụng mảng gốc
nums.slice(1, 3); // [20, 30]  (từ vị trí 1 đến TRƯỚC vị trí 3)
nums.slice(-2); // [30, 20]

// splice: SỬA THẲNG vào mảng gốc
nums.splice(1, 2); // xóa 2 phần tử từ vị trí 1, trả về [20, 30]
// nums giờ là [10, 20]
```

Tên gần giống nhau nhưng tác dụng ngược nhau: `slice` an toàn, `splice` phá mảng gốc. Trong React bạn sẽ gần như chỉ dùng `slice`.

## 4. Chuyển đổi và sắp xếp

```js
["a", "b", "c"].join("-"); // "a-b-c"
"a,b,c"
  .split(",") // ["a", "b", "c"]
  [(1, 2)].concat([3, 4]); // [1, 2, 3, 4]  (mảng mới)

const list = [3, 1, 2];
list.reverse(); // thay đổi gốc → [2, 1, 3]

// Bẫy của sort: mặc định so sánh như CHUỖI
[10, 9, 1, 100]
  .sort() // [1, 10, 100, 9]  ❌
  [(10, 9, 1, 100)].sort((a, b) => a - b) // [1, 9, 10, 100]  ✅ tăng dần
  [(10, 9, 1, 100)].sort((a, b) => b - a); // giảm dần
```

## 5. Mảng là tham chiếu

```js
const a = [1, 2, 3];
const b = a; // b KHÔNG phải bản sao, mà cùng trỏ tới một mảng
b.push(4);
console.log(a); // [1, 2, 3, 4]

const c = [...a]; // bản sao thật (spread)
c.push(5);
console.log(a); // [1, 2, 3, 4], không bị ảnh hưởng

[1, 2] === [1, 2]; // false (hai mảng khác nhau dù cùng nội dung)
```

## 6. Bài tập

- sumArray(arr): tính tổng các số trong mảng.
- findMax(arr): tìm số lớn nhất, không dùng Math.max. Mảng rỗng trả về undefined.
- countOccurrences(arr, value): đếm số lần value xuất hiện (countOccurrences([1, 2, 1, 1], 1) là 3).
- removeDuplicates(arr): trả về mảng mới không có phần tử trùng, giữ thứ tự ([1, 2, 2, 3, 1] thành [1, 2, 3]).
- getEvens(arr): trả về mảng mới chỉ gồm số chẵn. Dùng lại isEven của ngày 3.
- reverseArray(arr): trả về mảng đảo ngược mới, không dùng reverse() và không làm thay đổi mảng gốc. In mảng gốc ra để chứng minh.
- chunk(arr, size): chia mảng thành các mảng con (chunk([1, 2, 3, 4, 5], 2) thành [[1, 2], [3, 4], [5]]). Gợi ý: slice.
- capitalizeWords(sentence): viết hoa chữ cái đầu mỗi từ ("học javascript mỗi ngày" thành "Học Javascript Mỗi Ngày"). Gợi ý: split, join, toUpperCase, slice.
- Đoán kết quả trước khi chạy:

```js
const x = [1, 2, 3];
const y = x;
y[0] = 99;
console.log(x); // [99, 2, 3]

const z = [5, 1, 10];
const sorted = z.sort();
console.log(sorted); // [1, 10, 5] sắp xếp như từ điển
console.log(z === sorted); // true

const nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3)); // [2, 3]
console.log(nums.splice(1, 3)); // [2, 3, 4]
console.log(nums); // [1, 5]

console.log([] === []); // false
console.log(typeof [1, 2]); // "object"
```
