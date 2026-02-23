// modules -->  is used to splits the code into seperate files and reuse them wherever we needed.

// 2 types of modules --- export , import
    //   export -- default export, named export


// default export  --> it cannot export multiple defaults from one file.

export default function sum(a,b){
    return a + b ;
}
console.log(sum(50,100));

// 

import g from "./index11.js";

console.log(g("Anitha"));

// 

import num from "./index22.js"

console.log(num(5));

// 
// named export --> multiple values
    
export function add(a,b){
    return a + b;
};

export function sub(a,b){
    return a - b;
};

// 

import {name, age} from "./index11.js"

console.log(name, age);

import {city} from './index11.js'
console.log(city);



// 

export function div(a,b){
    return a/b;
}

// 

// 
import {even, odd, arr} from "../Module2/indexm.js";

console.log(even(22));

console.log(odd(66));

console.log(arr);


// both default & named export

import multiply, {addition} from "../Module2/indexm.js"

console.log("default:", multiply(9, 9));

console.log("named:", addition(36, 36));

// class

import {Emp} from "./index22.js"

let E = new Emp ("Bob", 3, 250);
console.log(E);

// 
import { sumArray } from "./index22.js";

console.log(sumArray([10,20,30]));

// 

// import {mulTable} from "./index22.js"

// console.log(mulTable(10));

