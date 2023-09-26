function sayHello() {
   console.log("Hello, World!");
}
function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');


let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();


let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));
