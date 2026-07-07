// Function Methods: 
// Currying Function: it transforms a funtion with multiple arguments into to a series of functions.

function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(addition(5)(5)(5));

// 

function multiplication(a){
    return function(b){
        return a * b;
    }
}
console.log(multiplication(9)(9));

// 

function role(userRole){
    return function(userName){
        return userName + " logged in as " + userRole;
    }
}

let admin = role("Admin");

console.log(admin("John"));

// 

function word(str){
    return function(str2){
        return str + str2.toUpperCase();
    }
}
var m = word('');
console.log(m("uppercase"));
console.log(m("javascript"));

// 

function checkAge(minAge){
    return function(age){
        return age >= minAge ? "Eligible to Vote" : "Not Eligible";
    };
}

let vote = checkAge(18);

console.log(vote(20));
console.log(vote(17));

// 

function shipping(charge){
    return function(productPrice){
        return productPrice + charge;
    }
}

let Shipping = shipping(50);

console.log(Shipping(1200));

// Recursive function: it is a function that calls itself repeatedly until a condition is met.

function sum(n) {
    if(n === 0) {
        return 0;
    }

    return n + sum(n - 1);
}

console.log(sum(5));

// 

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n -1);
}

console.log(factorial(5));

//

function countDown(num) {
    if(num === 0) {
        console.log("Done");
        return;
    }

    // console.log(num);

    countDown(num - 1);
}

countDown(5);


// Pure Function : it always returnd the same output fot the same input

function add(a,b){
    return a+b;
}

console.log(add(10, 20));
console.log(add(36, 36));

// 

function multiply(a, b) {
    return a * b;
}

console.log(multiply(20, 19));

// 

function square(n) {
    return n * n
}
console.log(square(55));

// impure function : it is a function that dose not always return the same output 

let count = 0;

function inc(){
    count++;
    return count;
}

console.log(inc());
console.log(inc());

// 

let Total = 0;
function addTotal(value){
    Total += value;
    return Total;
};
console.log(addTotal(3));
console.log(addTotal(3));

// 

function randomNumber() {
    return Math.random();
}

console.log(randomNumber());
console.log(randomNumber());
console.log(randomNumber());

// Higher Order Function:it is function that takes another 
// function as an argument or return that function as a result.

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

function result(marks) {
    return marks >= 35 ? "Pass" : "Fail";
}

function student(score, marks) {
    return score(marks)
}

console.log(student(result, 60));
console.log(student(result, 25));

// 

let names = ["anitha", "balaji", "sai"];

let upper = names.map(function(name) {
    return name.toUpperCase();
});

console.log(upper);

// 

let numbers = [10, 15, 20, 25, 30];

let even = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(even);

//First Class Function - can assign a function to a variable ,passes arguments function and 
//                           return a function from another function.

let Num = [1,2,3,4];

let squ = Num.map(function(num) {
    
    return num * num;
});

console.log(squ);

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





