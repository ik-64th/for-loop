const modifyArray = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        numbers[i] *= 2;  // Multiply by 2 if even
      } else {
        numbers[i] -= 1;  // Subtract 1 if odd
      }
    }
    return numbers;
  };
  
  // Example usage:
  console.log(modifyArray([1, 2, 3, 4, 5]));  
  