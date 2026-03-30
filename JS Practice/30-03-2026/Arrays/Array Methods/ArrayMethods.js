// Arrays --> it is a collection of data and arrays are stored in []
//             it is a list of values stored in one variable
//              it can store any type of data - string, numbers, objects
//              in array exach value has a index value 


let arr = [1,2,3,4];
console.log(arr);

// 

let color = ["Red","Blue", "Black"];
console.log(color);

console.log(color[0]);
console.log(color[2]);

// 

let num = [10, 20, 30, 40, 50];

for(let i = 0; i < num.length; i++ ){
    console.log(num[i]);
}

// 
// Array Methods - 

// push() -> is used add an elements to the end of the array
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);

fruits.push("Banana");
console.log(fruits);

// 
let a = [10,20]
console.log(a);

let length = a.push(30);
console.log(length);

// 
let r = []

for(let i = 0; i <= 5; i++){
    r.push(i)
}

console.log(r);

// object to empty array

let users = [];
console.log(users);


users.push({name: "Anu", city: "Kadapa"});
users.push({name: "Gayatri" , city:"Hyderabad"})

console.log(users);

// 

let nums = [1,2,3,4,5];
let result = [];

for(let num of nums){
    if(num > 3){
        result.push(num)
    }
}
console.log(result);

// Reverse array

let array = [1,2,3,4,"Hello"]
let rev = [];

for(let i = array.length - 1; i >= 0; i--){
    rev.push(array[i]);
}
console.log(rev);

// pop() -> used to revome last element from array

let l = [1,2,3,4,5,6,100,200]
console.log(l);

l.pop();
console.log(l);

while (l.length > 0){
    console.log(l.pop());
}
console.log(l);


//unshift() -> used to add element at start 

let b = [2,3]
console.log(b);

b.unshift(1);
console.log(b);

//

let rel = [];

for(let i = 0 ; i <= 3; i++){
    rel.unshift(i)
}
console.log(rel);

// shift() -> used to remove first element in array

let first = ["A","B","C","D","E"];
console.log(first);

first.shift()
console.log(first);

let Remove = first.shift()
console.log(first);
console.log(Remove);

// map()  -> it is used to create a new array
//           it changes every element in array 

let Arr = [11,22,33,44,66];
console.log(Arr);

let R = Arr.map(num => num * 2);
console.log(R);

// 

let veg = ["onion", "carrot", "potato", "tomato"];

let Upper = veg.map(function(veg){
    return veg.toUpperCase();
});
console.log(Upper);

// 

let names = ["Anitha", "Kumudini"];

let upper = names.map(names => names.toUpperCase());

console.log(names);
console.log(upper);

// 

let index = ["a", "b", "c"];

let indexResult = index.map((val,index) => index + "-" + val)

console.log(index);
console.log(indexResult);

// filter() -> to filter the element

let Array = [10, 20, 30, 40];

let filter = Array.filter(num => num > 20);

console.log(Array);
console.log(filter);

// 
let scores = [22,4,5,60,36];

let pass = scores.filter(m => m >= 25);

console.log(pass);

// 
let Nums = [10,15,20,25,30];

let evens = Nums.filter(function(numbers){
    return numbers % 2 == 0;
});
console.log("Even Nums:", evens);


// reduce() --> it reduces the array into a single value  

let ARR = [1,2,3,4];
let add = ARR.reduce((total,num) => total + num , 0);

console.log(add);

let multiple = ARR.reduce((total,num) =>  total * num);
console.log(multiple);

// find max num

let Arr1 = [10, 2,40,90,789]

let max = Arr1.reduce((a,b) => (a > b ? a : b))

console.log(Arr1);

console.log("Max:", max);

// includes() => checks values exists (returns true , false)

let i = ["Apple", "Orange"]
console.log(i.includes("kiwi"));
console.log(i.includes("Apple"));

// 

function checknumber(num){
    let n = [10,11,12,34,55];
    return n.includes(num);
}
console.log(checknumber(55));

console.log(checknumber("a"));


// indexOf() -> is used to find a particular element in a array
//               if the element is not present in the array then it returns -1

let Index = ["abc", "bcd", "cde"]

console.log(Index.indexOf("bcd"));
console.log(Index.indexOf("def"));

//
function findIndex(letters,value){

    return letters.indexOf(value);
}
let letters = ["a","b","c","d","e"];

console.log(letters);

console.log(findIndex(letters,"b"));
console.log(findIndex(letters,"f"));

// concat() -> combine two arrays

let c1 = ["a"]
let c2 = ["b"]

let concat = c1.concat(c2);
console.log(concat);

// 

let a1 = [1,2];
let b1 = [3,[4,5]];
let c = a1.concat(b1);
console.log(c);

// reverse() -> used to reverse the array

let re = [1,2,3,4,5,5,5,"a","b"];

re.reverse();
console.log(re);

// // lastIndexOf() -> it gives the last index where an element appears in the array

let colors = ["White","orange","red","red","red","White","blue",];


console.log(colors.indexOf("red"));
console.log(colors.lastIndexOf("red"));
console.log(colors.lastIndexOf("White"));
console.log(colors.lastIndexOf("orange"));
console.log(colors.lastIndexOf("pink"));

// splice -> we can add element at any location in the array(indexvalue, delcount, new)

let ARRAY = [1,2,3,4,5]
ARRAY.splice(1,0,"splice");
console.log(ARRAY);

ARRAY.splice(1,1,"Hello");
console.log(ARRAY);

ARRAY.splice(1,1); 
console.log(ARRAY);

// 
let S = [1,2,3]

S.splice(1,1);

console.log(S);

// sort() -> to sort array (numbers and alphabatical order)

let digits = [1,2,4,5,7,9,2,3]

console.log(digits.sort());

let alph = ["A","g", "h", "b", "d" , "c", "z"]
console.log(alph.sort());

// find() -> it returns the first element that matchs a given condition

let f = [10,20,30];

let Result = f.find(num => num > 15)

console.log(Result);

// flat() -> it converts multi-level arrays into a one-level array

let flat = [[1,2],["a", "b"], [3,4]]
console.log(flat);


let newArr = flat.flat();

console.log(newArr);

// 

