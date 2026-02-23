let a = 10;
let b = 20;
let greater = (a > b) ? a : b ;
console.log(greater);

let less = (a < b) ? a : b;
console.log(less);

// 
let marks = 85;
let grade = (marks >= 90)? "A" : (marks >= 75)? "B" : (marks >= 50) ? "c" : "Fail";
console.log(grade);
// 

for(i = 1; i <= 10 ; i++){
    let result = (i %2== 0) ? "Even" : "Odd";
    console.log(i," is " + result);
    
}
// 
let num = [1,2,3,7,8];
let square = num.map(function(n){
    return n * n;
})
console.log(square);

// 
let n = [1,3,2,6,9,8,5,7];
let even = n.filter(function(a){
    return a % 2 == 0;
})
console.log(even);

// 
let nums = [1,3,2,6,9,8,5,7];
let odd = nums.filter(function(a){
    return a % 2!== 0;
})
console.log(odd);

// 
function cal(a,b,c){
    return c(a,b);
};
function add(a,b){
    return a + b;
};
function sub(a,b){
    return a - b;
};
function mul(a,b){
    return a * b; 
};
console.log(cal(10,7,add));
console.log(cal(4,2,sub));
console.log(cal(10,7,mul));

//

function mergeArr(arr1,arr2){
    return arr1.concat(arr2);
}
console.log(mergeArr([1,2],[3,4,5]));

// 
let findnumbers = [2,4,6,36,5,10,15,20];
findnumbers.forEach(function(num){
    if (num % 2 == 0){
        console.log(num+ " is even")

    }
});

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