let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let arrayLength = [];

for (let i=0; i<arr.length; i++) {
  let evenNumbers = arr[i].length;
  arrayLength.push(evenNumbers);
}

arrayLength.filter(function(num){
  if (num % 2 !== 0) {
    console.log(num)
  }
});
