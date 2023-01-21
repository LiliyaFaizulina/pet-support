function changedateformat(val) {
    const myArray = val.split("-");
  
    const year = myArray[0];
    const month = myArray[1];
    const day = myArray[2];
  
    const formatteddate = day + "." + month + "." + year;
    return formatteddate;
  }
  export default changedateformat;