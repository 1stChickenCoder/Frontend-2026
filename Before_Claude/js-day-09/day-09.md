## Ngày 9: Sắp xếp và cập nhật dữ liệu bất biến

### 1. Hàm so sánh của `sort`

```js
// Số
nums.toSorted((a, b) => a - b); // tăng dần
nums.toSorted((a, b) => b - a); // giảm dần

// Object theo một key số
products.toSorted((a, b) => a.price - b.price);

// Chuỗi: dùng localeCompare, KHÔNG dùng a - b
products.toSorted((a, b) => a.name.localeCompare(b.name, "vi"));
```

`localeCompare` với `"vi"` sắp xếp đúng chữ tiếng Việt có dấu ("Áo" đứng gần "A" thay vì bị đẩy xuống cuối).

**Sắp xếp theo hai tiêu chí:** nếu tiêu chí đầu bằng nhau (ra 0) thì dùng tiêu chí thứ hai. `||` lấy giá trị `truthy` đầu tiên (ngày 2), mà 0 là `falsy`:

```js
todos.toSorted(
  (a, b) => b.priority - a.priority || a.title.localeCompare(b.title, "vi"),
);
// ưu tiên cao trước; cùng ưu tiên thì xếp theo tên
```

### 2. `toSorted` và các bản “không phá gốc”

`sort` và `reverse` sửa mảng gốc. Các bản mới trả về mảng mới, cần Node 20 trở lên:

| Sửa gốc    | Bản mới        |
| ---------- | -------------- |
| sort()     | toSorted()     |
| reverse()  | toReversed()   |
| splice()   | toSpliced()    |
| arr[i] = x | arr.with(i, x) |

### 3. Bốn mẫu cập nhật bất biến

Đây là phần quan trọng nhất của tuần. Dữ liệu mẫu:

```js
const todos = [
  { id: 1, title: "Học map", done: true },
  { id: 2, title: "Học reduce", done: false },
];
```

**_Thêm_**: `spread` mảng cũ, rồi thêm phần tử mới.

```js
const added = [...todos, { id: 3, title: "Học sort", done: false }];
// thêm vào đầu: [newTodo, ...todos]
```

**_Xóa_**: `filter` giữ lại mọi phần tử trừ cái cần xóa.

```js
const removed = todos.filter((t) => t.id !== 2);
```

**_Sửa_**: `map` qua mảng; gặp đúng id thì trả về object mới đã sửa, còn lại giữ nguyên.

```js
const updated = todos.map((t) =>
  t.id === 2 ? { ...t, title: "Học reduce kỹ" } : t,
);
```

**_Bật/tắt_**: cũng là sửa, chỉ là giá trị mới tính từ giá trị cũ.

```js
const toggled = todos.map((t) => (t.id === 2 ? { ...t, done: !t.done } : t));
```

Sau mỗi thao tác, `todos` gốc vẫn y nguyên. Phần tử nào không bị sửa thì dùng lại chứ không sao chép:

```js
updated === todos; // false: mảng mới
updated[0] === todos[0]; // true:  todo 1 không đổi nên dùng lại
updated[1] === todos[1]; // false: todo 2 là object mới
```

### 4. Vì sao React cần cách làm này

React biết dữ liệu đã đổi bằng cách so sánh tham chiếu `(===)` giữa dữ liệu cũ và mới, chứ không so từng phần tử bên trong:

```js
const old = todos;
todos.push({ id: 3 }); // sửa thẳng
old === todos; // true → React nghĩ "không có gì đổi" → giao diện không cập nhật

const next = [...todos, { id: 3 }];
old === next; // false → React biết cần vẽ lại
```

### 5. Bài tập

```js
const todos = [
  { id: 1, title: "Học map", done: true, priority: 2, tags: ["js"] },
  { id: 2, title: "Học reduce", done: false, priority: 3, tags: ["js"] },
  { id: 3, title: "Đi chợ", done: false, priority: 1, tags: [] },
  { id: 4, title: "Ăn trưa", done: false, priority: 3, tags: [] },
];
```

1. `addTodo(todos, title)`: thêm todo mới vào cuối, id bằng id lớn nhất hiện có cộng 1, done: false, priority: 1, tags: []. Thử với mảng rỗng: id phải là 1.
2. `removeTodo(todos, id)`.
3. `toggleTodo(todos, id)`.
4. `updateTodo(todos, id, changes)`: changes là object chứa các trường cần sửa, ví dụ updateTodo(todos, 3, { title: "Đi siêu thị", priority: 2 }).
5. `addTag(todos, id, tag)`: thêm tag vào mảng tags của todo có id đó, không thêm nếu đã có. Gợi ý: mảng lồng trong object, nên cần spread ở cả hai tầng.
6. `clearCompleted(todos)`: xóa mọi todo đã done.
7. `sortTodos(todos)`: ưu tiên giảm dần; cùng ưu tiên thì theo title tăng dần (tiếng Việt).
8. `getTopExpensive(products, n)`: tên của n sản phẩm còn hàng đắt nhất, từ đắt đến rẻ. Gợi ý: filter, toSorted, slice, map.
9. Đoán kết quả trước khi chạy:
