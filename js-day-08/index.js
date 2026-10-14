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

// 1. getUserSummary
const getUserSummary = ({ name, age, skills = [] }) => {
  return `${name} (${age} tuổi) - ${skills.length} kỹ năng`;
};

// 2. getAdultNames
const getAdultNames = (users) => {
  return users.filter((u) => u.age >= 18).map(({ name }) => name);
};

// 3. getMinMax
const getMinMax = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};

// 4. toPublicUser
const toPublicUser = (user) => {
  const { skills, active, ...publicUser } = user;
  return publicUser;
};

// 5. createProduct
const createProduct = ({ name, price, category = "other", stock = 0 }) => {
  return { name, price, category, stock };
};

// 6. sumAll
const sumAll = (...nums) => {
  return nums.reduce((acc, n) => {
    acc = acc + n;
    return acc;
  }, 0);
};

// 7. mergeSettings
const defaults = {
  theme: "light",
  fontSize: 14,
  notifications: { email: true, sms: false },
};
const custom = { fontSize: 16, notifications: { sms: true } };
const mergeSettings = (defaults, custom) => {
  const { notifications = {}, ...rest } = custom;
  return {
    ...defaults,
    ...rest,
    notifications: { ...defaults.notifications, ...notifications },
  };
};

// 8. updateCity
// const updateCity = (user, newCity) => {
//   const { city, ...newAddress } = user.address;
//   newAddress.city = newCity;
//   return { ...user, address: newAddress };
// };
const updateCity = (user, newCity) => ({
  ...user,
  address: { ...user.address, city: newCity },
});

// 9. formatScores
const formatScores = (scores) => {
  Object.entries(scores).map(([subject, score]) => `${subject}: ${score}`);
};

// 10. Guess the results

const user = { name: "An", age: 20, address: { city: "HN" } };

const {
  name,
  age: years,
  email = "chưa có",
  address: { city },
} = user;
console.log(name, years, email, city); // "An 20 chưa có HN"

const [x, , z = 10, w = 5] = [1, 2, undefined, null];
console.log(x, z, w); // 1, 10, null

const base = { v: 1, k: 2 };
console.log({ ...base, v: 9 }.v, { v: 9, ...base }.v); // 9 1

const [first, ...others] = "hello";
console.log(first, others); // h [ 'e', 'l', 'l', 'o' ]

const { name: n, ...restUser } = user;
console.log(n, restUser); // An { age: 20, address: { city: 'HN' } }

const count = (...args) => args.length;
console.log(count(), count(1, [2, 3], 4)); // 0 3

console.log([..."ab", ...[1, 2]]); //  ['a', 'b', 1, 2 ]
