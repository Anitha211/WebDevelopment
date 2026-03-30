// Loops --> Loops are used to repeat a block of code multiple times.

// Types     --> for, while, do-while

// For loop -> it repeats a block of code in a specific number of times

// Print numbers from 1 to 10

for(let i=0; i <= 10; i++){
    console.log(i);
}

// print event numbers

for(let i = 0; i <=20; i++){
    if(i % 2 == 0){
        console.log(i,"is even number");
    }
}

// print sum of numbers 

let sum = 0;

for(let i = 1 ; i<=5; i++){
    sum += i;
}
console.log("sum", sum);

// multiplication table

let num = 5;

for(let i = 1; i <= 10; i++){
    console.log(num + "X" + i + "=" + (num*i));
}

// factorial 

let n = 5;
let factorial = 1;

for(let i = 1; i <= n; i++){
    factorial *= i;
}
console.log("factorial of 5 = ", factorial);

// while loop ---> it repeatedly executes a block of code as long as a specific condition is true

console.log("-----------While loop--------------");

// print numbers 1 to 5

let i = 1;

while (i<=5) {
    console.log(i);
    i++;
}

// print number reverse 11 t0 15

let j = 15;

while(j >= 11){
    console.log(j);
    j--; 
}

// print odd numbers

let a = 1;

while(a <= 10){
    if(a % 2 !== 0){
        console.log(a ," is odd number");
    }
    a++;
}

// print hello 3times

let b = 1;
while(b <= 3){
    console.log("Hello");
    b++;
}

// square of numbers 

let  s = 1;

while(s <= 5){
    console.log("square of"  +  s  +  "="  +  (s*s));
    s++;
}

// do-while --> it executes block of code at least once before checking the condition

// print number from 1 to 3

let d = 1;

do{
    console.log(d);
    d++
    
} while (d<=3);


// check even and odd numbers

let c = 1;
do {
    if (c % 2 == 0){
        console.log(c , "is even");
    } else {
        console.log(c, "is odd");
    }
    c++;
    } while (c <= 15);


// for-of --> used to loop over values in array 

let arr = [10, 20, 30 ,40];

for(let value of arr){
    console.log(value);
};

// 
let colors = ["blue","white","orange","green"];
for(let color of colors){
    console.log(color);
}

// for-in --> usd to loop over the Objects

let obj = {
    a: 1, b:2, c:3
};

for(let key in obj){
    console.log(key, obj[key]);
}

//

let user = {
    name : "Aria",
    age : 24,
    city : "Kadapa"
};
for(let key in user){
    console.log(user[key]);
}


