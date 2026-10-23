// Bản chất của kỹ thuật này là tạo ra các biến rồi đọc giá trị từ object có sẵn gán vào những biến đó.
// Nó đi vào trong object, nhặt lấy những biến có cùng keys hoặc được gán vào keys của object.
// Nó không tạo ra object mới.

const user = { name: "An", age: 25, address: { city: "Hà Nội" } };
const { name: myName, age: tuoi, role = "guest" } = user;
console.log(myName); // An
console.log(tuoi); // 25
console.log(role); // guest

// ≈ tương đương với:
const _tmp = user;
const name = _tmp.name;
// const tuoi = _tmp.age;
// const role = _tmp.role === undefined ? "guest" : _tmp.role;

// _tmp tham chiếu đến user, không copy
_tmp.name = "Hoan";
console.log(_tmp.name); // Hoan
console.log(user.name); // Hoan => _tmp trỏ đúng vào object cũ => _tmp cùng địa chỉ với user