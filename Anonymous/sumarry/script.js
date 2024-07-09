function sumArray(numbers) {
  let sum = 0;
    
for (let number of numbers) {
  sum += number;  
}
    return sum;
}
  

let numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
 let totalSum = sumArray(numbers);
console.log("Sum of numbers:", totalSum);
