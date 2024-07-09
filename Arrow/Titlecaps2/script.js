const convertToTitleCaps = (strArray) => {
    return strArray.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
  };
  
  let stringArray = ["ajith", "marshal", "hari", "dinesh", "shameem"];
  let titleCapsArray = convertToTitleCaps(stringArray);
  console.log("Strings converted to title caps:");
  console.log(titleCapsArray);
  
