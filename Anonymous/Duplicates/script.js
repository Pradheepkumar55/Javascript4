
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  let arrayWithDuplicates = [ 1, 1, 2, 3, 5, 2, 4, 5, 1, 6, 3];
  let uniqueArray = removeDuplicates(arrayWithDuplicates);
  console.log("Array with duplicates removed:", uniqueArray);
  