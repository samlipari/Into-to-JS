let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
will log 1
