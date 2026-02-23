// import {even, odd} from "../Modules/index.js";

// console.log(even(22));

// console.log(odd(66));

function even(num){
    return num % 2 == 0;
}

function odd(num){
    return num % 2 !== 0;
}

export{ even, odd};


let arr = [1,2,3,"a","b","modules"];
export{arr};

// 

export default function multiply(a,b){
    return a * b;
}

export function addition(a, b){
    return a + b;
}

// 

