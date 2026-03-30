// summ of all elements in array

let sumArr = [10, 20, 30, 40];
let sum = 0;

for(let i = 0; i < sumArr.length; i++){
    sum += sumArr[i]
}

console.log(sumArr);
console.log("sum:", sum);

// find max number 

let maxArr = [5, 34,56,2,33, 79];
let max = maxArr[0];

for(let i = 1; i < maxArr.length; i++){
    if(maxArr[i] > max){
        max = maxArr[i]
    }
}
console.log(maxArr);
console.log("Max:", max);

// Reverse an array

let revArr = [1,2,3,5,46]
let reverse = [];

for(let i =revArr.length-1; i >= 0 ; i--){
    reverse.push(revArr[i])
}
console.log(revArr);
console.log("Reverse Array:", reverse);

// Count even numbers

let countArr = [1,2,3,4,5,6,7,8,9];
let count = 0;
 
for(let i = 0; i < countArr.length; i++ ){
    if(countArr[i] % 2 == 0){
        count++
    }
}
console.log(countArr);
console.log("Even Count:", count);

// 

let array = [10,20,30,40,50,60,70]
for (let i = 0 ; i < array.length ; i++ ){
    console.log(array[i]);
};
console.log("array length is:",array.length);
console.log(array.pop(),array);
console.log(array.push(80),array);


// 

let MulArr = [2,4,6,8];
let double = [];

for(let i = 0; i < MulArr.length; i++){
    double.push(MulArr[i] * 2)
}
console.log(MulArr);
console.log("Double:", double);

// filter numbers greater than 10

let greaterArr = [5, 15, 20, 25, 30]
let result = [];

for(let i = 0; i < greaterArr.length; i++){
    if(greaterArr[i] > 10){
        result.push(greaterArr[i])
    }
}
console.log(greaterArr);

console.log("Greater than 10 : ", result );

// remove duplicate numbers

let duplicateArr = [1,2,2,3,4,4,3,4,5,5,7,2,8,9,0]
let d = [];

for(let i = 0; i < duplicateArr.length; i++){
    if(!d.includes(duplicateArr[i])) {
        d.push(duplicateArr[i])
    }
}

console.log(duplicateArr);
console.log(d);


// 

let num1 = [2,3,1,4,5,6,7,4,9];
console.log(num1);


for(let i = 0; i < num1.length; i++){

    for(let j = 0; j < num1.length-1; j++){

        if(num1[j] > num1[j+1]){

            let result = num1[j];
            num1[j] = num1[j+1];
            num1[j+1] = result;
        }
    }
}
console.log("Ascending order:", num1);

// 


