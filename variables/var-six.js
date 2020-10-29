const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
no error, logs bar because that's how it's globally assigned. Reassignment within the object does not change the global value of the variable
