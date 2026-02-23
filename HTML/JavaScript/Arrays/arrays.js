var fruits = ["apple","banana"]
console.log(fruits);

fruits.splice(0,0,"grapes");
console.log(fruits);

fruits.splice(fruits.length,0,"Watermelon");
console.log(fruits);

console.log(fruits.length);

fruits.splice(0,1);
console.log(fruits);

fruits.splice(2,3);
console.log(fruits);

console.log(fruits.length);

console.log(fruits[1]);


// indexof is used to find a particular element in a array
// if the element is not present in the array then it returns -1

let array = [1,2,"2",3,4,5,6,7];

console.log(array);

console.log(array[6]);

console.log(array.indexOf(2));

console.log(array.indexOf(7));

console.log(array.indexOf(0));

console.log(array.indexOf("2"));

console.log(array.indexOf(1));

// 
function findIndex(letters,value){

    return letters.indexOf(value);
}
let letters = ["a","b","c","d","e"];

console.log(letters);

console.log(findIndex(letters,"b"));
console.log(findIndex(letters,"f"));


// includes -->  used to check the whether the value exists inside an array 
//           --> returns True or False.

let num = ["1","2","3",4];

console.log(num);

console.log(num.includes("3"));
console.log(num.includes("4"));
console.log(num.includes(4));

console.log(num.includes("1",0));

console.log(num.includes(5));


// 
function checknumber(num){
    let n = [10,11,12,34,55];
    return n.includes(num);
}
console.log(checknumber(55));

console.log(checknumber("a"));


// concat --> it is used to combine the arrays

let x = [11,12,13];
let y = [14,15];

console.log(x);
console.log(y);

console.log(x.concat(y));
console.log(y.concat(x));

// 
let arr = [1,2];
let result = arr.concat(3,4);
console.log(result);


// 
let a = [1,2];
let b = [3,[4,5]];
let c = a.concat(b);
console.log(c);

// 
function mergeArr(arr1,arr2){
    return arr1.concat(arr2);
};
console.log(mergeArr(["A","B"],["30","40"]));

// lastIndexOf() ---> it gives the last index where an element appears in the array

let colors = ["White","orange","red","red","red","White","blue",];


console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("red"));
console.log(colors.lastIndexOf("White"));
console.log(colors.lastIndexOf("orange"));
console.log(colors.lastIndexOf("pink"));

// 

let numbers = [10, 20, 30, 20, 40, 20, 30];

console.log(numbers.lastIndexOf(20));

console.log(numbers.indexOf(20));

console.log(numbers.lastIndexOf(50));

// 
function findLastIndex(arr,value){
    return arr.lastIndexOf(value);
}

let n = [10,20,30,20,60,20];
console.log(findLastIndex(n,20));

// 

function lastValue(arr,value){

    let index = arr.lastIndexOf(value);

    if (index == -1) {
        return "Value not found";
    } else {
        return " Last Index value " + index ;
    }

}

let names = ["Riya", "Priya", "Riya", "viya", "Riya"];

console.log(lastValue(names,"Riya"));

console.log(lastValue(names,"riya"));


// spread() --> it is used to expand elements in an array.
//rest() --> it collects remain values into a array
let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1,arr2);

let finalArr = [...arr1,...arr2];
console.log(finalArr);

let arr3 = [...finalArr,7,8,9,10]
console.log(arr3);

//  
let p = [1,2,3,4,5];
let [u,v, ...rest] = p;

console.log(u);
console.log(v);
console.log(rest);

// 

function totalAdd(...numbers){
    let total = 0;
    for(let m of numbers){
        total += m;
    }
    return total;
}
console.log(totalAdd(90,70,80));
console.log(totalAdd());


//splice() 
let val = [11,22,33,44,55];
console.log(val);

val.splice(0,val.length);
console.log(val);

// making Array length to 0
let s = [2,3,4,5,6]
console.log(s);
console.log(s.length);

s.length = 0;
console.log(s.length);

// assign empty array

let letter = ["a","b","c"];
console.log(letter);

letter = [];
console.log(letter);

// sort --> it is used to arrange the elements in order


















