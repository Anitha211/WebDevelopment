// Functions Methods

// IIFE - 

let counter = (function() {
    let count = 0;
    return function() {
        count++;
        return count++;
    };
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// 

let Count = (function() {
    let c = 0;
    
    return {
        inc: function() {
            c++;
            console.log(c);
            
        },

        dec: function() {
            c--;
            console.log(c);
            
        },
    }
})();

Count.inc();
Count.inc();
Count.dec();
Count.dec();


// 

let num = 5

for (let i = 1; i <= 3; i++) {
    (function() {
        console.log("Number: ", num);
        
    })(i)
}

// 

let backAcc = (function() {
    let balance = 1000;

    return {
        deposite: function (amount) {
            balance += amount;
            console.log("Balance: ", balance);
        },
        withdraw: function (amount) {
            balance -= amount;
            console.log(("Balance: ", balance));
            
        }
    }
})();

backAcc.deposite(500);
backAcc.withdraw(200);

// 

// Function curryying : 

// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(2)(4)(4));

// 

function greet(g) {
    return function (name) {
        return `${g}, ${name}`
    };
}

let sayHello = greet("Hello");
console.log(sayHello("Anitha"));

// 

function discount(percent){
    return function (price) {
        return price - price * percent/100;
    };
}

let tenPer = discount(10);
console.log(tenPer(500));

// 

// First class function : can assign a function to a variable ,
// passes arguments function and return a function from another function.

function calculate(a,b, c) {
    return c(a,b);
}

function add(x,y) {
    return x + y;
}

let result = calculate(2,3,add);
console.log(result);

// 

function makeMul(x){
    return function(y){
        return x * y;
    }
}
let mulBy = makeMul(3);
console.log(mulBy(5));

// 
let findnumbers = [2,4,6,36,5,10,15,20];
findnumbers.forEach(function(num){
    if (num % 2 == 0){
        console.log(num+ " is even")

    }
});


// Higher Order function ---> it is function that takes another function 
//                            as an argument or return that function as a result.

console.log("Higher Order Function");

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


// Recursive Function : a function that calls itself

function countDown(n) {
    if(n === 0) {
        return;
    }

    console.log(n);
    countDown(n - 1);
}

countDown(5);

// factorial

function factorial(n) {
    if(n === 1) return 1;

    return n*factorial(n-1);
}

console.log(factorial(5));

// 

function sumNum(a){
    if(a==1){
        return 1;
    }
    return a + sumNum(a-1);
}
console.log(sumNum(5));

// 




