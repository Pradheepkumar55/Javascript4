
function convertToTitleCaps(strArray) {
    let resultArray = [];
    
    for (let str of strArray) {
      
      let titleCaseStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      resultArray.push(titleCaseStr);
    }
    
    return resultArray;
  }
  
let stringArray = ["ajith", "marshal", "hari", "dinesh","shameem"];
let titleCapsArray = convertToTitleCaps(stringArray);
  console.log(titleCapsArray)