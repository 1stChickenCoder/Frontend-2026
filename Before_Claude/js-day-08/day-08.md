## Ngày 8: Destructuring, spread/rest, giá trị mặc định

### 1. Destructuring object

“Destructuring” nghĩa là tháo dữ liệu ra thành các biến riêng:

```js
const user = { name: "An", age: 17, address: { city: "Hà Nội" } };

// Cách cũ
const name = user.name;
const age = user.age;

// Destructuring: tên biến phải trùng tên key
const { name, age } = user;
```

Các biến thể thường gặp:

```js
const { name: userName } = user; // đổi tên: tạo biến userName
const { email = "chưa có" } = user; // giá trị mặc định khi key không có
const {
  address: { city },
} = user; // lấy sâu: tạo biến city (KHÔNG tạo biến address)
const { phone } = user; // key không có → undefined, không lỗi
```

Giá trị mặc định chỉ dùng khi giá trị là `undefined`, còn `null` thì không, giống `??` chỉ khác ở chỗ `null`:

```js
const { a = 1 } = { a: undefined }; // a = 1
const { b = 1 } = { b: null }; // b = null
```

### 2. Destructuring mảng

Mảng lấy theo vị trí chứ không theo tên

```js
const [first, second] = ["táo", "cam", "xoài"]; // "táo", "cam"
const [, , third] = ["táo", "cam", "xoài"]; // bỏ qua bằng dấu phẩy → "xoài"

let a = 1,
  b = 2;
[a, b] = [b, a]; // hoán đổi (đã nhắc ở ngày 1)
```

Đây chính là cú pháp React dùng với state:

```js
const [count, setCount] = useState(0);
// useState trả về mảng 2 phần tử, bạn tự đặt tên cho từng phần tử
```

### 3. Destructuring trong tham số hàm

```js
// Thay vì nhận cả object rồi chấm từng key
const greet = (user) => `Xin chào ${user.name}, ${user.age} tuổi`;

// Tháo ngay ở tham số
const greet = ({ name, age }) => `Xin chào ${name}, ${age} tuổi`;

// Trong callback
users.map(({ name }) => name);
Object.entries(scores).map(([subject, score]) => `${subject}: ${score}`);

// Kèm giá trị mặc định
const createButton = ({ label, color = "blue", size = "md" }) => { ... };
```

Mọi component React đều nhận props theo đúng cách này:

```js
function Button({ label, onClick, disabled = false }) { ... }
```

### 4. Spread: trải ra

```js
const arr = [1, 2, 3];
[...arr, 4];                     // [1, 2, 3, 4]  thêm vào mảng mới
[0, ...arr];                     // [0, 1, 2, 3]
Math.max(...arr);                // 3  trải mảng thành các đối số

const base = { a: 1, b: 2 };
{ ...base, b: 9 };               // { a: 1, b: 9 }  ghi đè b
{ b: 9, ...base };               // { a: 1, b: 2 }  base ghi đè lại b!
```

#### Thứ tự quan trọng: key nào viết sau sẽ thắng.

### 5. Rest: gom lại

Cùng là dấu ... nhưng làm việc ngược lại: **gom phần còn lại vào một biến**.

```js
// Trong destructuring object: bỏ bớt key
const user = { id: 1, name: "An", password: "123" };
const { password, ...safeUser } = user;
// safeUser = { id: 1, name: "An" }  (user gốc không đổi)

// Trong destructuring mảng
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

// Trong tham số hàm: nhận số lượng đối số tùy ý
const sum = (...nums) => nums.reduce((acc, n) => acc + n, 0);
sum(1, 2, 3); // 6  (nums = [1, 2, 3])
```

### Phân biệt spread và rest

|           | Spread                             | Rest                                        |
| --------- | ---------------------------------- | ------------------------------------------- |
| Vị trí    | Bên phải dấu `=`, hoặc khi gọi hàm | Bên trái dấu `=,` hoặc khi khai báo tham số |
| Tác dụng- | Trải một mảng/object ra            | Gom nhiều giá trị lại thành một             |
| Ví dụ     | const b = [...a]                   | const [x, ...rest] = a                      |

### Chú ý: Rest phải đứng cuối cùng

```js
const [...rest, last] = arr ///sẽ báo lỗi
```

### 6. Bài tập

1. getUserSummary(user): dùng destructuring ở tham số, trả về "An (17 tuổi) - 2 kỹ năng".
2. Viết lại getAdultNames(users) của ngày 6 với destructuring trong callback: ({ age }) => ..., ({ name }) => ....
3. getMinMax(arr): tr về mảng [min, max] (dùng Math.min(...arr)). Khi gọi, destructuring kết quả thành hai biến min và max rồi in ra.
4. toPublicUser(user): trả về user không có skills và active, dùng rest. In users[0] để chứng minh gốc không đổi.
5. createProduct({ name, price, category = "other", stock = 0 }): trả về object sản phẩm, dùng cú pháp viết tắt ({ name, price, ... } thay vì { name: name, ... }). Thử createProduct({ name: "Bút", price: 5000 }).
6. sumAll(...nums): tổng của số lượng đối số bất kỳ. sumAll() là 0, sumAll(1, 2, 3) là 6.
7. mergeSettings(defaults, custom):

```js
const defaults = {
  theme: "light",
  fontSize: 14,
  notifications: { email: true, sms: false },
};
const custom = { fontSize: 16, notifications: { sms: true } };

mergeSettings(defaults, custom);
// Kết quả cần có:
// { theme: "light", fontSize: 16, notifications: { email: true, sms: true } }
```

8. updateCity(user, newCity): với user = { name: "An", address: { city: "Hà Nội", district: "Cầu Giấy" } }, trả về user mới có thành phố mới, giữ nguyên district, không sửa gốc.
9. formatScores(scores): với { math: 8, english: 7 } trả về ["math: 8", "english: 7"]. Dùng Object.entries, map và destructuring [subject, score].

10. Đoán kết quả trước khi chạy:

```js
const user = { name: "An", age: 20, address: { city: "HN" } };

const {
  name,
  age: years,
  email = "chưa có",
  address: { city },
} = user;
console.log(name, years, email, city);

const [x, , z = 10, w = 5] = [1, 2, undefined, null];
console.log(x, z, w);

const base = { v: 1, k: 2 };
console.log({ ...base, v: 9 }.v, { v: 9, ...base }.v);

const [first, ...others] = "hello";
console.log(first, others);

const { name: n, ...restUser } = user;
console.log(n, restUser);

const count = (...args) => args.length;
console.log(count(), count(1, [2, 3], 4));

console.log([..."ab", ...[1, 2]]);
```

### 7. Tổng kết (10 phút)

- Spread và rest cùng dùng .... Nhìn vào đâu để biết đang là cái nào?
=> spread đứng sau, rest đứng trước dấu `=`
- Giá trị mặc định trong destructuring được dùng khi nào? Với null thì sao?
=> dùng khi giá trị tham số truyền vào là `undefined`, `null` thì không, dùng `null`
- Ở bài 7, vì sao { ...defaults, ...custom } không đủ? (Liên hệ câu 3 tổng kết ngày 5.)
=> Vì nó cập nhật mới hoàn toàn address
