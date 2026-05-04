// functions -> it is a reusable block of code used to perform tasks

function greet(){
    console.log("Hello");
}
greet();

//

function add(a,b) {
    console.log(a+b);
}
add(2,2);

// 

function mul(a,b){
    console.log(a*b);
    return a*b;
}
let result = mul(3,3);
console.log(result);

//

// Function Declaration --> function is declared by using function keyword 

function add(a,b){
    return a + b;
}
console.log(add(10,10));

//
function greet(){
    return "Hello " + name
}
console.log(greet("Bob"));

//

function square(n){
    return n * n;
}
console.log(square(17));

// 

function isEven(num){
    return num % 2 == 0;
}
console.log(isEven(3));
console.log(isEven(6));

//

function printEvennumber(n){
    for(let i = 1 ; i<=n ; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
printEvennumber(20);


// Function Expression -> it allows function values and assigned variables,passed arguments

let sum = function add(a, b){
    return a + b;
}
console.log(sum(90,90));

//

let check = function isPositive(n){
    return n > 0;
}
console.log(check(22));
console.log(check(-23));


//

let sumArray = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        
    }
    return sum;   
};
console.log(sumArray([1, 4, 3, 2, 6]));


//Anonymous function -> is a function without a name,these are assigned to variables

let addition = function(a,b){
    return a + b;
};
console.log(addition(30,78));

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

//Arrow function : it is a shorter way to write a function using => syntax,and these are assigned to variables

//
let squareof = (a) =>  a * a;
console.log(squareof(88));

//

let Even = num => num % 2 === 0;
console.log(Even(10));
console.log(Even(99));


//
let factorial = (n) => {
    if(n<=1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};
console.log(factorial(5));

//Clousers => 

function outer() {
    let count = 0;

    function inner(){
        count++;
        return count;
    }
    return inner;
}

let counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());


// 

function mul(x){
    return function(y){
        return x * y;
    };
}
let double = mul(2);
console.log(double(5));


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

//fibonacci

function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6));


///////////Arrays -> arrays are used to stored the collection of data.

let array = [1,2,3,4]
console.log(array);

//push
let a = [10,20]
console.log(a);

let length = a.push(30);
console.log(length);
console.log(a);

// sum of even numbers in a array

function sumEven(arr){
    let add = 0;
    for(let i =0 ; i <arr.length; i++){
        if(arr[i] % 2 === 0){
            add += arr[i];
        }
    }
    return add;
}
console.log(sumEven([1,2,3,4,5,6,7]));

// 
let Number = [5,10,10];

let sums = Number.reduce(function(total,n){
    return total + n;
});
console.log(sums);

//
function squareOdds(arr){
    return arr
    .filter(n => n%2 !== 0)
    .map(n => n * n )
}
console.log(squareOdds([1,2,3,4,5,6]));

// 

function checknumber(num){
    let n = [10,11,12,34,55];
    return n.includes(num);
}
console.log(checknumber(55));

console.log(checknumber("a"));

// 

function findIndex(letters,value){

    return letters.indexOf(value);
}
let letters = ["a","b","c","d","e"];

console.log(letters);

console.log(findIndex(letters,"b")); //retun 1
console.log(findIndex(letters,"f"));

//cover str into uppercase

function toUpperCase(arr){
    return arr.map(str => str.toUpperCase());
}
console.log(toUpperCase(["Javascript", "arrays", "functions"]));

// flatten of array

function flattenArray(arr){
    return arr.flat();
}
console.log(flattenArray([1,["a","A"],[2,4]]));

// 

let num1 = [2,3,1,4,5,6,7,4,9];
console.log(num1);

for(let i = 0; i < num1.length; i++){

    for(let j = 0; j < num1.length-1; j++){

        if(num1[j] > num1[j+1]){

            let result = num1[j];
            num1[j] = num1[j+1];
            num1[j+1] = result;
        }
    }
}
console.log(num1);

// 

let revArr = [1,2,3,5,46]
let reverse = [];

for(let i =revArr.length-1; i >= 0 ; i--){
    reverse.push(revArr[i])
}
console.log(revArr);
console.log("Reverse Array:", reverse);