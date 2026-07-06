// function - is a reusable block of code that performs a specific task when it is called

function greet() {
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

// 

function printEvennumber(n){
    for(let i = 1 ; i<=n ; i++){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
printEvennumber(20);

// function Expression -> it allows function values and assigned variables,passed arguments

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

// Anonymous function -> is a function without a name,these are assigned to variables

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

// finding vowels  

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
console.log(checkPalindrome("moon"));
 
// Arrow function - it is a shorter way to write a function using syntax and these are assigned to variables

let Add = (a,b) => {
    return a+b;
};
console.log(Add(134,134));

// 

let squareof = (a) =>  a * a;
console.log(squareof(88));

// 

let even = (n) => {
    if(n % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}

console.log(even(18));
console.log(even(99));

// 

let canVote = (age) => {
    return age >= 18 ? "Eligible to Vote" : "Not Eligible"
};

console.log(canVote(15));
console.log(canVote(18));

// password checker

let checkPassword = (password) => {
    if(password.length > 8) {
        return "Strong Password"
    } else {
        return "Weak Password"
    }
}

console.log(checkPassword("acv"));
console.log(checkPassword("abc@1234w"));

// 










