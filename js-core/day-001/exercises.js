// 1. pick(obj, keys): trả về object mới chỉ gồm các key trong mảng keys.
// Ví dụ pick({ a: 1, b: 2, c: 3 }, ["a", "c"]) ra { a: 1, c: 3 }.

const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

// console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
// console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c", "d"])); // { a: 1, c: 3 }
// console.log(pick({ a: 1, b: 2, c: 3 }, ["b"])); // { b: 2 }

// 1. renameTag(user, oldTag, newTag): user có dạng { name, tags: ["js", "css"] }.
// Trả về user mới với tag đã đổi tên. Chứng minh user.tags cũ không đổi.

const user = { name: "Hoan", tags: ["js", "css"] };
const renameTag = (user, oldTag, newTag) => {
  return ({ tags, ...user, tags: newTag });
};
console.log(renameTag(user, user.tags, user.tags));
