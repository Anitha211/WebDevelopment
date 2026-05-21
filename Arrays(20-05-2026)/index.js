// Arrays - arrays are used to stored the collection of data.

// 
let fruits = ["apple", "banana", "kiwi"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

// array constructor

let num = new Array(11, 22, 33);
console.log(num);

// changing array elements

let Color = ["Red", "Pink", "Blue"];

Color[1] = "Orange"

console.log(Color);

console.log("Array length: ",Color.length);


let array = [1,2,3,4]
console.log(array);

// Push - add elements at end.

array.push("array is a collection of data")
console.log(array);

// pop -  remove last elements.
array.pop();
console.log(array);

// unshift - add elements at start.

array.unshift("Unshift")
console.log(array);

// Shift - remove first element

array.shift();
console.log("Shift: ", array);

//splice ----> we can add element at any location in the array(indexvalue, delcount, new)
array.splice(1,0,"splice");
console.log(array);

// includes() - used to value is exit or not

let Items = ["pen", "books", "bags"];
console.log(Items);
console.log("includes: ", Items.includes("bags"));
console.log("includes: ", Items.includes("box"));

// looping through array

for (let i = 0; i < Items.length; i++) {
   
    console.log(Items[i]);
    
}

// forEach - 

Items.forEach(function(i) {
    console.log(i);
});

// map() - used to create new array

let n = [1,2,3,4,4,4];

console.log(n);
let d = n.map(function(num) {
    return num * 2
});

console.log(d);

// filter - used to filter the values
let Num = [1,2,3,4,5];

let even = Num.filter(function(n) {
    return n % 2 == 0;
});

console.log(even);

// indexof is used to find a particular element in a array
// if the element is not present in the array then it returns -1

let Arrays = [1,2,"2",3,4,5,6,7];

console.log(Arrays);

console.log(Arrays[6]);

console.log(Arrays.indexOf(2));

console.log(Arrays.indexOf(7));

console.log(Arrays.indexOf(0));

console.log(Arrays.indexOf("2"));

console.log(Arrays.indexOf(1));

// 

// lastIndexOf() ---> it gives the last index where an element appears in the array

let colors = ["White","orange","red","red","red","White","blue",];


console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("red"));
console.log(colors.lastIndexOf("White"));
console.log(colors.lastIndexOf("orange"));
console.log(colors.lastIndexOf("pink"));

// reverse() - used to reverse the array
 
let Fruit = ["Mango", "Apple", "Kiwi", "Orange"];

console.log(Fruit);

let rev = Fruit.reverse();

console.log("Reverse: ",rev);

// // reduce() --> it reduces the array into a single value    

let numberr = [5,10,10];

let sum1 = numberr.reduce(function(total,n){
    return total + n;
});
console.log(sum1);

let multiple = numberr.reduce(function(total,n){
    return total * n;
});
console.log(multiple);

// concat() - used to combine arrays

let a1 = ["A","B"];
let a2 = ["C","D"];
let a3 = ["E","F"];

console.log("Concat");

console.log(a1.concat(a2));
console.log(a2.concat(a3));
console.log(a1.concat(a2,a3));

// spread() --> it is used to expand elements in an array.
//rest() --> it collects remain values into a array
let Arr1 = [1,2,3];
let Arr2 = [4,5,6];

console.log(Arr1,Arr2);

let finalArr = [...Arr1,...Arr2];
console.log("spread",finalArr);

let Arr3 = [...finalArr,7,8,9,10]
console.log("Rest",Arr3);

// 

let cart = [];

console.log(cart);

cart.push("Phone");
cart.push("Laptop");
cart.push("Headphones");

console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

// 

let marks = [80, 90, 70, 60];

console.log(marks);

let total = 0;

for (let i = 0; i < marks.length; i++) {
     total = total + marks[i];
    
};

console.log(total);

// Student Score array

let score = [30, 45, 68, 29, 70, 80];
console.log(score);

let t = 0;

for(let i = 0; i < score.length; i++){
    t += score[i]
}

let average = t/score.length;

console.log("Total score : ", t);
console.log("Average : ", average);

// Employeee records

let employees = [
    {name: "Anitha", salary: 20000},
    {name: "Bob", salary: 25000},
    {name: "Veena", salary: 35000}
];

console.log(employees);

employees.forEach(function(emp) {
    console.log(emp.name + " - " + emp.salary);
});

//array sum

let arr = [10, 20, 30, 40];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum of array: ", sum);

// Find largest number in array

let Numbers = [10, 45, 78, 99, 980];

let largest = Numbers[0];

for(let i = 1; i < Numbers.length; i++){

    if(Numbers[i] > largest) {
        largest = Numbers[i]
    }
}
console.log(Numbers);

console.log("Largest Number : ", largest);

// Remove duplicate values 

let Values = [1, 2, 2, 3,3,8, 8,9 ,0, 0 ,4,4];

let unique = [...new Set(Values)];
console.log(Values);
console.log(unique);

// search item in array

let product = ["Phone", "Laptop", "Watch"];

console.log(product);

let search = "Laptop";

if(product.includes(search)) {
    console.log("Product Found");
    
} else {
    console.log("Product not Found");
}

// convert names to uppercase

let names = ["anu", "lucky", "rahul", "chotu"];

console.log(names);

let uppercase = names.map(function(n) {
     return n.toUpperCase(); 
});

console.log(uppercase);

// find pass and fail marks in an array

let result = [35, 40, 78, 56, 36];

let passed = result.filter(function(res) {
    return res >= 40;
});

console.log(result);

console.log("Passed marks: ", passed);

// finding large value using math.max(), math.min();

let num1 = [10, 20, 89, 76];

let large = Math.max(...num1);

console.log(large);

let small = Math.min(...num1);

console.log(small);


// sorting values in ascending 

let n1 = [40, 87, 1, 44, 20, 11, 66];
console.log(n1);


n1.sort(function(a, b) {
    return a - b;
});

console.log(n1);

// merging two arrays

let arr1 = [1,22,3];
let arr2 = [4,55,6];

let merged = arr1.concat(arr2);

console.log(merged);

// find odd values in array

let number = [1,3,4, 5,6,2,4,7,11,14,18,21,3];

let odd = number.filter(function(num) {
    return num % 2 !== 0;
});

console.log(odd);

// 

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

// Attendance tracker

function countPresent(attend) {
    let count = 0;

    attend.forEach(function(status) {
        if(status === true) {
            count++;
        }
    });

    console.log("Present Students: ", count);
};

countPresent([true, true, true, false, true]);

// balance 

function calculateBalance(trans) {
    let balance = 0;

    trans.forEach(function(amount){
        
        balance += amount;
    });

    console.log("Final Balance:", balance);
    
}

calculateBalance([1000, -200, 5000]);

// 

function totalMarks(marks) {
    let total = 0;

    marks.forEach(function(mark) {
        total += mark;
    });
    console.log("Total: ", total);
}

totalMarks([50, 78, 87, 45]);

// Finding longest words

function longWordS(words) {

    let result = words.filter(function(word) {
        return word.length > 5;
    });

    console.log(result);
}

longWordS(["Array", "Functions", "Asynchronous", "Objects"]);

longWordS(["HTML", "CSS", "JavaScript", "React"]);

// double the numbers

function doubleNumbers(numbers) {

    let double = numbers.map(function(num) {
        return num * 2;
    });

    console.log(double);
    
}

doubleNumbers([2,3,4,5,6,7]);

// Array.form()

let val = [10, 20, 30];

let copiedNumbers = Array.from(val)
console.log(copiedNumbers);

// flatting of an array--> it converts multi-level arrays into a one-level array

let farr = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log(farr);

console.log(farr.flat(1));

console.log(farr.flat(2));

console.log(farr.flat(Infinity));

// 




















