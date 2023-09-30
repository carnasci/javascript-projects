//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function minimumValue(arrayNums){
    let minValue = arrayNums[0];
    for (let i = 0; i < arrayNums.length; i ++){
        if (arrayNums[i] < minValue){
        minValue = arrayNums[i];
       }
    }
    return minValue;
  }

  //let newArray2 = [];
  /*function sortArrayMinMax(arrayNums){
    let newArray2 = [];
    for (i = 0; i = arrayNums.length; i++){
      newArray2.push(minimumValue(arrayNums));
      arrayNums.splice(arrayNums.indexOf(minimumValue(arrayNums)),1);
    }
    return newArray2;
  }*/

  //let newArray3 = [];
  function sortArrayMaxMin(arrayNums){
    let newArray3 = [];
    for (i = 0; i = arrayNums.length; i++){
      newArray3.push(minimumValue(arrayNums));
      arrayNums.splice(arrayNums.indexOf(minimumValue(arrayNums)),1);
    }
    return newArray3.reverse();
  }
//Sort each array in ascending order.
//console.log(sortArrayMinMax(nums1));
//console.log(sortArrayMinMax(nums2));
//console.log(sortArrayMinMax(nums3));
//Sort each array in decending order.
console.log(sortArrayMaxMin(nums1));
console.log(sortArrayMaxMin(nums2));
console.log(sortArrayMaxMin(nums3));