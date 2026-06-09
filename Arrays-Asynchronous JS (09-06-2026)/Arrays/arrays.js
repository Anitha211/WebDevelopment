// Arrays - arrays are used to stored the collection of data.

let array = [1,2,3,4]
console.log(array);

console.log(typeof(array));

console.log(array[1]);
console.log(array[0]);

console.log("Length of array: ",array.length);

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);   
};

let matrix = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
];

console.log(matrix);

console.log(matrix[1][2]);

// Push() -- > is used add an elements to the end of the array

let fruits = ["Apple", "Banana"];

console.log(fruits);

fruits.push("Mango");

console.log(fruits);

// pop() - removes the last element from an array

fruits.pop();

console.log(fruits);

// shift() - Removes the first element from an array

fruits.shift();
console.log(fruits);

// unshift() - add elements to the beginning of an array

fruits.unshift("Kiwi");

console.log(fruits);

// splice - we can add element at any location in the array(indexvalue, delcount, new)

let arr = [1,2,3,4]
console.log(arr);

arr.splice(1,0,"splice");
console.log(arr);

arr.splice(1,1,"Hello");
console.log(arr);

// 

// indexof -  is used to find a particular element in a array
// if the element is not present in the array then it returns -1

let a = [1,2,"2",3,4,5,6,7];

console.log(a);

console.log(a[6]);

console.log(a.indexOf(2));

console.log(a.indexOf(7));

//lastIndexOf() ---> it gives the last index where an element appears in the array

let colors = ["White","orange","red","red","red","White","blue",];

console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("red"));
console.log(colors.lastIndexOf("White"));
console.log(colors.lastIndexOf("pink"));

// map() - it is ued to create a new array by tranformaing each element

let nums = [1, 2, 3];

let doubled = nums.map( n => n * 2);

console.log(doubled);

// 

let names = ["john", "bunny"];

console.log(names);

let upper = names.map(name => name.toUpperCase());

console.log(upper);

// 

let price = [100, 230, 300];

let gstPrice = price.map(p => p + 18);

console.log(gstPrice);

// 

let employee = ["John", "Bob", "Jin"];

employee.push("priya");

let upperCase = employee.map(emp => 
    emp.toUpperCase()
);

let searchEmployee = employee.find(emp => emp === "Bob");

console.log(employee);

console.log(upperCase);

console.log(searchEmployee);

// filter() -  used to create a new array 

let Num = [1, 2, 3, 4, 5];

console.log(Num);

let even = Num.filter(n => n % 2 === 0);
console.log(even);

// 

let Array = [10, 20, 30, 40];

let filter = Array.filter(num => num > 20);

console.log(Array);
console.log(filter);

//

let scores = [22,4,5,60,36];

let pass = scores.filter(m => m >= 25);

console.log(pass);

// reduce() - it reduces the array into a single value  

let numbers = [10, 20, 30];

let sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum);

// 

let largest = numbers.reduce((max, num) => num > max ? num : max);

console.log(largest);

// includes() = checks values exists (returns true , false)

let Fruits = ["Apple", "Orange"]
console.log(Fruits.includes("kiwi"));
console.log(Fruits.includes("Apple"));

// 

function checknumber(num){
    let n = [10,11,12,34,55];
    return n.includes(num);
}
console.log(checknumber(55));

console.log(checknumber("a"));

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

// concat - used to combine multiple arrays into a single array

let a1 = ["A","B"];
let a2 = ["C","D"];
let a3 = ["E","F"];

console.log(a1.concat(a2));
console.log(a2.concat(a3));
console.log(a1.concat(a2,a3));

// flat() - it converts multi-level arrays into a one-level array

let farr = [[1,[2,[3,4,5],[6],[7,8,9],[10,11]]]];

console.log("Flatting of array: ",farr);

console.log(farr.flat(1));

console.log(farr.flat(2));

console.log(farr.flat(Infinity));


// sort() - it is used to arrange the elements in an order

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

// sum of array

let Numbers = [10, 20, 30, 40]

let Add = 0;

for(let i = 0; i < Numbers.length; i++) {
    Add += Numbers[i]
}

console.log(Add);

// largest number

let n = [15, 30, 89, 998, 546, 1001]

let large = n[0];

for(let i = 0; i < n.length; i++) {

    if(n[i] > large) {

        large = n[i]
    }
}

console.log(large);

// smallest number

let smallest = n[0];

for(let i = 1; i < n.length; i++) {

    if(n[i] < smallest) {

        smallest = n[i];
    }
}

console.log(smallest);


// finding even numbers

let digits = [2, 3, 4, 77, 14, 35, 100];

for(let i = 0; i < digits.length; i++ ) {

    if(digits[i] % 2 === 0) {

        console.log(digits[i] + " is even number");
        
    }
}

// marks average

let marks = [80, 90, 70, 60];

let total = marks.reduce((sum, mark) => 
    sum + mark , 0
);

let average = total / marks.length

console.log("Average marks:" , average);

// counting even numbers in an array

let evenNum = [10, 15, 20, 25, 30, 35];
let c = 0;

for(let i = 0; i < evenNum.length; i++) {

    if(evenNum[i] % 2 === 0) {
        c++;
    }
}

console.log(c);

// removeing duplicate values

let N = [1,2,2,2,3,2,1,1,4,8,6,6,9,0,0,0];

console.log(N);


let unique = [...new Set(N)];

console.log(unique);

// 








