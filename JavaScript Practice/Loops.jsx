// loops

// for loop

// 

// console.log("print number from 1 to 10");

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// print number from 10 to 1

for(let i = 10; i >= 1; i-- ){
    console.log(i);
}

//even numbers from 1 to 20

for(let i =0; i <= 20; i++){
    if(i % 2 == 0 ){
        console.log(i,"is a even number");
    }
}

// odd number from 1 to 20

for(let i = 0; i <= 20 ; i++){
    if(i % 2 !== 0){
        console.log(i,"is a odd number");
    }
}

// tables

let mul = 12;

for(let i = 1; i<=10; i++){
    console.log(mul + "X" + i + "=" + (mul*i));
}

// % by 5

let count = 0;
for(i = 1; i <=50 ; i++ ){
    if(i % 5 == 0){
        console.log(i,"is a % 5");
       
    }
}





// square

for(i=0; i<= 5; i++){
    console.log(i*i,"square");
    
}

// 

for(i =1; i <= 100; i++){
    if(i % 10 == 0){
        console.log(i);
        
    }
}

// factorial of 10

let num = 10;
let factorial = 1;

for(let i = 1; i <= num; i++){
       factorial = factorial * i;
}
console.log(i, "is factorial number of 10");


// 
let sum = 1
for(let i =1; i <=100; i++){
    if(i % 2 == 0){
        sum = sum + i
    }
}
console.log(sum);

// 
let n = 17;
let isPrime = true;

for(let i = 2 ; i < n; i++){
    if(n % i == 0){
        isPrime = false;
    }
}
if(isPrime){
    console.log("Prime");
} else {
    console.log("Not a Prime");
    
}

// 

let a = 0;
let b = 1;

for(let i = 1; i <= 10; i++){
    console.log(a,"fibonacci series");
    let next = a + b;
    a = b
    b = next
}



// % by 3, 5

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
        
    }
}


// 

for(let i =1; i <=10; i++){
    if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzBuzz");
} else if( i % 3 == 0 ){
    console.log("Fizz");
} else if(i % 5 == 0){
    console.log("Buzz");
} else{
    console.log(i);
    
}
 }


// largest num in an array

let arr = [10,40,50,63]

let largest = arr[0];

for(let i = 0; i < arr.length; i ++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

console.log(largest);

// 

// while loop 

let number = 1;
while(number<=5){
    console.log(number);
    number++;
}

// 

let N = 10;
while(N >= 1){
    console.log(N);
    N--;
}

// 
let c = 1;
while(c <=20){
    if(c % 2 == 0){
        console.log(c,"even number");
        
    }
    c++
}


// 

// do while

let d = 1;

do{
    console.log(d);
    d++;
} while (d <= 5);


// 



let str = "madam" 

let reverse = "";

for(let i = str.length - 1; i >= 0; i--){
    reverse = reverse + str[i];
}

if(str == reverse){
    console.log("palindrome");
} else {
    console.log("Not a palindrome");
    
}
