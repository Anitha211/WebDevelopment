export default (num) => {
    return num * num;
}

// 
export let appName = "What'sApp";
// 

export class Emp {
    constructor(a,b,c) {

        this.a = a;
        this.b = b;
        this.c = c;
        
    }
}

// 
// import { student } from "./index11";
 
// console.log(student.Name);

export let student ={
    Name : "Riya",
    class : 6,
    age : 11,
    grade : "A"
}

// 

export function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

// 
// export function mulTable(num){
//     for(let i = 1; i <= 10; i++){
//     console.log(num + " x " + i + " = " + (num * i));
// }
// }

// import {mulTable} from "./index22.js"

// console.log(mulTable(10))

