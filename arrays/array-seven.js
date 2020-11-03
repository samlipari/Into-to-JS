let numbers = [3, 5, 7];

let arrayOfSquares = [];

for (let i=0; i<numbers.length; i++) {
  let variable = numbers[i] * numbers[i];
  arrayOfSquares.push(variable);
}


console.log(arrayOfSquares.reduce((accumulator, element) => accumulator + element, 0));
