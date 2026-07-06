// Loops- used to execute a block of code repeatedly until the condition becomes false.

// for loop : it repeat a block of code in a specific number of times

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 

for(let i = 5; i >= 1; i--){
    console.log(i);
}

// sum of 1 t0 5 numbers;

let sum = 0;
for(let i = 1; i <= 5 ; i++){
    sum += i;
}
console.log("sum of 1 t0 5 numbers",sum);

// 

let mul = 5;

for(let i = 1; i<=10; i++){
    console.log(mul + "X" + i + "=" + (mul*i));
}

// 

let fruits = ["Apple", "Banana", "Mango"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);   
};

// mul of 5

for(let i = 5; i <= 50; i += 5){
    console.log(i);
};

// factorial of 5

let fact = 1;

for(let i = 1; i <= 5; i++){
    fact *= i;
};
console.log("factorial of 5: ",fact);

// largest number

let num = [12, 33, 54, 76, 2, 19];

console.log(num);

let largest = num[0];

for(let i = 1; i < num.length; i++){
    if(num[i] > largest) {
        largest = num[i];
    }
}

console.log(largest);

// smallest num

let smallest = num[0];

for (let i = 1; i < num.length; i++){
    if(num[i] < smallest) {
        smallest = num[i];
    }
}

console.log(smallest);

// 

for(let i =1; i <=4; i++) {
    console.log("****");
};

// vowels from str

let str = "JavaScript";

for(let i = 0; i < str.length; i++) {
    if("aeiouAEIOU". includes(str[i])){
        console.log(str[i]);
        
    }
}

// 

for(let i = 1; i <= 5; i++) {
    let stars = "";

    for(let j = 1; j <= i; j++) {
        stars += "*"
    }

    console.log(stars);
    
}

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
};

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

// while loop - it repeatedly executes a block of code as long as a specific condition is true

let q = 1;

while (q <= 5) {
    console.log(q);
    q++
}

// 1 to 10 even num

let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

// 

let n = [10, 15, 20, 25, 30];
let a = 0;
let count = 0;

while(a < n.length) {
    if(n[a] % 2 === 0){
        count++;
    }
    a++;
}

console.log(count);

// do while loop - it executes block of code at least once before checking the condition.

let k = 10;
do {
    console.log(k);
    k++;
} while (k <= 20);

// for of loop - used to loop over the values of iterable objectts like arrays, strings,map,...

let word = "loop";
for(let char of word){
    console.log(char);
    
}

// 

let fruit = ["Apple", "Banana", "Mango"];

for(let item of fruit) {
    console.log(item);
    
}

// 

let items = new Map([
    ["apple",100],
    ["banana",50],
    ["mango",200]
]);
for(let[key,value] of items){
    console.log(key,":",value);
}

// for in loop - is used to iterate over the each keys in an object

for(let index in fruits){
    console.log(fruits[index]);
    
}

//

let user = {
    name : "Aria",
    age : 24,
    city : "India"
};
for(let key in user){
    console.log(user[key]);
    
}

// 

let person = {
    name: "John",
    age:25,
    city:"New York"
};

for(let key in person) {
    console.log(key, ":", person[key]);
    
}

// 

let array = ["A", "B", "C"]

for(let value of array) {
    console.log(value);
    
}

for(let i in array) {
    console.log(i,array[i]);
    
}













