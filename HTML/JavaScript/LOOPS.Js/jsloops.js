//  Loops ---> used to execute a block of code repeatedly until the condition becomes false.

// for loop
// while loop
// do while
// for of 
// for in
// for each

// for loop --> it repeat a block of code in a specific number of times

for(let i=0;i<=5;i++){
    console.log(i);
}

// 
for(let i=2;i <= 20;i+=2){
    console.log(i);
    
}
let fruits = ["Apple","Mango","Orange"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


//

var num = [0,-9,6,-4,-2,1];
for(var i=0; i < num.length; i++){
    if(num[i] > 0){
        console.log(num[i] + " is positive");
    } else if (num[i] < 0) {
        console.log(num[i] + " is negative");
    }else {
        console.log(num[i] + " is zero");
    }
    }

// 
function count(prices) {
    let count = 0;
    for(let i=0; i < prices.length; i++ )
{
 if(prices[i]>500){
    count++;
 }
}
     return count;
 }
 let result = count([1500,700,300,5000,600]);
 console.log(result);


//while loop ---> it repeatedly executes a block of code as long as a specific condition is true

var i = 1;
while(i<=5){
    console.log(i);
    i++ ;
}



let a = 1;
while(a<=30){
    if( a % 2 == 0){
        console.log("Even:", a);
    }
    a++;
}

//  students count:

let attendance = ["P","A","P","P","A","P"];
let y = 0;
let present = 0;
while (y<attendance.length) {
    if (attendance[y] == "P") {
        present++;
    }
    y++
}
console.log("Total present:",present);


//first number 
var number = [10,20,36,40,55,66];
var i =0;
while(i < number.length){
    if(number[i] > 60){
        console.log("First number > 50 is: ",number[i]);
    }
    i++
}

//
let correctpassword = "ABC";
let attempts = ["abc","abc123","ABC"];
let g = 0;
while (g<attempts.length) {
    if (attempts[g] == correctpassword) {
        console.log("Login Successfully");
        
    } else {
        console.log("Wrong Password:",attempts[g])
        
    }
    g++
}


// do while ---> it executes block of code at least once before checking the condition 

let k = 10;
do {
    console.log(k);
    k++;
} while (k <= 20);

// 

let c = 1;
do {
    if (c % 2 == 0){
        console.log(c , "is even");
    } else {
        console.log(c, "is odd");
    }
    c++;
    } while (c <= 15);


// for in ---> is used to iterate over the each keys in an object

let user = {
    name : "Aria",
    age : 24,
    city : "India"
};
for(let key in user){
    console.log(user[key]);
    
}

// 

// let color = ["red","green","pink"];

// for(let index in colors){
//     console.log(index,":", colors[index]);
    
// }

// 
let marks = {
    math:50,
    telugu:40,
    english:30,
    science:25
};
for(let subject in marks){
    if(marks[subject] >= 35 ){
        console.log(subject,":Passed");
    }else{
        console.log(subject,":Failed");
        
    }
    
}

// for of ---> is used to iterate a objects (array,strings,maps,sets..) and it gives direct access to the values , not a keys.

let arr = [1,2,3,4];
for(a of arr){
    console.log(a);
}

// 
let colors = ["blue","white","orange","green"];
for(let color of colors){
    console.log(color);
}

// 

let word = "Navayuva Bharat";
for(let char of word){
    console.log(char);
    
}

let n = new Set([10,40,50]);
for(let Numbers of n) {
    console.log(n);
}

// 

let fruit = new Map([
    ["apple",100],
    ["banana",50],
    ["mango",200]
]);
for(let[key,value] of fruit){
    console.log(key,":",value);
}
// 
let nums = [10,20,30,44,50,54,60];
for(let nums of number){
    if (nums % 2 == 0){
        console.log(nums,"is even");
    }else{
        console.log(nums,"is odd");
        
    }

}


 
        
    
    


 
 




