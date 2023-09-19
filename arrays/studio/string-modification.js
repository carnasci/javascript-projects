const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
//console.log(newStr);
let newStr2 = str.slice(3,10);
//console.log(newStr2);
console.log(newStr2 + newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The new string is ${newStr2 + newStr} after being modified from ${str}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("How many letters do you think will move?")
newStr = str.slice(0,num);
newStr2 = str.slice(3,10);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (num > 10){
    console.log("Number to high");
} else (console.log(`The new string is ${newStr2 + newStr} after being modified from ${str}.`)
)