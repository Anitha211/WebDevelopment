// Array --> it is a collection of data and arrays are stored in []
let arr = [1,2,3,4]
console.log(arr);

// Push -- > is used add an elements to the end of the array
arr.push("array is a collection of data")
console.log(arr);

// Pop ---> it removes elements from end of the array
arr.pop()
console.log(arr);

// unshift ---> is used to add the element in the starting of the array 
arr.unshift("array is a collection of data");
console.log(arr);

//splice ----> we can add element at any location in the array(indexvalue, delcount, new)
arr.splice(1,0,"splice");
console.log(arr);

arr.splice(1,1,"Hello");
console.log(arr);

arr.splice(1,1); 
console.log(arr);

// shift()---> it is used to remove starting elements of the array
arr.shift()
console.log(arr);

// 
var fruits = ["apple","banana","Mango","orange"]
console.log(fruits);

fruits.splice(0,0,"grapes");
console.log(fruits);

fruits.splice(fruits.length,0,"Watermelon");
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.splice(4,4);
console.log(fruits);

console.log(fruits.length);

console.log(fruits[1]);

console.log(fruits[0]);

console.log(fruits[2]);

console.log(fruits[3]);

//

function getColors() {
    return ["white","black","red"]
}
let colors = getColors();
console.log(colors);

colors.push("yellow");
console.log(colors);

colors.pop();
console.log(colors);

colors.shift();
console.log(colors);

// 
let array = [10,20,30,40,50,60,70]
for (let i = 0 ; i < array.length ; i++ ){
    console.log(array[i]);
};
console.log("array length is:",array.length);
console.log(array.pop(),array);
console.log(array.push(80),array);

// 
let a = [1,"2",3,"4",[11,22]]
let i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
};
console.log(a.length);
a.splice(4,0,"Hello!")
console.log(a);

// 
let letters = ["a","b","c"];
for(let index of letters){
    console.log(letters);
}
console.log(letters.length);
console.log(letters.splice(letters.length,0,[34,66]),letters);


// replacing negative values as 0

let A = [5,-1,34,-20,65,68];

for(let i = 0; i < A.length; i++){
    if(A[i] < 0){
        A.splice(i, 0, 0);
    }
}
console.log(A);
    



