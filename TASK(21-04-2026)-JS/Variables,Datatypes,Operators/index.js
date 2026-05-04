// Variables --> used to data in a memory
// var, let, const

var n = 5;
console.log(n);
var n = 50;
console.log(n);

//let
let a = 10;
a = 20;
a = 30;
console.log(a);

//const
const xx = 100;
// xx = 100
console.log(xx);

// Data types: 
// Primitive & Non-primitive
// Primitive - simple, immutable and stored by values
// str,int,boolean,bigint,null,undefined

// str
let name = "john";
console.log(name);
console.log(typeof(name));

// int

let age = 25;
console.log(age);
console.log(typeof(age))

// boolean
let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof(isLoggedIn));

var s = 2;
var p = 4;
console.log(s > p);

// null

var f = null;
console.log(f);

// undefined

let x;
console.log(x);

// bigint

let bigNumber = 54312678908643341241251465241451653452436235673523423452;
console.log("BigInt:", bigNumber);
console.log(typeof(bigNumber));

let num = BigInt(12345678998765432124680975312);
console.log(num);
console.log(typeof(num));

// Non-Primitive -> complex, mutable and stored by referance
// object, array, function

// object:

let person = {
    name:"Bob",
    age:"12"
}

console.log(person);
console.log(person.name);

// 

var obj = {
    name: "Peter Harry",
    age: "24",
    isStudent: true,
};
console.log(obj);
console.log(obj["isStudent"])
console.log(obj["name"]);
console.log(obj["age"]);
console.log("Type--",typeof(obj));


// Array - list of values

let number = [10,2,3]
console.log(number);

// function -> a block of code that performs a task

function greet() {
    return "HELLO!!!"
}
console.log(greet());

// Date

var today = new Date();
console.log("Date:", today);


// Operators -> are symbols used to perform operations on values.
// Types :- Arithmetic, assignment, comparision, logical, 

// Arithmetic Operators - perform Mathematical operation

let A = 34;
let B = 44;
console.log(A+B);//Add
console.log(A-B);//sub
console.log(A*B);//mul
console.log(A/B);//div
console.log(A%B);//modulus(reminder)
console.log(A**B);//exponentiation

// Assignment Operators - it is used to assign or update values 

console.log("Assignment operators");


var k = 5;
k += 5; // k = k + 5 => 5 + 5 => 10
console.log(k);

var i = 10;
 i += 3;
console.log(i);

var i = 10;
 i -= 3; // i = i - 3 => 10 - 3 => 7
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


//  Comparison Operators - Compare two values and returns True or False.

console.log("Comparison Operators ==, ===, !=, !==, >, =>, <, <=");

let c1 = 20;
let c2 = 30;
console.log("equal to 20 == 30",c1==c2);

let c3 = 20;
console.log(c1===c3);
console.log(c1!=c2);
console.log(c1!==c3);
console.log(c1>c2);
console.log(c1 < c2);
console.log(c1 >= c3);
console.log(c1 <= c2);

// Logical Operators - are used to combine boolean values(true/False)

// AND - && : If both conditions are true then result will be true 

let l1 = 2;
let l2 = 5;

console.log((l1>l2) && (l1<l2));
console.log((l1>l2) || (l1<l2));
console.log(!(l1 > l2));

// 

let Age = 25;

console.log(Age > 18 && Age < 60);
console.log(Age > 18 || Age < 60);
console.log(!(Age > 18));


// Ternary Operator

var score = 90
var grade = score > 80 ? "A" : "B" ;
console.log(grade);

















