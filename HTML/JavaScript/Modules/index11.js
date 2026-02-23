
import sum from "./index.js";

console.log(sum(2,2));

export default function greet(name){
    return "Hello" + " " +  name;
}

import {add,sub} from "./index.js"

console.log(add(50,50));

console.log(sub(3,9));


//  

export let name = "Sai";
export let age = 28;
export let city = "kadapa";


// 
import {div as divide} from "./index.js"

console.log(divide(20, 4));

// console.log(div(20,4));

import { appName } from "./index22.js"
console.log(appName);

// 
// export let student ={
//     Name : "Riya",
//     class : 6,
//     age : 11,
//     grade : "A"
// };

import { student } from "./index22.js";
 
console.log(student);
console.log(student.Name);
console.log(student.grade);