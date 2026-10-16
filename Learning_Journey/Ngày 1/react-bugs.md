## C1: Bấm nút "+" mà số lượng trên màn hình không đổi. Vì sao? Sửa thế nào?

```js
function Cart() {
  const [items, setItems] = useState([{ id: 1, name: "Áo", qty: 1 }]);

  function increase(id) {
    const item = items.find((i) => i.id === id);
    item.qty += 1;
    setItems(items);
  }
  // ...render danh sách items và nút "+"
}
```

- find không tạo object mới.
- Nó trả về địa chỉ của chính object nằm trong items.
- Vì vậy item.qty += 1 đã sửa thẳng vào state.
- Sau đó setItems(items) đưa lại cùng địa chỉ, Object.is ra true, React bỏ qua render.
- Clone mảng [...items] sẽ làm UI cập nhật, nhưng object bên trong vẫn bị mutate, gây lỗi với memo và StrictMode.

## Cách chuẩn:

```js
setItems((prev) =>
  prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
);
```

## C2: Tab Network cho thấy request gọi liên tục không dừng. Vì sao? Đưa ra 2 cách sửa.

```js
function TaskList() {
  const [tasks, setTasks] = useState([]);
  const filters = { status: "open" };

  useEffect(() => {
    fetchTasks(filters).then(setTasks);
  }, [filters]);
  // ...
}
```

- effect không hề sửa filters.
- Nguyên nhân là vòng lặp: mỗi lần render tạo filters mới (địa chỉ mới), effect chạy, setTasks gây render, lại có filters mới, effect lại chạy.

## Cách chuẩn:

```js
// Cách 1: hằng số thì đưa ra ngoài component, chỉ tạo một lần
const FILTERS = { status: "open" };

// Cách 2: phụ thuộc vào primitive thay vì object
useEffect(() => {
  fetchTasks({ status }).then(setTasks);
}, [status]);
```
