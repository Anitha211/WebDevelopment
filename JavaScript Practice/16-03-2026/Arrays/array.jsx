// Arrays --> arrays are used to stored the collection of data.

let array = [1,2,3,4]
console.log(array);

// Push -- > add elements at end.

array.push("array is a collection of data")
console.log(array);

// pop -- >  remove last elements.
array.pop();
console.log(array);

// unshift -- > add elements at start.

array.unshift("Unshift")
console.log(array);

// shift -- > removes first element

array.shift("Shift");
console.log(array);

// splice() -- > we can add element at any location in the array(indexvalue, delcount, new)

array.splice(1,0,"splice")
console.log(array);

// concat -- > t combine two arrays

let a1 = ["A",100]
let a2 = [200, "B"]

console.log(a1.concat(a2));

// sort() ---> it is used to arrange the elements in an order(numerical & alphabetical)

let names = ["Anu","Chinnu", "Sai", "Sandya","Bunny","Dolly"];
console.log(names);

names.sort();
console.log(names);

// reduce() --> it reduces the array into a single value    

let Number = [5,10,10];

let sum = Number.reduce(function(total,n){
    return total + n;
});
console.log(sum);

// 

// flatting of an array--> it converts multi-level arrays into a one-level array

let farr = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log(farr);

console.log(farr.flat(1));

console.log(farr.flat(2));

console.log(farr.flat(Infinity));

// 
// 

let arr = [1,2,3,4];
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

// array length

console.log("Array Length",arr.length);

// sum of array

let numbers = [1,2,3,4]
let Sum = 0;

for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}

console.log(Sum);

// find index of element

let fruits = ["Apple", "Orange", "Mango"]

console.log(fruits.indexOf("Banana"));

// largest number

function findLargeNum(arr){
    let max = arr[0]

    for(let i =1; i < arr.length; i++){
        if(arr[i] > max){

        }
    }
    return max;
}
console.log(findLargeNum([10,76,90,890]))

// Counting even number in array

function countEven(Array){
    let count = 0;

    for(let i =0 ; i < Array.length; i++){
        if(arr[i] % 2 == 0 ){
            count++
        }
    }
    return count;
}
console.log(countEven([1,2,3,4,3,3,4,5,6,8,9,7,6]));

