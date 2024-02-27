function checkNumber(num) {
    let result = '';
  
    if (num % 3 === 0) {
      result += 'game ';
    }
  
    if (num % 5 === 0) {
      result += 'gamelab ';
    }
  
    if (num % 15 === 0) {
      result += 'gamelab indonesia ';
    }
  
    return result;
  }
  
  function printGameTypes(start, end) {
    let output = '';
  
    for (let i = start; i <= end; i++) {
      output += checkNumber(i);
    }
  
    return output.trim();
  }
  
  console.log(printGameTypes(1, 15));
  console.log(printGameTypes(1, 20));
  console.log(printGameTypes(1, 30));