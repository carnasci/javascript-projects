const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The new string is ${newStr} after being modified from ${str}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("How many letters do you think will move?")
if (num > str.length || num < 1){
    console.log(`You asked for ${num} letters, but ${str} is only ${str.length} long. So only 3 letters were moved.`);
    num = 3;
}
console.log(str.slice(num) + str.slice(0, num));


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
