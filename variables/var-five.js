let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

this logs bar because foo was reassigned locally inside an object
