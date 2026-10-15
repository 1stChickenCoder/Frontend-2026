# 📘 Ngày 1: Kiểu dữ liệu, Value và Reference

> 📅 **15/10/2026** · 👤 **Hoàng Tử Hói** · ⏱️ **2,5 giờ** · 🏷️ `js-core` · `day-01`

---

## 📑 Mục lục

1. [Kế hoạch buổi học](#-kế-hoạch-buổi-học-25-giờ)
2. [Bài giảng](#-bài-giảng)
   - [1. Hai nhóm kiểu dữ liệu](#1-hai-nhóm-kiểu-dữ-liệu)
   - [2. `const` không có nghĩa là không đổi](#2-const-không-có-nghĩa-là-không-đổi)
   - [3. `typeof` và những cái bẫy](#3-typeof-và-những-cái-bẫy)
   - [4. So sánh: `===` so địa chỉ](#4-so-sánh--so-địa-chỉ-không-so-nội-dung)
   - [5. Truyền vào hàm](#5-truyền-vào-hàm)
   - [6. Copy nông và copy sâu](#6-copy-nông-và-copy-sâu)
   - [7. Vì sao quan trọng với React](#7-vì-sao-điều-này-quan-trọng-với-react)
3. [Bài tập](#-bài-tập)
4. [Nộp bài và nhật ký](#-nộp-bài-và-nhật-ký)

---

## 🗓️ Kế hoạch buổi học (2,5 giờ)

> **🎯 Mục tiêu hôm nay:** nhìn một dòng gán hoặc so sánh bất kỳ và biết ngay nó **copy giá trị** hay **copy "địa chỉ"**.
>
> Đây là gốc của rất nhiều lỗi React kiểu *"setState rồi mà UI không cập nhật"* hay *"useEffect chạy vô hạn"*.

| ⏱️ Thời gian | 📋 Việc |
| :---: | :--- |
| **15 phút** | Chuẩn bị môi trường (bên dưới) |
| **40 phút** | Đọc bài giảng, gõ lại từng ví dụ vào file — **không copy-paste** |
| **75 phút** | Làm 3 phần bài tập |
| **20 phút** | Ghi nhật ký và nộp bài |

### 🛠️ Chuẩn bị môi trường

1. 🚫 **Tắt GitHub Copilot** hoặc mọi AI autocomplete trong VS Code. Trong tháng 1, em chỉ hỏi AI để *giải thích khái niệm*.
2. ✅ Kiểm tra `node -v` (cần **Node 20** trở lên).
3. 📁 Tạo repo GitHub tên `learning-log`, trong đó tạo thư mục `js-core/day-01/`.
4. ▶️ Chạy mỗi file bài tập bằng `node ten-file.js`.

---

## 📖 Bài giảng

### 1. Hai nhóm kiểu dữ liệu

JavaScript có **7 kiểu primitive**:

`string` · `number` · `bigint` · `boolean` · `undefined` · `null` · `symbol`

Mọi thứ còn lại là **object**: object thường, array, function, `Date`, `Map`, `Set`.

> 📦 **Hình dung biến là một cái hộp:**
> - Với **primitive** → trong hộp chứa *chính giá trị*.
> - Với **object** → trong hộp chỉ chứa *tờ giấy ghi địa chỉ căn nhà* (reference); căn nhà thật nằm chỗ khác trong bộ nhớ.

```js
let a = 10;
let b = a;      // copy giá trị 10
b = 20;
console.log(a); // 10

const user1 = { name: "Hùng" };
const user2 = user1;  // copy ĐỊA CHỈ, cả hai cùng trỏ một căn nhà
user2.name = "Lan";
console.log(user1.name); // "Lan"
```

> Primitive là **bất biến**: `str.toUpperCase()` không sửa `str` mà trả về chuỗi mới.
> Object thì **sửa được tại chỗ** (mutate).

---

### 2. `const` không có nghĩa là không đổi

> 🔒 `const` chỉ **khóa cái hộp**, không **khóa căn nhà**.
> Em không gán lại được biến, nhưng vẫn sửa được nội dung object.

```js
const list = [1, 2];
list.push(3);   // ✅ OK, list là [1, 2, 3]
list = [];      // ❌ TypeError: Assignment to constant variable
```

---

### 3. `typeof` và những cái bẫy

```js
typeof "hi"         // "string"
typeof 42           // "number"
typeof undefined    // "undefined"
typeof null         // "object"   <- lỗi lịch sử của JS, nhớ thuộc
typeof []           // "object"   <- kiểm tra mảng bằng Array.isArray([])
typeof function(){} // "function"
```

> ⚠️ Hai cái bẫy kinh điển: `typeof null === "object"` và `typeof [] === "object"`.
> Muốn kiểm tra mảng, luôn dùng `Array.isArray()`.

---

### 4. So sánh: `===` so địa chỉ, không so nội dung

```js
"abc" === "abc"       // true, so giá trị
[] === []             // false, hai căn nhà khác nhau
{ a: 1 } === { a: 1 } // false
const x = {}; const y = x;
x === y               // true, cùng một địa chỉ
NaN === NaN           // false; dùng Number.isNaN() hoặc Object.is(NaN, NaN)
```

---

### 5. Truyền vào hàm

JS **luôn truyền bằng giá trị**. Với object, giá trị được copy chính là *địa chỉ*. Vì vậy:

| Hành động trong hàm | Bên ngoài có bị ảnh hưởng? |
| :--- | :---: |
| Sửa thuộc tính (`u.name = ...`) | ✅ Có |
| Gán lại tham số (`u = {...}`) | ❌ Không |

```js
function rename(u) { u.name = "Minh"; }
function replace(u) { u = { name: "Tú" }; }
const p = { name: "An" };
rename(p);  console.log(p.name); // "Minh"
replace(p); console.log(p.name); // vẫn "Minh"
```

---

### 6. Copy nông và copy sâu

```js
const original = { name: "An", address: { city: "HN" } };

const shallow = { ...original };   // copy nông: chỉ tầng 1 là mới
shallow.address.city = "HCM";
console.log(original.address.city); // "HCM"  <- tầng 2 vẫn dùng chung

const deep = structuredClone(original); // copy sâu, không copy được function
```

| Cách copy | Tầng 1 | Tầng 2 trở xuống | Ghi chú |
| :--- | :---: | :---: | :--- |
| `{ ...obj }` / `[...arr]` | 🆕 Mới | 🔗 Dùng chung | Copy nông |
| `structuredClone(obj)` | 🆕 Mới | 🆕 Mới | Copy sâu, **không** copy được function |

---

### 7. Vì sao điều này quan trọng với React

React so sánh state cũ và mới bằng `Object.is`, tức là **so địa chỉ**. Nếu em mutate rồi set lại cùng một object, React thấy địa chỉ không đổi và **bỏ qua render**.

```jsx
// ❌ SAI: mutate, cùng địa chỉ, UI không cập nhật
todos.push(newTodo);
setTodos(todos);

// ✅ ĐÚNG: tạo mảng mới
setTodos([...todos, newTodo]);
```

Tương tự, một object tạo mới trong mỗi lần render (ví dụ `const options = { page: 1 }`) có địa chỉ mới mỗi lần, nên `useEffect(..., [options])` sẽ **chạy lại sau mọi lần render**.

> [!IMPORTANT]
> 💡 **Câu cần nhớ:**
> **Primitive** so và copy theo **giá trị**; **object** so và copy theo **địa chỉ**.
> Muốn React thấy thay đổi, **phải tạo object mới**.

---

## ✍️ Bài tập

### 🅰️ Phần A: Đoán output · ⏱️ 25 phút

> [!CAUTION]
> 📝 **Quy tắc:** viết câu trả lời và một câu giải thích vào file `predictions.md` **TRƯỚC**, sau đó mới chạy code để kiểm tra.
> Câu nào sai thì ghi lại vì sao mình sai. **Câu sai là câu có giá trị nhất.**

```js
// A1
let s = "react";
s[0] = "R";
console.log(s);

// A2
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length);

// A3
console.log([1, 2] === [1, 2], "1" == 1, null == undefined, null === undefined);

// A4
const o = { n: 1 };
function f(x) { x.n++; x = { n: 100 }; x.n++; }
f(o);
console.log(o.n);

// A5
const arr = [{ id: 1, done: false }];
const copy = [...arr];
copy[0].done = true;
console.log(arr[0].done, arr === copy);

// A6
console.log(typeof null, typeof NaN, typeof [], Array.isArray([]));

// A7
console.log(new Set([{ a: 1 }, { a: 1 }]).size, new Set([1, 1, "1"]).size);

// A8
const user = { name: "An", tags: ["js"] };
const clone = structuredClone(user);
clone.tags.push("ts");
console.log(user.tags.length, clone.tags === user.tags);
```

---

### 🅱️ Phần B: Code tay · ⏱️ 30 phút

Tạo file `immutable.js`.

> 🔐 **Không hàm nào được sửa dữ liệu đầu vào.** Sau mỗi hàm, viết `console.log` chứng minh input cũ không đổi.

| # | Hàm | Yêu cầu |
| :---: | :--- | :--- |
| 1 | `shallowEqual(obj1, obj2)` | Trả về `true` nếu hai object có cùng số key và mỗi key có giá trị `===` nhau. *(Đây chính là cách `React.memo` so props.)* |
| 2 | `updateCity(user, city)` | Trả về user mới với `user.address.city` đã đổi. **Kiểm tra:** `user.address` cũ phải giữ nguyên thành phố cũ. |
| 3 | `toggleTodo(todos, id)` | Trả về mảng mới, todo có `id` đó đảo `done`, các todo khác **giữ nguyên địa chỉ cũ**. |
| 4 | `removeById(todos, id)` | Trả về mảng mới không có phần tử đó. |

---

### 🅲 Phần C: Sửa bug React · ⏱️ 20 phút

Không cần chạy React. Đọc code, viết giải thích và code đã sửa vào file `react-bugs.md`.

```jsx
// C1: Bấm nút "+" mà số lượng trên màn hình không đổi. Vì sao? Sửa thế nào?
function Cart() {
  const [items, setItems] = useState([{ id: 1, name: "Áo", qty: 1 }]);

  function increase(id) {
    const item = items.find((i) => i.id === id);
    item.qty += 1;
    setItems(items);
  }
  // ...render danh sách items và nút "+"
}

// C2: Tab Network cho thấy request gọi liên tục không dừng. Vì sao? Đưa ra 2 cách sửa.
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const filters = { status: "open" };

  useEffect(() => {
    fetchTasks(filters).then(setTasks);
  }, [filters]);
  // ...
}
```

---

## 📬 Nộp bài và nhật ký

Nộp trong thread của lộ trình, bằng **một trong hai cách**:

- 🔗 Dán link thư mục `day-01` trên GitHub, **hoặc**
- 📋 Dán trực tiếp nội dung 3 file.

Thầy sẽ chấm, chỉ ra chỗ hiểu sai và giao bài ngày 2.

### ✅ Checklist

- [ ] `predictions.md` — 8 câu phần A, mỗi câu gồm dự đoán, kết quả thật, và giải thích nếu sai
- [ ] `immutable.js` — 4 hàm phần B có log kiểm tra
- [ ] `react-bugs.md` — giải thích và code sửa cho C1, C2
- [ ] `log.md` — nhật ký 3 dòng (hôm nay hiểu gì, còn mơ hồ gì, mai làm gì)
- [ ] Commit với message theo chuẩn: `docs(js-core): day 01 value vs reference`

### 🏆 Tiêu chí đạt

> [!TIP]
> - Đúng **ít nhất 6/8** câu phần A ngay lần đoán đầu.
> - Giải thích được **C1** bằng từ **"địa chỉ"**, chứ không phải *"React bị lỗi"*.
>
> Đúng ít hơn 6 câu cũng không sao — mai thầy sẽ cho thêm bài ôn trước khi sang **closure**. 💪