function rotateLeft(arr, k) {
    const n = arr.length;
    k = k % n;
  
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);
    reverseArray(arr, 0, n - 1);
  
    return arr;
  }
  
  function reverseArray(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  let array = [1, 2, 3, 4, 5];
  let k = 2;
  console.log("Original Array:", array);
  rotateLeft(array, k);
  console.log(`Array rotated left by ${k} times:`, array);
  