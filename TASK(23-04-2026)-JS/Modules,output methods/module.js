// 

export let name = "Anitha";
export let age = 22;

// 

import { getItemCount, getTotal } from "./index.js";

let cart = [
    {name: "Laptop",price: 50000},
    {name: "Mouse", price: 800}
];

console.log(getTotal(cart));
console.log(getItemCount(cart));

// 

export function add(a,b){
    return a + b;
};

export function sub(a,b){
    return a - b;
};

// 

import {login, saveUser} from "./index.js"

if (login("admin", "1234")) {
    saveUser({name: "Admin"});
    console.log("Login Success");
    
}

// 
