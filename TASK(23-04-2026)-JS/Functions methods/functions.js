// currying function : it transforms a funtion with 
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

let sub = a => b => a-b;
console.log(sub(10)(5));

// 

function greet(greeting) {
    return function (name) {
        return `${greeting}, ${name}`
    };
}

let sayHello = greet("Hello");

console.log(sayHello("Balu"));
console.log(sayHello("John"));


// 

function word(str){
    return function(str2){
        return str + str2.toUpperCase();
    }
}
var m = word('');
console.log(m("uppercase"));
console.log(m("function currying"));
// 

function discount(per){
    return function(price){
        return price - (price * per / 100);
    }
}
let total = discount(10)
console.log(total(500))

// 
// Pure Function : it always returnd the same output fot the same input

function add(A,b){
    return A+b;
}

console.log(add(3,5));
console.log(add(44,44));

// 

function sqr(n) {
    return n * n
}
console.log(sqr(4));

// 

function doubleArr(arr){
    return arr.map(x  => x * 2)
}

console.log(doubleArr([4,5,6,7,8]));

// 
// Impure function --> it is a function that dose not always return the same output 

let count = 0;

function inc(){
    count++;
    return count;
}

console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());

// 


function getRandom() {
    return Math.random() * 5;
}

console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());

// 

let Total = 0;
function addTotal(value){
    Total += value;
    return Total;
};
console.log(addTotal(3));
console.log(addTotal(3));

// 

// Higher Order function ---> it is function that takes another function 
//                            as an argument or return that function as a result.

function add(a,b){
    return a + b;
}
function higherOrderFunction(val,a,b){
    return val(a,b);
}
console.log(higherOrderFunction(add,100,100));

// 

function operate(a, b) {
    return a,b;
}

function add(x,y) {
    return x + y
}

function Mul(x,y) {
    return x * y
}

console.log(operate(5,3, add));
console.log(operate(Mul, 5,5));

// 

function multiply(x){
    return function(y){
        return x * y;
    }
}
let doubled = multiply(11);
console.log(doubled(11));

// 


function myfilter(arr, callback){
     let result = [];
    for(let i =0 ; i < arr.length; i++){
        if(callback(arr[i])){
           result.push(arr[i]);
        }
    }
    return result;
}
function isEven(num){
    return num % 2 == 0;
}
let p = [1,2,3,4,5,6,7,56,45,38]
let evenNumbers = myfilter(p, isEven);
console.log(evenNumbers);

// 

