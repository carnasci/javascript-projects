function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeLineSize(size, characterType = "#"){
    let line = '';

    for ( let i = 0; i < size; i++){
        line += characterType;
 }
 return line;
}
console.log(makeLineSize(5));

function makeSquare(size){
    let square = '';  //return makeRectangle(size,size)
    for (let i = 0; i < size; i++){
        square += "\n" + makeLineSize(size);
    }
    return square.slice(1);
}
console.log(makeSquare(5));


function makeRectangle(width,height){
    let rectangle = '';
    for (let i = 0; i < height; i++){
    rectangle += (makeLineSize(width) + '\n');
    }
    return rectangle.slice(0,-1);
}
console.log(makeRectangle(3,6));

function makeDownWardStairs(height){
    let stairs = "";
    for (let i = 0; i < height; i++){
        stairs += (makeLineSize(i+1) + '\n');
    }
    return stairs.slice(0,-1);
}
console.log(makeDownWardStairs(3));

function makeSpaceLine(numSpaces, numChars){
    let spaces = "";
    for (let i = 0; i < numSpaces; i++){
        spaces += " ";
    }
    let chars = makeLineSize(numChars);
    return `${spaces}${chars}${spaces}`;
}
console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height){
    output = "";
    let topHalf = makeIsoscelesTriangle(height);
    let bottomHalf = reverse(topHalf);
    return `${topHalf}\n${bottomHalf}`;
}

console.log(makeDiamond(5));