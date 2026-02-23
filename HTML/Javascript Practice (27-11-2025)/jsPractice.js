// finding greater number by using if else statement.
let a = 2;
let b = 3;
if(a>b){
    console.log(a);
}else{
    console.log(b)
}
// 
function findBigNumber(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(findBigNumber(50,40));
// currying function
function findGreater(a){
    return function(b){
        if(a>b){
            return a;
        }else{
            return b;
        }
    }

}
console.log(findGreater(4)(2));
//


let n = 15;
if (n % 3 == 0 && n % 5 == 0) {
    console.log(" is divisible ")
    
} else {
    console.log("Not divisible ")
        
}
//multiplication table
function checkDivisible(n){
    if (n % 3 == 0 && n % 5 == 0) {
    return "It is divisible by both 3 and 5 ";
    
} else {
    return "Not divisible by both";
        
}
}
console.log(checkDivisible(30));



// 
let table = 5;
for(let i =1; i<=10; i++){
    console.log(table*i);
}
//
let number = 6
for(let i = 1; i <= 10; i++){
    console.log(number + " x " + i + " = " + (number * i));
}
// 
function mulTable(num){
    for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}
}
mulTable(7);




// 
let str = "Find Vowels and Consonants";
let Vowels = "aeiouAEIOU";
let v = 0 , c =0;
for(let char of str){
    if((char >= "A" && char <= "z") || (char >= "a" && char <= "z")){
        if (Vowels.includes(char)){
             v++;
        }else{  c++;
        }

    }
}
console.log("vowels:",v);
console.log("Consonants:",c);
// 
function countVC(str){
    let Vowels = "aeiouAEIOU";
let v = 0 , c =0;
for(let char of str){
    if((char >= "A" && char <= "z") || (char >= "a" && char <= "z")){
        if (Vowels.includes(char)){
             v++;
        }else{  
            c++;
        }
    }
}
console.log("vowels:",v);
console.log("Consonants:",c);
}
countVC("JavaScript");





// Reverse string

let s = "Hello!";
let r = "";
for(let i = s.length-1; i >= 0; i--){
    r += s[i];
}
console.log(r);
// 
function reverseStr(str){
    let rev = "";
    for(let i = str.length-1; i >= 0; i--){
    rev += str[i];
}
return rev;
}
console.log(reverseStr("javascript"));



// 
let arr = [4,5,2,3];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);
// 
function arrSum(array) {
    let add = 0;

for (let i = 0; i < array.length; i++){
    add += array[i];
}
return add;
}
let numbers = [1,2,3,4,5];
console.log(arrSum(numbers));


//
let num = 6;
let factorial = 1;
for(let i = 1; i <= num; i++){
    factorial *= i;
}
console.log(factorial);
// 
function facNum(n){
    let fact = 1;
for(let i = 1; i <= n; i++){
    fact *= i;
    }
     return fact;
}
console.log(facNum(5));


// 
let array = [10,3,50,26]
let max = array[0];
let min = array[0];
    for(let i = 1; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("max:",max);
    console.log("min:",min);
// 
function findNum(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("max:",max);
    console.log("min:",min);
}
findNum([10,50,3,98,23]);



// 
let even = [1,2,3,4,5,6,9];
let result = [];
for(let n of even){
    if(n%2 !==0){
        result.push(n);
    }
}
console.log(result);
// 
function findEven(even){
    let result = [];
    for(let i = 0; i < even.length; i++){
        if(even[i]%2 !== 0){
            result.push(even[i]);
        }
    }
    return result;
}
let evens = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(findEven(evens));
// odd
let odd = [1,2,3,4,5,6,9];
let out = [];
for(let n of even){
    if(n%2 ==0){
        out.push(n);
    }
}
console.log(out);
// odd and even
function findEO(arr){
    let even = 0;
    let odd  = 0;
   for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 == 0){
         even++;
    }else{
         odd++
    }
}
   console.log("Even:",even);
   console.log("Odd:",odd);
   
}
findEO([1,2,3,4,5,6,7,8,9,10,11,12,14,16,17]); 


//
let _arr = [1,10,22,45,63,77];
let largest = -Infinity;
let second = -Infinity;
for(i=0; i <_arr.length; i++){
    if(_arr[i] > largest) {
        second = largest;
        largest = _arr[i];
    }else if (_arr[i] > second && _arr[i] !== largest){
        second = _arr[i];
    }
}
console.log(second);
console.log(largest);
// 
function secLarge(_arr){
    let largest = -Infinity;
let second = -Infinity;
for(i=0; i <_arr.length; i++){
    if(_arr[i] > largest) {
        second = largest;
        largest = _arr[i];
    }else if (_arr[i] > second && _arr[i] !== largest){
        second = _arr[i];
    }
}
return second;
}
console.log(secLarge([10,20,35,64,888,976]));

// 
let p = 5;
for(let i =0; i <= p; i++){
    let row = "";
    for(let j = 1; j <= i ; j++){
        row += j;
    }
    console.log(row);
}


// 
let nums = [10,20,30,44,50,54,60];
for(let nums of numbers){
    if (nums % 2 == 0){
        console.log(nums,"is even");
    }else{
        console.log(nums,"is odd");
        
    }
}
// 


var age = 19
if (age >= 18) {
    console.log("You are eligible to vote.");

} else {
    console.log("You are not eligible to vote.");
}
// 
function voteAge(age){
    if(age >= 18){
        return "You are eligible to vote.";
    }else{
        return "You are not eligible to vote.";
    }
}
let ages = 17;
console.log(voteAge(ages));


// 
let square = n => n * n;
console.log(square(66));
// 
let num1 = 5;
let double;
if(num >= 0){
    double = num1 * num1;
    console.log(double);
}



//
let color = ["Apple","orange","blue","pink","black"];
let Vowel = ["A","E","I","O","U"];
for(let i = 0; i < color.length; i++){
    let f = color[i][0].toUpperCase();
    if(Vowels.includes(f)){
        console.log(color[i]);
    }
}