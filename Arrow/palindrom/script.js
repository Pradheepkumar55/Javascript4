const isPalindrome = str => {
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  };
  
  const findPalindromes = arr => arr.filter(str => isPalindrome(str));
  

  let stringArray = ["madam", "racecar", "hello", "level", "stats", "noon"];
  let palindromeArray = findPalindromes(stringArray);
  console.log("Palindromes in the array:", palindromeArray); 
  