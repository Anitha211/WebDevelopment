// Arrays - arrays are used to stored the collection of data.

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

// Array methods - 

// Push - add elements at end.

let array = [1,2,3,4]
console.log(array);

array.push("array is a collection of data")
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

// pop -  remove last elements.
array.pop();
console.log(array);

// includes - used to value is exit or not

let fruit = ["Apple", "Banana", "Mango"];

console.log(fruit.includes("Mango"));
console.log(fruit.includes("Grapes"));

// // //

let cart = ["Laptop", "Mouse"];

cart.push("Keyboard");

console.log(cart);

// 

let orders = ["Pizza", "Burger", "Juice"];

orders.pop();

console.log(orders);

// filter - used to filter the values

let Num = [1,2,3,4,5];

let even = Num.filter(function(n) {
    return n % 2 == 0;
});

// 

let attendance = [
    {name: "John", present: true},
    {name: "Bob", present: false},
    {name: "Alice", present: true}
];

let presentEmployees = attendance.filter(employee => 
    employee.present );

console.log(presentEmployees);

// map() - used to create new array

let n = [1,2,3,4,4,4];

console.log(n);
let d = n.map(function(num) {
    return num * 2
});

console.log(d);

// 

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

// reverse() -> used to reverse the array

let rev = [1,2,3,4,5,5,5,"a","b"];

rev.reverse();
console.log(rev);

// 

let revArr = [1,2,3,5,46]
let reverse = [];

for(let i =revArr.length-1; i >= 0 ; i--){
    reverse.push(revArr[i])
}
console.log(revArr);
console.log("Reverse Array:", reverse);

// // sort() - it is used to arrange the elements in an order

let Names = ["john", "Ravi", "siva", "Bunny"];

Names.sort();

console.log(Names);

// 

let int = [1,2,3,1,10,12,13,4];

console.log(int);

int.sort();
console.log(int);

// ascending Order
int.sort(function(a,b){
    return a - b;
});
console.log(int);

// descending Order
int.sort(function(a,b){
    return b - a;
});
console.log(int);

// flat() - it converts multi-level arrays into a one-level array

let farr = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log("Flatting of array: ",farr);

console.log(farr.flat(1));

console.log(farr.flat(2));

console.log(farr.flat(Infinity));

//

// marks average

let marks = [80, 90, 70, 60];

let total = marks.reduce((sum, mark) => 
    sum + mark , 0
);

let average = total / marks.length

console.log("Average marks:" , average);

// 

// finding even numbers

let digits = [2, 3, 4, 77, 14, 35, 100];

for(let i = 0; i < digits.length; i++ ) {

    if(digits[i] % 2 === 0) {

        console.log(digits[i] + " is even number");
        
    }
}

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
console.log(num1);

// 






















