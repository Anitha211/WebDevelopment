// Function -  it is a reusable block of code used to perform tasks

function greet(){
    console.log("Hello");
}
greet();

// with parameter

function Greet(name) {
    console.log("Hello " + name);
    
}

Greet("John");

// 

function add(a,b) {
    console.log(a+b);
}
add(2,2);

// 

function sum(a,b) {

    return a + b;
}

let result = sum(5, 3);

console.log(result);

// default parameter

function greet(name = "Guest") {
    console.log("Hello " + name);
    
}

greet();
greet("Babu");

// 

function info(name = "Guest", age = 18, city = "Unknown") {
    console.log(name + " is " + age + " years old and lives in " + city);
    
};

info();
info("Kiran");
info("Bob", 20);
info("Balu", 25, "Kadapa")

// // Function Declaration --> function is declared by using function keyword 

function add(a,b){
    return a + b;
}
console.log(add(10,10));

// 

function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(500, 2);

console.log("Total Price: ", + total);

// 

function isEven(num){
    return num % 2 == 0;
}
console.log(isEven(3));
console.log(isEven(6));

//

function printEvennumber(n){
    for(let i = 1 ; i<=n ; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
printEvennumber(20);

// Expression -> it allows function values and assigned variables,passed arguments

let Sum = function add(a, b){
    return a + b;
}
console.log(Sum(90,90));

//

let check = function isPositive(n){
    return n > 0;
}
console.log(check(22));
console.log(check(-23));

//Arrow function : it is a shorter way to write a function using => syntax,and these are assigned to variables

let squareof = (a) =>  a * a;
console.log(squareof(88));

//

let Even = num => num % 2 === 0;
console.log(Even(10));
console.log(Even(99));

// 

let Add = (a,b) => a + b;

console.log(Add(10, 20));

// 
let mul = (x, y) => {
    let result = x * y;
    return result;

};

console.log(mul(6, 7));

// 

let largest = (a, b) => {
    if( a > b) {
        return a;
    }

    return b;
};

console.log(largest(50, 30));

// 

let checkEvenOdd = (num) => {
    if(num % 2 === 0) {

        return "Even";
    }
    return "Odd";
};

console.log(checkEvenOdd(25));
console.log(checkEvenOdd(20));

// reversing each word

let reverseWord = (sentence) => {
    return sentence.split(" ")
    .map(word => word.split("").reverse().join("")).join(" ");
};

console.log(reverseWord("Hello World!"));
console.log(reverseWord("Arrow Function"));

// Capitilizing first letter

let capitalizeFirstLetter = (sentence) => {

    return sentence.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

console.log(capitalizeFirstLetter("java script"));

// 

let isPrime = (num) => {

    if(num <= 1) return "Not Prime";

        for (let i =2; i < num; i++) {
            if (num % i === 0) {
                return "Not Prime"
            }
        }

        return "Prime";
}

console.log(isPrime(13));


// Rest parameter - collects multiple arguments into one array

function add(...num) {
    console.log(num);
    
}
add(1, 2, 3);

// 

let minValue = (...num) => {

    return Math.min(...num);
};

console.log(minValue(25, 15, 45, 10));

// 

let multiply = (...number) => {

    let result = 1;

    for(let num of number) {

        result *= num;
    }

    return result;
}

console.log(multiply(2, 3, 4));

// Recursive function --> a function that calls itself

function countDown(n) {
    if(n==0){
        return;
    }
    console.log(n);
    countDown(n-1) 
}
countDown(5);

// 

function sumNum(a){
    if(a==1){
        return 1;
    }
    return a + sumNum(a-1);
}
console.log(sumNum(5));

// 

let countUp = (n) => {
    if( n === 6) {
        return;
    }
    console.log(n);

    countUp(n + 1)
    
}

countUp(1);
countUp(1);

// 

function fibonacci(num) {
    if(num === 0) {
        return 0;
    }

    if(num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(9));

// 

// Hositing - a function declaration can be called before it is written in the code

// greeting();

let Greeting = function() {
    console.log("Welcome");
}
Greeting();

// 

let squareNum = (num) => {

    return num * num;
    
}

squareNum(5);

// hoisting with Multiplication

console.log(Multiply(4, 5));

function Multiply(a, b) {
    return a * b;
};

// 





























