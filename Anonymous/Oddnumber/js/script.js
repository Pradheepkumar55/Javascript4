
let arr = [1, 2, 3, 4, 5, 6 , 7 , 8 , 9 , 10];

function printOddNumbers(arr) {
    let oddarr =[]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] %2 !== 0) {  
        oddarr.push(arr[i]);
    }
  }
  return oddarr
}
  console.log (printOddNumbers(arr))
