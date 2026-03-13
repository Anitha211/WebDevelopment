function addArray(arr){
    let sum = 0;

    for(let i=0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let num = [10,20,30];
console.log(addArray(num));

// Reverse string:

let string = "frontend";
let rev = ""

for(let i = string.length-1; i >= 0; i--){
    rev = rev + string[i];
}

console.log(rev);

// 

let n = 12;

if(n % 2 === 0){
    console.log("Even");
}else{
    console.log("odd"); 
}

// 

function findLength(Sentence){
    let words = Sentence.split(" ");
    let longest = 0;

    for(let i = 0; i < words.length; i++){

        if(words[i].length > longest){
            longest = words[i].length;
        }
    }

    return longest;
}

console.log(findLength("Learning JavaScript is fun"));

// 

let count = 0;
let a = document.getElementById("a")

function countIncrease(){
    count++;
    a.innerHTML = "Button Clicked:   " + count +   "times"
    
}


// print number 1 t0 10; 
// by using for loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// sum of numbers

let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
} 
console.log(sum);


// multiplication table

let mul = 5;
for(let i = 1 ; i <= 10; i++){
    console.log(mul + "X" + i + "=" + (mul * i));
}

// largest number by using if else

let n1 = 5;
let n2 = 7;

if(n1 > n2){
   console.log(n1 + "is largest");
   
} else {
    console.log(n2 + "is largest");
    
}


// count even number from 1 to 10

for(let i = 1 ; i <= 20; i++){
    if(i % 2 == 0){
       console.log(i, "is even number");
    }
}

// 

for(let i = 10 ; i >= 1; i--){
    console.log(i);
}

// find negative value 
let b = -5;

if( b > 0){
    console.log("+ve number");
} else if ( b < 0) {
    console.log(b,"is a -ve number");
} else {
    console.log("zero");
}

// 

let Num = 5;
let fac = 1
for(let i = 1; i <= Num; i++){

    fac = fac * i
}
console.log(fac);

// 















