// Higher Order Function --- it is function that takes another function as an argument or return that function as a result.

// function first(){

//     fun()

// }

// function second(){

//     console.log("This is second function");

// }

// first(second);

// 

function add(a,b){
    return a + b;
}

function higherOrderFunction(val,a,b){
    return val(a,b);
}

console.log(higherOrderFunction(add,100,100));


// 

function greet(name){
    return "Hello " + name;
}

function processUser(callback){
    console.log(callback("Anitha"));
    
}

processUser(greet);

// 

function mul(x){
    return function(y) {
        return x * y;
    }
}

let double = mul(2);
console.log(double(5));

// 


function processArray(arr, callback){

    let result = [];

    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]))
    }
        return result;
    }

    function d(n){
        return n * 2;
    }

console.log(processArray([1,2,3], d));


//

function num(arr){
    let result = [];

    for(let i = 0 ; i < arr.length; i++){
        result.push(arr[i])
    }
    return result;
}

function square(n){
    return n * n 
}
console.log("square:", num([2,3,22]));

// 

function repeatAction(callback, n){
    for(let i = 0; i < n; i++){
        callback();
    }
}
function sayHai(){
    console.log("Hi");
    
}
repeatAction(sayHai, 3)

// 

function findNum(arr, callback){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
function isEven(num){
    return num % 2 == 0;
}
console.log(findNum([1,2,3,4,5,6,7,8,9], isEven));

// 
// 
//  Pure function --> it always returns the same output for the same input

function addNum(arr,num){
    return [arr, num];
}
let arr = [11,22,33,44];
let a = addNum(arr, 55);

console.log(arr);
console.log(a);

// 

function add(a,b){
    return a + b;
}
console.log(add(4,6));

// 

function square(num){
    return num * num;
}
console.log(square(5));

// 

function reverseString(str){
    let result = "";
    for (let i = str.length-1; i >= 0; i--){
        result = result + str[i];
    }
    return result;
}
console.log(reverseString("hello"));

// 

function count(str){
    return str.length;
}
console.log(count("javascript"));

// 

function addValue(value){
    return value+100;
}
console.log(addValue(34));
console.log(addValue(453));

// impure function --> it is a function that dose not always return the same output.

function randomNumber(){
    return Math.random () * 100;
};
console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// 

let number  = [1, 2, 3];

function addNumber(){
    number.push(4);
}
addNumber();

console.log(number);

// 

let tax = 10;

function calPrice(price){
    return price + tax;
}
console.log(calPrice(100));

//

let person ={
    name: "John",
    age : 32,
};
function incrementAge(person){
    return ++person.age;
}
console.log(incrementAge(person));

console.log(incrementAge(person));

console.log(incrementAge(person));

console.log(incrementAge(person));

// 



 











                                                                                                 