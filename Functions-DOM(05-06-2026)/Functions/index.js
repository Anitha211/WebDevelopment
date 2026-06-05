// Higher Oreder Function - it is function that takes another function 
//                            as an argument or return that function as a result.

console.log("...............Higher Order Function.......................");


function add(a,b){
    return a + b;
}
function higherOrderFunction(val,a,b){
    return val(a,b);
}
console.log(higherOrderFunction(add,100,100));

// 

function mul(a,b) {
    return a * b;
}

function mulNum(val, a, b) {
    return val(a,b)
}

console.log(mulNum(mul,20,20));

// 

function greet(name) {

    return `Hello, ${name}`
}

function greetUser(name, callback) {
    return callback(name);
}

console.log(greetUser("Bob", greet));

// 

function multiplier(num) {

    return function(number) {
        
        return number * num;
    }
} 

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

// 

function checkPrimeNumbers(number, callback) {

    callback(number);
}

function isPrime(num) {

    let prime = true;

    if(num <= 1) {
        prime = false;

    } else {
        for (let i = 2 ; i < num; i++ ) {
            if(num % i === 0) {
                
                prime = false;
                break;
            }
        }
    }

    if(prime) {

        console.log(num + " " + "is a Prime Number");
        
    } else {
        console.log(num + " " + "is not a Prime");
        
    }
}
checkPrimeNumbers(1 , isPrime);
checkPrimeNumbers(2 , isPrime);
checkPrimeNumbers(3 , isPrime);
checkPrimeNumbers(4 , isPrime);
checkPrimeNumbers(7 , isPrime);
checkPrimeNumbers(10, isPrime);

// 

function calculateMarks(marks, callback) {
    return callback(marks);
};

function getMarks(marks) {
    if (marks >= 90) {
        return "Grade A"
    } else if(marks >= 75) {
        return "Grade B"
    } else if(marks >= 50) {
        return "Grade C"
    } else {
        return "Fail"
    }
}

console.log(calculateMarks(95, getMarks));
console.log(calculateMarks(80, getMarks));
console.log(calculateMarks(60, getMarks));
console.log(calculateMarks(34, getMarks));

// Pure Function -  it always returnd the same output fot the same input

console.log(".......Pure Function.........");

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

let numbers = [1,2,3,4];

function addNumber(num) {

    numbers.push(num);
};

addNumber(5)
addNumber(6)

console.log(numbers);


// Impure Function - Produces different outputs for the same input.

console.log(".......Impure Function.........");

let count = 0;

function increase() {
    count++;
    return count;
}

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());

// 

function getRandom() {
    return Math.random();
}

console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());

// 

function getCurrentTime() {

    return new Date();
}

console.log(getCurrentTime());

// 

let Total = 0;
function addTotal(value){
    Total += value;
    return Total;
};
console.log(addTotal(3));
console.log(addTotal(3));
console.log(addTotal(3));

// 















