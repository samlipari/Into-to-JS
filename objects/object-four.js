let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let array = Object.keys(obj);

let upperArray = array.map(value => value.toUpperCase());

console.log(upperArray);
