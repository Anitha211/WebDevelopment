// console.log("Types of Operators in Javascript");
// console.log("Arithmetic Operators - perform Mathematical operations");

var a = 34;
var b = 44;
console.log(a+b);//Add
console.log(a-b);//sub
console.log(a*b);//mul
console.log(a/b);//div
console.log(a%b);//modulus(reminder)
console.log(a**b);//exponentiation


var c = "NYB"
var d = "INFOTECH"
console.log("c:",c)
console.log("d:",d)
console.log(c+d);

var f = 2
var j = "77"
console.log(f+j);


// console.log("Assignment Operators - it assign values to variables");

var k = 5;
console.log(k);

var i = 10;
 i += 3;
console.log(i);

var i = 10;
 i -= 3;
console.log(i);

var i = 10;
 i *= 3;
console.log(i);

var i = 10;
 i /= 3;
console.log(i);

var i = 10;
 i %= 3;
console.log(i);

var i = 5;
 i **= 2;
console.log(i);

// Comparison Operators - Compare two values and returns True or False.

var a = 5
var b = 6
console.log(a==b);//equal to
var c = 5
console.log(a===c);//strict equal to
console.log(a!=b);//not equal to
console.log(a!==c);//strict not equal
console.log(a<=c);//lessthan or equal
console.log(a<b);//lessthan
console.log(a>b);//greater
console.log(a>=c);//greater or equal

//Logical Operator - are used to combine boolean values(true/False)
//AND && --> If both conditions are true then result will be true 
//OR  || --> if any one condition is true then the result will be true
//NOT !  --> if the condition is true returns false
//       --> if the condition is false returns True
      
var a = 2
var b = 4
console.log((a<b)&&(a>b))
console.log((a<b)||(a>b))
console.log(!(a>b))


// Bitwise Operator - are operators that perform operations on the Binary code
// AND - & 
// OR - |
// XOR - ^
// 1's Complement - ~
// Right Shift - >>
// Left Shift - <<


var c = 12
var d = 10
console.log(c&d)
console.log(c|d) 
console.log(c^d)
console.log(c>>1); //Right shift
console.log(c<<1);  //Left shift
console.log(~c);
console.log(~d);

// Ternary Operator

var score = 90
var grade = score > 80 ? "A" : "B" ;
console.log(grade);


var age = 16
var canvote = age >= 18 ?
"Eligible to vote" : "Not Eligible";
console.log(canvote);

//String

var text1 = "Good";
var text2 = "Morning";
console.log(text1 + " " + text2);
text3 = text1 += text2;
console.log(text3)
console.log(text1 == text2);
console.log(text1 !== text2);








































