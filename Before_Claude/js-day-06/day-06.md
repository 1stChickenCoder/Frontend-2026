## Ngày 6: map, filter, find, some, every

### 1. `map`: biến đổi từng phần tử

```js
const nums = [1, 2, 3];

transformAll(nums, (n) => n * 10); // của bạn
nums.map((n) => n * 10); // có sẵn → [10, 20, 30]

products.map((p) => p.name); // ["Laptop", "Áo thun", ...]
products.map(formatProduct); // truyền thẳng hàm có sẵn
```

- Luôn trả về mảng mới cùng độ dài, không sửa mảng gốc.
- Callback nhận thêm tham số thứ hai là chỉ số: `arr.map((item, index) => ...)`.

Bẫy quen thuộc từ ngày 3:

```js
nums.map((n) => {
  n * 10;
}); // [undefined, undefined, undefined]
nums.map((n) => n * 10); // ✅

// Trả về object thì phải bọc trong ngoặc tròn
nums.map((n) => ({ value: n })); // ✅ [{ value: 1 }, ...]
nums.map((n) => {
  value: n;
}); // ❌ JS hiểu {} là thân hàm
```

### 2. `filter`: lọc phần tử

```js
nums.filter((n) => n > 1); // [2, 3]
products.filter((p) => (p.stock ?? 0) > 0); // sản phẩm còn hàng
```

- Callback trả về `true` thì giữ phần tử, `false` thì bỏ.
- Luôn trả về mảng (có thể rỗng []), độ dài bằng hoặc ít hơn mảng gốc.

### 3. `find` và `findIndex`: tìm một phần tử

```js
products.find((p) => p.id === 3); // { id: 3, name: "Tai nghe", ... }
products.find((p) => p.id === 99); // undefined

products.findIndex((p) => p.id === 3); // 2
products.findIndex((p) => p.id === 99); // -1
```

Phân biệt: `filter` trả về `mảng`, kể cả khi chỉ có một kết quả; `find` trả về `phần tử đầu tiên` khớp, hoặc `undefined`.

### 4. `some` và `every`: hỏi có/không

```js
products.some((p) => p.price > 10000000); // true: có ít nhất một
products.every((p) => p.price > 100000); // true: tất cả đều thỏa
[].every((p) => false); // true (mảng rỗng luôn "thỏa tất cả")
```

### 5. Nối chuỗi phương thức

```js
const inStockNames = products
  .filter((p) => (p.stock ?? 0) > 0)
  .map((p) => p.name);
// ["Laptop", "Tai nghe", "Giày"]
```

### 6. Chọn phương thức nào?

| Mục đích                                  | Dùng      | Kết quả                 |
| ----------------------------------------- | --------- | ----------------------- |
| Biến đổi mọi phần tử                      | map       | Mảng cùng độ dài        |
| Giữ lại một số phần tử                    | filter    | Mảng ngắn hơn hoặc bằng |
| Lấy một phần tử                           | find      | Phần tử hoặc undefined  |
| Lấy vị trí của phần tử                    | findIndex | Số hoặc -1              |
| Có phần tử nào thỏa không                 | some      | true/false              |
| Tất cả có thỏa không                      | every     | true/false              |
| Chỉ chạy, không cần kết quả (ví dụ in ra) | forEach   | undefined               |

### 7. Bài tập

1. Viết lại getProductById, getInStock, getNames của ngày 5, mỗi hàm một dòng.
2. getAdultNames(users): tên những người từ 18 tuổi trở lên.
3. getActiveCount(users): số người đang active. Gợi ý: không cần vòng lặp hay biến đếm.
4. hasSkill(users, skill): có ai biết skill không (hasSkill(users, "ts") là true).
5. getUsersWithSkill(users, skill): tên những người biết skill ("react" ra ["Bình", "Chi"]).
6. allHaveSkills(users): tất cả mọi người có ít nhất một kỹ năng không.
7. addDiscount(products, percent): trả về mảng mới, mỗi sản phẩm có thêm salePrice (giá sau giảm). Sản phẩm gốc không được có salePrice; in products[0] ra để chứng minh. Gợi ý: spread ngày 5.
8. getCheapElectronics(products, maxPrice): tên sản phẩm loại "electronics" có giá không quá maxPrice, nối chuỗi filter và map.
9. Đoán kết quả trước khi chạy:

```js
const a = [1, 2, 3, 4];

console.log(a.map((n) => n > 2));
console.log(a.filter((n) => n > 2));
console.log(a.find((n) => n > 2));
console.log(a.find((n) => n > 10));
console.log(a.filter((n) => n > 10));
console.log(
  a.map((n) => {
    n * 2;
  }),
);
console.log(a.some((n) => n % 2 === 0));
console.log(a.every((n) => n % 2 === 0));
console.log(a.forEach((n) => n * 2));
console.log(a);
```

- `map` khác `filter` thế nào về độ dài mảng trả về?
- `find` khác `filter` thế nào?
- Vì sao `map` dùng được trong React để hiển thị danh sách, còn `forEach` thì không?

### Giải thích câu hỏi:

```js
const oranges = [
  { id: 1, ripe: true },
  { id: 2, ripe: false },
  { id: 3, ripe: true },
  { id: 4, ripe: false },
];
```

#### Câu 1: `map` và `filter` khác nhau về độ dài

`map` giống như bóc vỏ từng quả: quả nào cũng được xử lý, không quả nào bị bỏ. Cho vào 4 quả thì nhận lại 4 quả.

```js
oranges.map((o) => o.id); // [1, 2, 3, 4]  → 4 phần tử
```

`filter` giống như nhặt riêng quả chín: quả nào chín thì giữ, quả nào xanh thì bỏ. Cho vào 4 quả thì nhận lại tối đa 4, có thể ít hơn, có thể không còn quả nào.

```js
oranges.filter((o) => o.ripe); // [{id: 1...}, {id: 3...}]  → 2 phần tử
```

#### Câu 2: `find` và `filter` khác nhau thế nào

Cả hai đều đi tìm quả chín, nhưng trả về khác nhau:

- `filter` trả về một cái rổ (mảng) đựng tất cả quả chín.
- `find` trả về một quả (phần tử) là quả chín đầu tiên nó gặp, rồi dừng luôn.

```js
oranges.filter((o) => o.ripe); // [{ id: 1, ... }, { id: 3, ... }]  ← có ngoặc vuông: mảng
oranges.find((o) => o.ripe); // { id: 1, ... }                    ← không ngoặc vuông: một object
```

```js
oranges.filter((o) => o.id === 99); // []         ← vẫn là rổ, chỉ là rổ rỗng
oranges.find((o) => o.id === 99); // undefined  ← không có quả nào
```

#### Câu 3: vì sao React dùng `map` chứ không dùng `forEach`

Cả hai đều chạy qua từng quả. Khác nhau ở chỗ khi xong việc thì trả lại cái gì:

- `map` trả lại một rổ mới chứa kết quả của từng lần xử lý.
- `forEach` chỉ làm việc với từng quả rồi không trả lại gì (undefined).

```js
const a = oranges.map((o) => `Cam số ${o.id}`);
console.log(a); // ["Cam số 1", "Cam số 2", "Cam số 3", "Cam số 4"]

const b = oranges.forEach((o) => `Cam số ${o.id}`);
console.log(b); // undefined
```
