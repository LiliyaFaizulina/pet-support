function changedateformat(val) {
    const myArray = val.split("-");
  
    let year = myArray[0];
    let month = myArray[1];
    let day = myArray[2];
  
    let formatteddate = day + "." + month + "." + year;
    return formatteddate;
  }
  export default changedateformat;