const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  
  
  let numbers = [1, 2, 3, 4, 5];
  let sum = sumArray(numbers);
  console.log("Sum of numbers in the array:", sum); 
  