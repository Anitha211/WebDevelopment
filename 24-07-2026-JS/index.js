// Conditional Statements

// if statement - executes code only if contidion is true

let age = 18;

if (age >= 18) {
    console.log("Eligible to vote");
}

// if-else Statement - executes one block of code if ture, and another block of code if false

let num = 9;

if (num % 2 === 0) {
    console.log("Even Number");

} else {
    console.log("Odd Number");

};

// if-else if-else Statement - used when there are multiple conditions

let marks = 78;

if (marks >= 90) {
    console.log("Grade A");

} else if (marks >= 75) {
    console.log("Grade B");

} else if (marks >= 50) {
    console.log("Grade C");

} else {
    console.log("Fail");

}

// switch statement - used to check multiple values of the same variable

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid Day");
}

// Ternary Operator - Short form of if-else

let Age = 16;

let result = Age >= 18 ? "Adult" : "Minor";

console.log(result);

// 

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance) {
    console.log("Transaction Successful");

} else {
    console.log("Insufficient Balance");

}

// 

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");

} else {
    console.log("Invalid Credentials");

};

// 

let signal = "Red";

switch (signal) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("invalid signal");
}

// 

let number = -10;

if (number > 0) {
    console.log("Positive Number");

} else if (number < 0) {
    console.log("Negative Number");

} else {
    console.log("Zero");

}

// 

let a = 25;
let b = 18;

if (a > b) {
    console.log(a + " is the largest number");

} else {
    console.log(b + " is the largest number");

}

// 

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap year");

} else {

    console.log(year + " is Not a leap year");

}

// 

let score = 82;

if (score >= 90) {
    console.log("Grade A");

} else if (score >= 75) {
    console.log("Grade B");

} else if (score >= 60) {
    console.log("Grade C");

} else if (score >= 35) {
    console.log("Grade D");

} else {
    console.log("Fail");

};

// 

let num1 = 20;
let num2 = 5;
let Operator = "*";

switch (Operator) {

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");

}

// 

let Password = "ABC123";

if (Password.length >= 8) {
    console.log("Strong Password");

} else {
    console.log("Password must contain atleast 8 characters");

}

// 

let amount = 2500;

if (amount >= 2000) {
    let discount = amount * 0.10;
    console.log("Discount: " + discount);
    console.log("Final Amount: " + (amount - discount));
} else {
    console.log("No Discount");

}

// Loops - used to execute a block of code multiple times until a specifid condition becomes false

// for loop - it repeat a block of code in a specific number of times

for (let i = 1; i <= 5; i++) {
    console.log(i);
};

// while loop - it repeatedly executes a block of code as long as a specific condition is true

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
};

// do-while loop - it executes block of code at least once before checking the condition 


let j = 1;

do {
    console.log(j);
    j++;

} while (j <= 10);

// 

let c = 1;
do {
    if (c % 2 == 0) {
        console.log(c, "is even");
    } else {
        console.log(c, "is odd");
    }
    c++;
} while (c <= 15);

//  for of 

let fruits = ["Apple", "Mango", "Orange"];

for(let fruit of fruits) {
    console.log(fruit);
    
}

// for in - 

let student = {
    name : "Anitha",
    age: 22,
    course: "JavaScript"
};

for(let i in student) {
    console.log(i + ":" + student[i]);
    
}

// 

let students = ["Anu", "Sai", "Vidya", "Lakshmi"];

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
    
}

// 

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("sum of 1 to 10: ", sum);

// sum of even number

let add = 0;
for(let i = 1; i <=10; i++){
    if(i % 2 === 0){
        add += i
    }
}
console.log(add);

// 

let arr = [2, -1, 0, 5, -3]

let positive = 0,
negative = 0,
zero = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        positive++;
    } else if(arr[i] < 0){
        negative++
    }else {
        zero++;
    }
}

console.log("Positive", positive);
console.log("Negative", negative);
console.log("Zero", zero);

// 

let n = 5;

for (let i = 1; i <= 10; i++) {
    console.log(n + " X " + i + " = " + (n * i));
    
};

// 

let Num = 5;
let factorial = 1;

for(let i = 1; i <= Num; i++) {

    factorial = factorial * i;
}

console.log("Factorial of 5: ", factorial);

// 

let str = "JavaScript";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
}

console.log(reverse);

// 

let Str = "JavaScript is a programming language";
let count = 0;

for (let i = 0; i < Str.length; i++) {
    let char = Str[i].toLowerCase();

    if(char === "a" ||
        char === "e" ||
        char === "i"  ||
        char === "o"  ||
        char === "u"
    ) {
        count++;
    }
}

console.log("Vowels count: ", count);

// 

for(let i = 1; i<=10; i++){
    if(i%3 === 0 && i %5 === 0){
        console.log("FizzBuzz");
        
    }else if(i % 3 === 0){
        console.log("Fizz");
        
    } else if(i % 5 === 0){
        console.log("Buzz");
        
    } else {
        console.log(i);
        
    }
}

// 

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += " * ";
    }

    console.log(stars);
    
};

// check prime num or not

let N = 17;
let isPrime = true;

if (N <= 1){
    isPrime =false;
} else {

    for (let i = 2; i < N; i++) {
        if (N % 1 === 0) {

            isPrime = false;
        }
    }
}

if (isPrime) {
    console.log(N + " is a Prime Number");
    
} else {
    console.log(N + " is not a Prime Number");
    
};

// Palindrome

let value = 121;
let temp = number;
let rev = 0;

while (temp > 0) {

    let digit = temp % 10;
    rev = rev * 10 + digit;

    temp = Math.floor(temp/ 10);
}

if (value === rev) {
    console.log(value + " is a palindrome");
    
} else {
    console.log(value + " is not a Palindrome");
    
}

// 




