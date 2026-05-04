// Palindrome Checker

function isPalindrome(str){
    let cleaned = str.toLowerCase();

    let reverse = cleaned.split("").reverse().join('');

    return cleaned === reverse;
}

console.log(isPalindrome("Racecar"));

console.log(isPalindrome("Hello"));


// 

// Vowel Counter

function countVowels(str) {

    let Vowels = "aeiouAEIOU";

    let v = 0;

    for(let i of str){
        if((i >= "A" && i <= "Z") || (i >= "a" && i <= "z")){
            if(Vowels.includes(i)){
                v++;
            }
        }
    }

    console.log("Vowels: ", v);
    
}

countVowels("Javascript");
countVowels("HELLO");

// Logical Expression Evaluator

function evaluateExpression(a, b, c) {
    return (a + b) > c && (b - c) < a;
}

console.log(evaluateExpression(5, 3, 6));
console.log(evaluateExpression(1, 2, 5));

// Maximum of Three Numbers

function maxOfThree(a, b, c){
    return (a > b) ? (a > c ? a : c) : (b > c ? b : c)
};

console.log(maxOfThree(5, 10, 8));

// Grading System

function finalGrade(score, attendance){
    if(score > 90 && attendance > 75){
        return "A+ Grade"
    } else if(score > 75 && attendance > 60){
        return "B Grade"
    } else {
        return "C Grade"
    }
}

console.log(finalGrade(95, 80));
console.log(finalGrade(80, 65));

// Season Finder

function season(month){
    switch(month) {
        case 12:
            case 1:
                case 2:
                    return "Winter"

                    case 3:
                        case 4:
                            case 5:
                                return "Spring"

                                case 6:
                                    case 7:
                                        case 8:
                                            return "Summer"

                                            case 9:
                                                case 10:
                                                    case 11:
                                                        return "Autumn"
    }
}

console.log(season(12));
console.log(season(1));

// Prime Numbers Finder

function findPrimes(n){
    let prime = [];

    for(let i = 2; i < n ; i++){
        let isPrime = true;

        for(let j = 2; j <=Math.sqrt(i); j++){
            if (i % j === 0){
                isPrime = false;
            }
        }

        if(isPrime) {
            prime.push(i);
        }        
    } 

     console.log(prime);
}

findPrimes(10);


// Multiplication Table

function multiplicationTable(n){
    for(let i = 1; i <= n; i++){
        let row="";

        for(let j = 1; j <=n; j++){
            row += (i*j) + " ";
        }
        console.log(row.trim());
        
    }
}

multiplicationTable(3);

multiplicationTable(4);

// Random Number Loop

// while(true) {
//     let num = Math.floor(Math.random() * 10 ) + 1;
//     console.log(num);

// if(num === 7){
//     console.log("Stopped at 7");
// }

// }

// Object Iteration

let students = { 
    Alice: 85, 
    Bob: 92, 
    Carol: 78 
};

for (let key in students){
    console.log(key + ": " + students[key]);
}

for(let score of Object.values(students)){
    console.log(score);
}

// Closure Multiplier

function createMultiplier(x) {
    return function(num){
        return num * x;
    }
}

let multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));

// Currying function

function sum(a){
    return function(b){
        return a + b;
    }
}

let add = sum(5)(10)
console.log(add);

// Recursive Factorial

function factorial(n){
    let fac = 1;

    for(let i =2; i <= n; i++){
        fac *= i
    }
    return fac;
}

console.log(factorial(5));

// Average Age Calculator

let persons = [
    {name: "John", age: 25}, 
    {name: "Jane", age: 30}, 
    {name: "Bob", age: 20}
];

let avgAge = persons
.map(p => p.age)
.reduce((sum,age) => sum + age, 0)/persons.length;

console.log(avgAge);

// Nested Array Flattening

function flattenArray(arr) {
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));


