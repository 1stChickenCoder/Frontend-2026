const todos = [
  { id: 1, title: "Học map", done: true, priority: 2, tags: ["js"] },
  { id: 2, title: "Học reduce", done: false, priority: 3, tags: ["js"] },
  { id: 3, title: "Đi chợ", done: false, priority: 1, tags: [] },
  { id: 4, title: "Ăn trưa", done: false, priority: 3, tags: [] },
];

// 1. addTodo
const addTodo = (todos, title) => {
  const add = [...todos, { id: todos.length + 1, title: title }];
  return add;
};

// 2. removeTodo
const removeTodo = (todos, id) => {
  return todos.filter((t) => t.id !== id);
};

// 3. toggleTodo
const toggleTodo = (todos, id) => {
  return todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
};

// 4. updateTodo
const updateTodo = (todos, id, changes) => {
  return todos.map((t) => (t.id === id ? { ...t, ...changes } : t));
};

// 5. addTag
const addTag = (todos, id, tag) => {
    return todos.map((t) => t.id === id ? (t.tags ? {...t, tags: [...tag]} : t) : t)
}

console.log(addTag(todos, 3, ["Doan", "Duy", "Hoan"]));
