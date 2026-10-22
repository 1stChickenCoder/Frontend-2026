```js
// A1
let name = "an";
name.toUpperCase();
console.log(name);

// A2
const nums = [1, 2];
const copy = nums;
copy[0] = 99;
console.log(nums[0]);

// A3
console.log({} === {}, "5" == 5, "5" === 5, typeof undefined);

// A4
const p = { age: 20 };
function birthday(person) {
  person.age++;
  person = { age: 0 };
}
birthday(p);
console.log(p.age);

// A5
const users = [{ n: "A" }];
const clone = users.slice();
clone[0].n = "B";
clone.push({ n: "C" });
console.log(users[0].n, users.length);

// A6
console.log(typeof [], typeof null, typeof (() => {}), Array.isArray({}));

// A7
const t = { x: 1 };
console.log(new Set([t, t, { x: 1 }]).size);

// A8
const cfg = { theme: { dark: false } };
const c2 = { ...cfg };
const c3 = structuredClone(cfg);
c2.theme.dark = true;
console.log(cfg.theme.dark, c3.theme.dark);
```

| Câu | Dự đoán                      | Kết quả thật | Vì sao                                   |
| --- | ---------------------------- | ------------ | ---------------------------------------- |
| A1  | "an"                         |              | Primitive (string) là bất biến           |
| A2  | 1                            | 99           | Primitive (array) là bất biến            |
| A3  | F/T/F/undefined              |              | 1. không cùng địa chỉ                    |
|     |                              |              | 2. so sánh không ép kiểu => true         |
|     |                              |              | 3. so sánh cả kiểu dữ liệu               |
|     |                              |              | 4. nó là kiến thức được nhắc ở lý thuyết |
| A4  | 21                           |              | Sử dụng dấu chấm => sửa nhà              |
| A5  | "A", 1                       | "B", 1       | Slice tạo ra một "căn nhà" mới           |
| A6  | object/object/function/false |              |                                          |
| A7  | 3                            | 2            |                                          |
| A8  | false, false                 | true, false  |                                          |
