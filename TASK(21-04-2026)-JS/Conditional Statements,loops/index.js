///////////// Conditional Statements /////////////
// used to control the flow of program

// If -> executes a block if condition is true

let Num = 10;
if (Num > 0) {
    console.log(Num + " is a positive number.");
}
// 
let AGE = 20;
if (AGE <= 18) {
    console.log("You are an adult.");
}

// IF -Else ->  executes one block of code if the condition is true, and different block of code if the condition is false

let age = 17
if (age >= 18) {
    console.log("You are eligible to vote.");

} else {
    console.log("You are not eligible to vote.");
}

// 

let num = 12;

if(num % 2 === 0){
    console.log("Even");
    
}else {
    console.log("Odd");
    
}

// 

let marks = 45;

if(marks >= 50){
    console.log("Pass");
    
}else {
    console.log("Fail");
    
}

// 


let a = 15;
let b = 20;
if (a > b) {
    console.log(a + " is greater than " + b);

} else {
    console.log(a + " is less than " + b);

}

// if else if else --->used to check multiple conditions

let score = 75;

if(score >= 90){
    console.log("A-Grade");
} else if(score >= 55){
    console.log("B-Grade");
    
} else {
    console.log("Fail");
    
}

// 

let light = "yellow";
if (light == "green") {
    console.log("Go");
}
else if (light == "yellow") {
    console.log("slow down/wait");
}
else if (light == "red") {
    console.log("stop")
}
else {
    console.log("invalid signal")
}


// Switch : Allows to execute different blocks of code (compares one expression to many values)

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2: 
        console.log("Tuesday");
        break;
        
        default:
            console.log("Invalid Day");
            
}

//

let N = -5;

if(N < 0){
    console.log("Negative num");
    
} else {
    console.log("Positive Number");
    
}

// 

let n1 = 10;
let n2 = 25;
let n3 = 15;

if(n1 > n2 && n1 < n3){
    console.log(n1);
    
} else if(n2 > n3){
    console.log(n2);
    
} else {
    console.log(n3);
    
}

// 

let color = "red";

switch(color){
    case "red":
        console.log("STOP");
        break;

        case "yellow":
            console.log("Ready");
            break;
            case "Green":
                console.log("GO");
                break;
}

// 

let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login success");
    
} else {
    console.log("Invalid username and password");
}

////////LOOPS/////////
//used to execute a block of code repeatedly until the condition becomes false.

// for loop : it repeat a block of code in a specific number of times

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// sum of 1 t0 5 numbers;

let sum = 0;
for(let i = 1; i <= 5 ; i++){
    sum += i;
}
console.log("sum of 1 t0 5 numbers",sum);

// print even num from 1 to 20;

for(let i =1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i,"is a even number");
    }
}

// 12 table

let mul = 12;

for(let i = 1; i<=10; i++){
    console.log(mul + "X" + i + "=" + (mul*i));
}

// % by 5

let count = 0;
for(i = 1; i <=50 ; i++ ){
    if(i % 5 == 0){
        console.log(i,"is a % 5");
       
    }
}

// square

for(i=0; i<= 5; i++){
    console.log(i*i,"square");
    
}

// while loop : it repeatedly executes a block of code as long as a specific condition is true

let q = 1;

while (q <= 5) {
    console.log(q);
    q++
}

// 
// do while ---> it executes block of code at least once before checking the condition 

let k = 10;
do {
    console.log(k);
    k++;
} while (k <= 20);

// 

let c = 1;
do {
    if (c % 2 == 0){
        console.log(c , "is even");
    } else {
        console.log(c, "is odd");
    }
    c++;
    } while (c <= 15);

//

//even/odd from 1 to 5

for(let i = 1; i >= 5 ; i++){
    if(i % 2 == 0){
        console.log(i + " even");
        
    }else {
        console.log(i + " odd");
        
    }
    
}

//sum of even number

let add = 0;
for(let i = 1; i <=10; i++){
    if(i % 2 === 0){
        add += i
    }
}
console.log(add);

// Count +Ve, -Ve, 0

let arr = [2, -1, 0, 5, -3]

let positive = 0,
negative = 0,
zero = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        positive++;
    } else if(arr[i] < 0){
        negative++
    }else {
        zero++;
    }
}

console.log("Positive", positive);
console.log("Negative", negative);
console.log("Zero", zero);

// FizzBuzz

for(let i = 1; i<=10; i++){
    if(i%3 === 0 && i %5 === 0){
        console.log("FizzBuzz");
        
    }else if(i % 3 === 0){
        console.log("Fizz");
        
    } else if(i % 5 === 0){
        console.log("Buzz");
        
    } else {
        console.log(i);
        
    }
}


// 
let values = [10, "hello", true, null];

for(let i = 0; i < values.length; i++){
    console.log(typeof values[i]);
    
}

// Reverse string

let str = "Hello";
let r = "";

for(let i = str.length-1; i >= 0; i--){
    r += str[i]
}
console.log(r);

//

// for of loop : used to loop over the values of iterable objectts like arrays, strings,map,...

let word = "Navayuva Bharat";
for(let char of word){
    console.log(char);
    
}

//

let fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits){
    console.log(fruit);
    
}

//
let items = new Map([
    ["apple",100],
    ["banana",50],
    ["mango",200]
]);
for(let[key,value] of items){
    console.log(key,":",value);
}

//

// for in loop : is used to iterate over the each keys in an object

for(let index in fruits){
    console.log(fruits[index]);
    
}

//

let user = {
    name : "Aria",
    age : 24,
    city : "India"
};
for(let key in user){
    console.log(user[key]);
    
}

//
