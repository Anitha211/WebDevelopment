// question 9 - Multiplication Table
 
 function mulTable(num){
    for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}
}
mulTable(20);

// question 2 - count vowels

function countVowels(str){
    let Vowels = "aeiouAEIOU";
let v = 0 ;
for(let i of str){
    if((i >= "A" && i <= "z") || (i >= "a" && i <= "z")){
        if (Vowels.includes(i)){
             v++;
        }
    }
}
console.log("vowels:",v);
}
countVowels("JavaScript");
countVowels("HELLO");

// question-14 
function facNum(n){
    let fact = 1;
for(let i = 1; i <= n; i++){
    fact *= i;
    }
     return fact;
}
console.log("Factorial:",facNum(5));

// 
 function add(a){
    return function(b){
       return a + b ;
       };
    }
var c = add(5)(10);
console.log(c);

// 
let farr = [1, [2, [3, 4]], 5];

console.log(farr.flat(Infinity));
// 
function findNum(arr){
    let max = arr[0];
    
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
        
    }
    console.log("max:",max);
} 
findNum([5,10,8]);

// 
function randomNumber(){
    return Math.random () * 10;
};
console.log(randomNumber());

// 

