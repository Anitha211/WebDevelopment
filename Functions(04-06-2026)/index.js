// functions -> it is a reusable block of code used to perform tasks

function greet() {
    console.log("Hello");
}
greet();

// Function Declaration --> function is declared by using function keyword 

function add(a, b) {
    return a + b;
}
console.log(add(10, 10));

// 

function Greeting(name) {
    return "Hello, " + name + "!";
}

let n = Greeting("Alice");
console.log(n);

// 

function square(num) {
    return num * num;
}

console.log(square(5));

// function to check Even or Odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(2));

// 

function biggest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(biggest(15, 89));

//Function Expression -> it allows function values and assigned variables,passed arguments
// 2 types - Anonymous, Arrow

let greetUser = function(name) {
    return "Welcome " + name;
};

console.log(greetUser("Viha"));

// 

let largest = function(a,b) {
    if(a > b ) {
        return a;
    } else {
        return b;
    }
};

console.log(largest(45, 12));

// Anonymouus Function - is a function without a name,these are assigned to variables

let sum = function(x, y) {
    return x + y;
}

console.log(sum(3,3));

// 

let ages = [12,20,13,34]
let s = ages.map(function(age){
    if(age <= 18){
        return "Minor";
    } else {
        return "Adult";
    }
});
console.log(s);

// reverse a string 

let reverse = function(str) {
    return str.split("").reverse().join("")
};

console.log(reverse("Hello"));

// 

let countVowles = function(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let char of str) {
        if(vowels.includes(char)) {
            count ++;
        }
    }

    return count;
}

console.log(countVowles("Functions"));

// checking palindrome

let checkPalindrome = function(str) {
    let reverse = str.split("").reverse().join("");

    if(str === reverse) {
        return "Palindrome";
    } else {
        return "Not a Palindrome"
    }
};

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("mum"));

// Arrow Function - it is a shorter way to write a function using syntax and these are assigned to variables

let squareof = (a) =>  a * a;
console.log(squareof(88));

// 

let Add  = (a , b) => a + b
console.log(Add(20, 40));

// 

let numbers = [2,5,4,55,44,38]
let double = numbers.map(n => {
    if(n% 2 == 0 ){
        return n * 2;
    }else{
        return n
    }
});
console.log(double);

// 

let factorial = (n) => {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
console.log(factorial(5));

// 

let even = (n) => {
    if(n % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}

console.log(even(18));

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

// counting words in sentence

let countWords = (sentence) => {
    return sentence.split(" ").length;
};

console.log(countWords("Count words in Sentence"));

// Find Longest word in sentence

let longestWord = (sentence) => {

    let words = sentence.split(" ");

    let longest = "";

    for(let word of words) {

        if(word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
};

console.log(longestWord("JavaScript Programming"));

// Recursive Function - it is a function that calls itself repeatedly until a condition is met.

// sum of numbers

function sumNum(num) {

    if(num === 1) {
        return 1;
    }

    return num + sumNum(num - 1);
}

console.log(sumNum(5));

// Fibonacci series

function fibonacci(num) {
    if(num === 0) {
        return 0;
    }

    if(num === 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(6));
console.log(fibonacci(2));

// Countdown Timer

function countDown(num){

    if(num === 0) {
        console.log("Time Up! ");
        return;
    }

    console.log(num);

    countDown(num - 1)
    
}

countDown(10);

// Hositing - a function declaration can be called before it is written in the code

// Greet();

let Greet = function() {
    console.log("Welcome");
}
Greet()

// 

// squareNum(5);

let squareNum = (num) => {

    return num * num;
    
}

squareNum(5);

// hoisting with Multiplication

console.log(multiply(4, 5));

function multiply(a, b) {
    return a * b;
};

// var Vs let

console.log(city);

var city = "Pune"
console.log(city);

// console.log(place);

let place = "Hyderabad"

console.log(place);

// Hoisting inside block

{
    var a = 10;
}

console.log(a);

// 

{
    let b = 100;
    console.log(b);
    
}

// console.log(b); // ReferenceError

// IIFE - Immediately Invoked Function Expression
//         it is function that runs immediately after it is created.

(function() {
    console.log("IIFE");
})();

// with parameter

(function(name) {
    console.log("Hello " + name);
})("Anitha");

// return value

let result = (function(a, b) {
    return a + b;
})(10, 20);

console.log(result);

// square of a num

(function(num) {
    console.log(num * num);
})(5);

// even or odd

(function(num) {
    if(num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
})(7);

// largest num 

(function (a, b) {
    if(a > b) {
        console.log(a);
        
    } else {
        console.log(b);
        
    }
})(49, 98);

// sum of array

(function(arr) {
    let sum = 0;

    for(let num of arr) {

        sum += num;
    }

    console.log(sum);
    
})([1,2,3,4,,55,6,43]);

// Currying Function - it transforms a funtion with multiple arguments into to a series of functions.

function multiplicationTable(num) {
    return function(multiple) {

        return num * multiple;
    };
}

let table = multiplicationTable(5);

console.log(table(1));
console.log(table(2));
console.log(table(3));

// 

function addtion(a) {

    return function(b) {

        return function(c){
                return a + b + c;
        }
    }
}

console.log(addtion(5)(10)(15));

// Tax Calculator

function taxCalculator(taxRate) {

    return function(amount) {

        return amount + (amount * taxRate)
    }
}

let tax = taxCalculator(0.18);
console.log(tax(1000));

// 

function greaterThan(limit) {

    return function(num) {

        return num > limit;
    };
}

let number = [5, 10, 15,20];

let Result = number.filter(greaterThan(10));

console.log(Result);

// Curried form validator

function minLength(length) {

    return function(value) {

        return value.length >= length;
    };
}

let validatePassward = minLength(8);

console.log(validatePassward("hello123"));

// First Class Function - can assign a function to a variable ,passes arguments function and 
//                           return a function from another function.

let Num = [1,2,3,4];

let Sq = Num.map(function(num) {
    
    return num * num;
});

console.log(Sq);

//

function Cal(a,b, Operation) {

    return Operation(a,b);

}

function add(x, y) {

    return x + y;
}

console.log(Cal(10, 20, add));

function mul(x, y) {
    return x * y;
}

console.log(Cal(5,4,mul));

//


















