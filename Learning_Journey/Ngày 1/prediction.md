```js
// R1
const list = [{ id: 1, qty: 1 }];
const item = list.find((i) => i.id === 1);
item.qty = 5;
console.log(list[0].qty, item === list[0]);

// R2
let w = "hello";
w.toUpperCase();
console.log(w);

// R3
const a = [{ x: 1 }];
const b = [...a];
b.push({ x: 2 });
b[0].x = 9;
console.log(a.length, a[0].x);

// R4
function g(arr) {
  arr.push(1);
  arr = [];
  arr.push(2);
}
const z = [];
g(z);
console.log(z);

// R5
const makeFilters = () => ({ status: "open" });
console.log(makeFilters() === makeFilters());

// R6
console.log(0 == "", 0 == "0", "" == "0");

// R7
const o = { a: 1 };
console.log(new Set([o, o]).size);
```

| Câu | Trả lời        | Đáp án | Vì sao? |
| --- | -------------- | ------ | ------- |
| R1  | 1 false        |        |         |
| R2  | hello          |        |         |
| R3  | 1 1            |        |         |
| R4  | [2]            |        |         |
| R5  | false          |        |         |
| R6  | true true true |        |         |
| R7  | 2              |        |         |
