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

// updateCity(user, city)
// Trả về user mới với user.address.city đã đổi.
// Kiểm tra: user.address cũ phải giữ nguyên thành phố cũ.

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

// toggleTodo(todos, id)
// Trả về mảng mới, todo có id đó đảo done, các todo khác giữ nguyên địa chỉ cũ.

const todos = [
  { id: 1, title: "Học map", done: true, priority: 2, tags: ["js"] },
  { id: 2, title: "Học reduce", done: false, priority: 3, tags: ["js"] },
  { id: 3, title: "Đi chợ", done: false, priority: 1, tags: [] },
  { id: 4, title: "Ăn trưa", done: false, priority: 3, tags: [] },
];

const toggleTodo = (todos, id) => {
  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
};

// removeById(todos, id)
// Trả về mảng mới không có phần tử đó.

const removeById = (todos, id) => {
  return todos.filter((t) => t.id !== id);
};
