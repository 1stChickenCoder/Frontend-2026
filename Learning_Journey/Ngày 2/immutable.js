// shallowEqual(obj1, obj2)
// Trả về true nếu hai object có cùng số key và mỗi key có giá trị === nhau.
// (Đây chính là cách React.memo so props.)

const obj1 = [
  { id: 1, name: "An", age: 17, active: true, skills: ["html", "css"] },
  { id: 2, name: "Bình", age: 25, active: false, skills: ["js", "react"] },
  { id: 3, name: "Chi", age: 30, active: true, skills: ["js", "ts", "react"] },
  { id: 4, name: "Dũng", age: 22, active: true, skills: [] },
];
const obj2 = [
  { id: 1, name: "An", age: 17, active: true, skills: ["html", "css"] },
  { id: 2, name: "Bình", age: 25, active: false, skills: ["js", "react"] },
  { id: 3, name: "Chi", age: 30, active: true, skills: ["js", "ts", "react"] },
  { id: 4, name: "Dũng", age: 22, active: true, skills: [] },
];

const obj3 = [
  { id: 1, name: "An", age: 17, active: true, skills: ["html", "css"] },
  { id: 2, name: "Bình", age: 25, active: false, skills: ["js", "react"] },
  { id: 3, name: "Chi", age: 30, active: true, skills: ["js", "ts", "react"] },
  { id: 5, name: "Dũng", age: 22, active: true, skills: [] },
];

const obj4 = [
  { id: 1, name: "An", age: 17, active: true, skills: ["html", "css"] },
  { id: 2, name: "Bình", age: 25, active: false, skills: ["js", "react"] },
  { id: 3, name: "Chi", age: 30, active: true, skills: ["js", "ts", "react"] },
  { id: 4, name: "Hiệp", age: 27, active: true, skills: ["js", "ts"] },
  { id: 5, name: "Dũng", age: 22, active: true, skills: [] },
];

const shallowEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every(
    (key) => Object.hasOwn(obj2, key) && Object.is(obj1[key], obj2[key]),
  );
};

console.log(shallowEqual(obj1, obj2));
console.log(shallowEqual(obj1, obj3));
console.log(shallowEqual(obj1, obj4));
console.log(shallowEqual(obj3, obj4));
console.log(shallowEqual({ a: undefined }, { b: 1 }));
// false false false false false

// ********************************************************************************* \\
// ********************************************************************************* \\

// toggleTodo(todos, id)
// Trả về mảng mới, todo có id đó đảo done, các todo khác giữ nguyên địa chỉ cũ.

const user = {
  name: "Hoan",
  age: 25,
  address: {
    city: "Hai Phong",
  },
  isStudent: false,
};

const updateCity = (user, city) => ({
  ...user,
  address: { ...user.address, city: city },
});

const todos = [
  { id: 1, title: "Học map", done: true, priority: 2, tags: ["js"] },
  { id: 2, title: "Học reduce", done: false, priority: 3, tags: ["js"] },
  { id: 3, title: "Đi chợ", done: false, priority: 1, tags: [] },
  { id: 4, title: "Ăn trưa", done: false, priority: 3, tags: [] },
];

const toggleTodo = (todos, id) => {
  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
};

console.log(user.address.city); // Hai Phong

const newTodo = toggleTodo(todos, 1);
console.log(newTodo[1] === todos[1]); // true

// ********************************************************************************* \\
// ********************************************************************************* \\

const items = [
  { id: 1, name: "Áo", qty: 1 },
  { id: 2, name: "Quần", qty: 0 },
];

const increaseQty = (items, id) => {
  const newItems = items.map((i) => {
    return i.id === id ? { ...i, qty: i.qty + 1 } : { ...i };
  });
  return newItems;
};

console.log(increaseQty(items, 1));
