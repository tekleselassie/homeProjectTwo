


var car = {
  color: "black",
  type: "toyota"

};
function stringCounter(data){
  if(Array.isArray(data)){

    console.log("The Length or The total Item In the Array is  " + data.length);
  }
  else if(data.constructor === Object && typeof(data) === 'object'){
    var key = Object.keys(data);
    console.log("The total number of keys in the Object is :  " + key.length);

  }
  else if (typeof(data) === 'boolean' || data == ''){
console.log("Returned");
    return -1;

  }

}
// Just to test and it is tested and all working
stringCounter(car);
