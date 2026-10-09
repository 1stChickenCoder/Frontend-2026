## Ngày 5: Object

### 1. Tạo và truy cập

```js
const user = {
  name: "Hoan",
  age: 25,
  city: "Hai Phong",
  isStudent: false,
};

user.name; // "Hoan"     (dấu chấm: dùng khi biết trước tên key)
user["age"]; // 25         (ngoặc vuông: dùng khi key nằm trong biến)

const key = "city";
user[key]; // "Hai Phong"
user.key; // undefined  (tìm key tên là "key", không phải "city")

user.email; // undefined  (key không tồn tại, không báo lỗi)
```

### 2. Thêm, sửa, xóa

```js
user.email = "hoan@mail.com"; // thêm
user.age = 26; // sửa
delete user.isStudent; // xóa

"email" in user; // true (kiểm tra key có tồn tại)
```

Giống mảng, `object` khai báo bằng `const` vẫn sửa được bên trong.

### 3. Object lồng nhau và optional chaining

```js
const order = {
  id: 1,
  customer: { name: "An", address: { city: "Hà Nội" } },
  items: ["áo", "quần"],
};

order.customer.address.city; // "Hà Nội"
order.items[0]; // "áo"

order.shipping.fee; // TypeError: shipping là undefined
order.shipping?.fee; // undefined, không lỗi
order.shipping?.fee ?? 0; // 0 (kết hợp với ?? ở ngày 2)
```

`?.` dừng lại và trả về `undefined` nếu vế trước là `null/undefined`. Dữ liệu từ API rất hay thiếu trường, nên sẽ dùng cú pháp này liên tục.

### 4. Duyệt object

```js
const scores = { math: 8, english: 7, physics: 9 };

Object.keys(scores); // ["math", "english", "physics"]
Object.values(scores); // [8, 7, 9]
Object.entries(scores); // [["math", 8], ["english", 7], ["physics", 9]]

for (const [subject, score] of Object.entries(scores)) {
  console.log(`${subject}: ${score}`);
}
```

### 5. Method và cú pháp viết tắt

```js
const name = "An";
const age = 20;

const person = {
  name, // viết tắt của name: name
  age,
  greet() {
    // method: hàm nằm trong object
    return `Xin chào, mình là ${this.name}`;
  },
};

person.greet(); // "Xin chào, mình là An"
```

`this` trong method trỏ tới object đang gọi nó.

### 6. Object cũng là tham chiếu

```js
const a = { count: 1 };
const b = a;
b.count = 99;
console.log(a.count);           // 99 (giống mảng ngày 4)

const c = { ...a, count: 5 };   // bản sao mới, ghi đè count
console.log(a.count);           // 99 (không bị ảnh hưởng)

{ x: 1 } === { x: 1 }           // false
```

Mẫu `{ ...obj, key: giáTrịMới }` là cách cập nhật `state` trong React.

### 7. Bài tập

```js
const products = [
  { id: 1, name: "Laptop", price: 15000000, category: "electronics", stock: 5 },
  { id: 2, name: "Áo thun", price: 200000, category: "fashion", stock: 0 },
  {
    id: 3,
    name: "Tai nghe",
    price: 1200000,
    category: "electronics",
    stock: 12,
  },
  { id: 4, name: "Giày", price: 900000, category: "fashion", stock: 3 },
  { id: 5, name: "Sách JS", price: 150000, category: "books" },
];
```

- getProductById(products, id): trả về sản phẩm có id tương ứng, không có thì trả về undefined.
- getInStock(products): trả về mảng sản phẩm còn hàng (stock > 0). Lưu ý sản phẩm 5 không có stock.
- getTotalValue(products): tổng giá trị kho (price \* stock của từng sản phẩm). Sản phẩm thiếu stock tính là 0 (gợi ý: ??).
- getNames(products): trả về mảng tên sản phẩm. Dùng lại transformAll hôm nay.
- countByCategory(products): trả về object đếm số sản phẩm mỗi loại, ví dụ { electronics: 2, fashion: 2, books: 1 }. Gợi ý: dùng ngoặc vuông result[category].
- updatePrice(product, newPrice): trả về sản phẩm mới với giá mới, không sửa sản phẩm gốc. In sản phẩm gốc ra để chứng minh.
- formatProduct(product): trả về chuỗi "Laptop - 15.000.000đ (còn 5)", hoặc "(hết hàng)" khi stock là 0 hoặc không có. Gợi ý: price.toLocaleString("vi-VN").
- Đoán kết quả trước khi chạy:

```js
const p = { name: "A", info: { color: "red" } };
const q = p;
const r = { ...p };

q.name = "B";
r.name = "C";
r.info.color = "blue";

console.log(p.name);
console.log(p.info.color);
console.log(p === q);
console.log(p === r);

const key = "name";
console.log(p.key);
console.log(p[key]);
console.log(p.size?.width);
console.log(Object.keys(p).length);
```
