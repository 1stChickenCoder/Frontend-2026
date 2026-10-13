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

const users = [
  { id: 1, name: "An", age: 17, active: true, skills: ["html", "css"] },
  { id: 2, name: "Bình", age: 25, active: false, skills: ["js", "react"] },
  { id: 3, name: "Chi", age: 30, active: true, skills: ["js", "ts", "react"] },
  { id: 4, name: "Dũng", age: 22, active: true, skills: [] },
];

const cart = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 2 },
  { productId: 5, quantity: 3 },
];

// getTotalValue
const getTotalValue = (products) => {
  return products.reduce((acc, p) => acc + p.price * (p.stock ?? 0), 0);
};

// findMax
const findMax = (arr) => {
  return arr.reduce((acc, a) => (acc > a ? acc : a), arr[0]);
};

// countByCategory
const countByCategory = (products) => {
  return products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
};

// groupNamesByCategory
const groupNamesByCategory = (products) => {
  return products.reduce((acc, p) => {
    acc[p.category] ??= [];
    acc[p.category].push(p.name);
    return acc;
  }, {});
};

// getAverageAgeOfActive
const getAverageAgeOfActive = (users) => {
  return (
    users.filter((u) => u.active).reduce((acc, u) => acc + u.age, 0) /
    users.filter((u) => u.active).length
  );
};

// getAllSkills
const getAllSkills = (users) => [
  ...new Set(
    users.reduce((acc, u) => {
      acc.push(...u.skills);
      return acc;
    }, []),
  ),
];

// indexById
const indexById = (users) => {
  return users.reduce((acc, u) => {
    acc[u.id] = {
      id: u.id,
      name: u.name,
    };
    return acc;
  }, {});
};

// getCartTotal
const getCartTotal = (cart, products) =>
  cart.reduce((acc, c) => {
    const p = products.find((p) => p.id === c.productId);
    return p ? acc + p.price * c.quantity : acc;
  }, 0);

// 9
const a = [1, 2, 3, 4];

console.log(a.reduce((acc, n) => acc + n, 0)); // 10
console.log(a.reduce((acc, n) => acc + n, "")); // '1234'
console.log(a.reduce((acc, n) => acc * n, 0)); // 0
console.log(
  a.reduce((acc, n) => {
    acc + n;
  }, 0),
); // undefined
console.log([].reduce((acc, n) => acc + n, 0)); // 0
console.log(a.reduce((acc, n) => Math.max(acc, n))); // 4
console.log(a.reduce((acc, n) => (n % 2 === 0 ? [...acc, n] : acc), [])); // [2, 4]
console.log(a.reduce((acc, n) => acc + n, 10)); // 20
