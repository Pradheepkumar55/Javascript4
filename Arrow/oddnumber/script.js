const printOddNumbers = (arr) => {
    arr.forEach(num => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Odd numbers in the array:");
  printOddNumbers(numbers);