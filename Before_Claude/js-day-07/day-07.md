## Ngày 7: reduce

### 1. Bạn đã viết `reduce` rồi

```js
let sum = 0; // 1. giá trị khởi đầu
for (const n of arr) {
  sum = sum + n; // 2. cập nhật dần qua từng phần tử
}
return sum; // 3. trả về giá trị cuối cùng
```

`reduce` là khuôn đó viết gọn lại:

```js
arr.reduce((acc, n) => acc + n, 0);
//          │    │     └──────┘  └── 1. giá trị khởi đầu
//          │    │        └───────── 2. trả về giá trị acc MỚI
//          │    └── phần tử hiện tại
//          └── acc (accumulator, "biến cộng dồn"), chính là `sum` ở trên
```

### 2. Chạy tay từng bước

```js
[5, 10, 20].reduce((acc, n) => acc + n, 0);
```

| Lần | acc (đầu vào)        | n   | Trả về (thành acc lần sau) |
| --- | -------------------- | --- | -------------------------- |
| 1   | 0 (giá trị khởi đầu) | 5   | 5                          |
| 2   | 5                    | 10  | 15                         |
| 3   | 15                   | 20  | 35                         |

=> 35

**Điều quan trọng nhất cần nhớ:** thứ `callback return` sẽ trở thành acc của lần chạy tiếp theo. Quên `return` thì lần sau `acc` là `undefined`.

### 3. Luôn truyền giá trị khởi đầu

```js
[1, 2, 3].reduce((acc, n) => acc + n); // 6: không có khởi đầu thì acc lấy phần tử đầu tiên
[].reduce((acc, n) => acc + n); // TypeError: mảng rỗng, không có gì để lấy
[].reduce((acc, n) => acc + n, 0); // 0 ✅
```

Giá trị khởi đầu còn quyết định kiểu của kết quả: 0 thì ra số, {} thì ra object, [] thì ra mảng.

### 4. Gom thành object

Đây là cách dùng phổ biến nhất ngoài tính tổng. `countByCategory` của bạn viết lại bằng `reduce`

```js
const countByCategory = (products) =>
  products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc; // ← đừng quên!
  }, {});
// { electronics: 2, fashion: 2, books: 1 }
```

Sửa thẳng vào `acc` ở đây là chấp nhận được, vì `object` {} do chính `reduce` tạo ra, không phải dữ liệu của ai khác.

Gom thành `object` dùng `id` làm key, giúp tra cứu nhanh mà không cần `find`:

```js
const byId = products.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});

byId[3].name; // "Tai nghe"
```

### 5. Khi nào không nên dùng reduce

`reduce` làm được mọi thứ, nên rất dễ bị lạm dụng và viết ra code khó đọc:

```js
// ❌ Dùng reduce cho việc của filter + map
products.reduce((acc, p) => (p.stock > 0 ? [...acc, p.name] : acc), []);

// ✅ Rõ ràng hơn hẳn
products.filter((p) => p.stock > 0).map((p) => p.name);
```

**Quy tắc:**
thử `map, filter, find, some, every` trước. Chỉ dùng `reduce` khi cần gom thành một giá trị mà các phương thức kia không làm được: tổng, đếm, nhóm, chuyển mảng thành object.

### 6. Bài tập

- Dùng lại `products` và `users`. Bài nào cần reduce thì dùng reduce; bài nào kết hợp được với filter/map thì kết hợp.

1. getTotalValue(products): tổng giá trị kho (price \* stock, thiếu stock tính là 0).
2. findMax(arr): số lớn nhất trong mảng, viết bằng reduce.
3. countByCategory(products): tự viết lại mà không nhìn mục 4.
4. groupNamesByCategory(products): { electronics: ["Laptop", "Tai nghe"], fashion: [...], books: [...] }.
5. getAverageAgeOfActive(users): tuổi trung bình của người đang active. Gợi ý: filter trước, rồi reduce để tính tổng, cuối cùng chia cho số lượng.
6. getAllSkills(users): mảng tất cả kỹ năng, không trùng lặp: ["html", "css", "js", "react", "ts"].
7. indexById(users): object dạng { 1: { id: 1, name: "An", ... }, 2: {...}, ... }.
8. getCartTotal(cart, products): tổng tiền giỏ hàng.

```js
const cart = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 3 },
];
// 15000000 * 1 + 1200000 * 2 + 150000 * 3 = 17850000
```

9. Đoán kết quả trước khi chạy:

```js
const a = [1, 2, 3, 4];

console.log(a.reduce((acc, n) => acc + n, 0));
console.log(a.reduce((acc, n) => acc + n, ""));
console.log(a.reduce((acc, n) => acc * n, 0));
console.log(
  a.reduce((acc, n) => {
    acc + n;
  }, 0),
);
console.log([].reduce((acc, n) => acc + n, 0));
console.log(a.reduce((acc, n) => Math.max(acc, n)));
console.log(a.reduce((acc, n) => (n % 2 === 0 ? [...acc, n] : acc), []));
console.log(a.reduce((acc, n) => acc + n, 10));
```

## 7. Tổng kết
- `acc` là gì? Giá trị của `acc` ở lần chạy sau lấy từ đâu?
=> Giá trị tích luỹ, kết quả lần chạy trước là `acc` của lần chạy sau.
- Vì sao nên luôn truyền giá trị khởi đầu?
=> Xác định rõ kiểu dữ liệu, giá trị khởi tạo, tránh undefined
- Dòng thứ 7 của bài 9 cho kết quả giống phương thức nào đã học? Nên viết bằng cách nào?
=> Giống `filter`, nên dùng filter cho ngắn gọn, dễ đọc
