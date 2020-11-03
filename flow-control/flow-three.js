  function evenOrOdd(num) {
    if (Number.isInteger(num) === false) {
      console.log('error');
      return;
    }
  
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  };
