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

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
/*let newArray = [];
function sortArrayMinMax(arrayNums){
  for (i = 0; i < arrayNums.length; i++){
    newArray.push(findMinValue(arrayNums));
    (findMinValue(arrayNums)).splice(0,1);
  }
  return newArray;
}
console.log(nums1);*/
/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
/*let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];*/

let newArray2 = [];
function sortArrayMinMax(arrayNums){
  for (i = 0; i = arrayNums.length; i++){
    newArray2.push(minimumValue(arrayNums));
    arrayNums.splice(arrayNums.indexOf(minimumValue(arrayNums)),1);
  }
  return newArray2;
}
console.log(sortArrayMinMax(nums3));