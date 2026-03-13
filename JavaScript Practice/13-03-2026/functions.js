// functions = reusable block of code

// function name() {}

function greet(){
    console.log("Hello");
}
greet();


// with parameter and argument

function Name(name){
    console.log("Hello" + name);
}

Name("Anitha")

// with return

function add(a,b){
    return a+b;
}
let result = add(3,3)
console.log(result);


// find even or odd
function findNum(num){

    if(num % 2 == 0){
        console.log("even");

    } else {
        console.log("odd");
    }
}

findNum(7);

// square
function square(n){
    return n * n
}
let number = square(3)
console.log(number);

// largest num
function largeNum(a1,a2){
    if(a1 > a2){
        return a1;
    } else {
        return a2;
    }
}
let largest = largeNum(10,35)
console.log(largest);


// factorial
function factorial(n1){
        let f = 1;
    for(let i = 1; i <= n1; i++){
       f = f * i
    }
    return f;
}
console.log(factorial(5));


// array sum
function sumArray(arr){
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum
}

console.log(sumArray([10,40,100]));

// largest number in an array
function largestArray(arr){
    let largest = arr[0];
    
    for( i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log("largest number:",largestArray([10,20,90]));


// palindrome check

function palindrome(str){
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--){
        reverse = reverse + str[i];
    }
    if(str == reverse){
        return true;
    } else {
        return false;
    }
}
console.log(palindrome("level"));


// 
function findLength(str){
    let a = str.split(" ");
    let longest = 0;

    for(let i = 0; i < a.length; i++){
        if (a[i].length > longest){
            longest = a[i].length;
        }
    }
    return longest;
}

console.log(findLength("learing functions in javascript"));

// 
function  multiplication(num){
    
    for(let i = 1; i <=10; i++){
       console.log(num + "X" + i + "=" + (num * i));
    }
}
multiplication(10);

// 
// 
// types of functions --> function declaration


//function Expression = function started inside the variable

let Add = function(a,b){
    return a + b;
}
console.log(Add(100,555));


// 
let checkNumber = function (num) {
    if(num % 2 == 0){
        return "Even"
    }
    return "ODD"
}
console.log(checkNumber(8));
console.log(checkNumber(5));


// 

let reverseStr = function (str){

    let rev = "";

    for(let i = str.length-1; i >= 0; i--){

        rev = rev + str[i]
    }
    return rev
}
console.log(reverseStr("JavaScript"));


//Arrow function

let d = () => {
    console.log("hello");
}
d();

// 
let sum = (a,b) => {
    return a + b;
}
console.log(sum(4,6));

// 

let addArray = (arr) => {
    let s = 0;
    for(let i = 0; i < arr.length; i++){
        s = s + arr[i]
    }
    return s;
};
console.log(addArray([1,2,4,3,5]));


// merge two arrays

let mergeArray = (arr1,arr2) => {

    let result = [];

    for(let i = 0; i < arr1.length; i++){

        result.push(arr1[i])
    }

    for(let i = 0; i < arr2.length; i++){

        result.push(arr2[i])
    }

    return result;
}

console.log(mergeArray([66,77],[88,99]));

// 

let mergeArr = (a,b) => {
       return [...a,...b] 
}
console.log(mergeArr([2,3],[9,0]));



// Anonymous function --- without a name

let countEven = function(arr){
        
    let count = 0;

    for(let i =0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count++
        }
    }
    return count;
}
console.log(countEven([1,2,3,4,4,5,6,7,8,9,12]));

// 
let countVow = function(str){

    let count = 0;
    let vowels = "aeiou";

    for(let i =0; i < str.length; i++){

        if(vowels.includes(str[i])){

            count++;
        }
    }
    return count;
}
console.log("vowels count of word javascript",(countVow("javascript")));


// 
// 
// Recursive function --> a function that calls itself

// 
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
// 
// function currying --> it transforms a funtion with 
//    multiple arguments into to a series of functions.

function Addition(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(Addition(2)(3)(9));


//

let mul = a => b => a*b;
let double = mul(2);
console.log(double(5));


//

function greet(greeting){
    return function(name){
        return greeting + " " + name;
    }
}

console.log(greet("Hello")("JavaScript"));

// 
function discount(per){
    return function(price){
        return price - (price * per / 100);
    }
}
let total = discount(10)
console.log(total(500))

// 

// first class function  

let calculate = {
    add: function(a,b){
        return a + b;
    }
}
console.log(calculate.add(55,44));

// 

let Greet = function(){
    console.log("First class function");
};
Greet();

// 
function Mul(a){
    return function(b){
        return a * b;
    }
}
let r = mul(3) ;
console.log(r(66));

// 

