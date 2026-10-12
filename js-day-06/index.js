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

// getProductById
const getProductById = (products, id) => products.find((p) => p.id === id);

// getInStock
const getInStock = (products) => products.filter((p) => p.stock > 0);

// getNames
const getNames = (products) => products.map((p) => p.name);

// getAdultNames
const getAdultNames = (users) => {
  return users.filter((n) => n.age >= 18).map((n) => n.name);
};

// getActiveCount
const getActiveCount = (users) => {
  return users.filter((n) => n.active).length;
};

// hasSkill
const hasSkill = (users, skill) => {
  return users.some((n) => n.skills.includes(skill));
};

// getUsersWithSkill
const getUsersWithSkill = (users, skill) => {
  return users.filter((n) => n.skills.includes(skill)).map((n) => n.name);
};

// allHaveSkills
const allHaveSkills = (users) => {
  return users.every((n) => n.skills.length);
};

// addDiscount
const addDiscount = (products, percent) =>
  products.map((n) => ({
    ...n,
    salePrice: (n.price * (100 - percent)) / 100,
  }));

// getCheapElectronics
const getCheapElectronics = (products, maxPrice) => {
  return products
    .filter((n) => n.price <= maxPrice && n.category === "electronics")
    .map((n) => n.name);
};

const a = [1, 2, 3, 4];

console.log(a.map((n) => n > 2)); // [false, false, true, true]
console.log(a.filter((n) => n > 2)); // [3, 4]
console.log(a.find((n) => n > 2)); // 3
console.log(a.find((n) => n > 10)); // undefined
console.log(a.filter((n) => n > 10)); // []
console.log(
  a.map((n) => {
    n * 2;
  }),
); // [undefined, undefined, undefined, undefined]
console.log(a.some((n) => n % 2 === 0)); // true
console.log(a.every((n) => n % 2 === 0)); // false
console.log(a.forEach((n) => n * 2)); // undefined
console.log(a); // [1, 2, 3, 4]
