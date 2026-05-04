//modules -->  is used to splits the code into seperate files and reuse them wherever we needed.

// 2 types of modules --- export , import
// export -- default export, named export
// default export  --> it cannot export multiple defaults from one file.

import {name, age} from "./module.js"

console.log(name);
console.log("Age: ", age);

// 

export function getTotal(cart){
    return cart.reduce((sum, item) => sum + item.price, 0);
}

export function getItemCount(cart){
    return cart.length;
};

// 

import {add,sub} from "./module.js"

console.log(add(9,9));
console.log(sub(90,70));

//  

export function login(username, password) {
    if(username === "admin" && password === "1234"){
        return true;
    } else {
        return false;
    }
}

export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
};

// 


// Output Methods - 

console.log("Hello!");

// document.write("Welcome to a WebPage")

alert("Login")

let a = prompt("Enter Your Name")
console.log(a);

//innerHtml

let b = document.getElementById("text")
console.log(b);

// 
function show(){
   let c = document.getElementById("msg");
   c.innerText = "Good Afternoon"
}


// prompt

function getAge(){
    let p = prompt("Enter Your Age");
    document.getElementById("age").innerText = "Your age is:" + p;
}

// 

let Name = prompt("Enter your name: ");

document.getElementById("output").innerHTML = `<b> ${Name}</b>`

alert("Welcome " + Name)

console.log("User: ", Name);

// 

// BOM -Brower object Model = is used to interact with the browser window

console.log(window);

console.log("Height:", window.innerHeight);
console.log("Width:",window.innerWidth);

console.log(navigator.userAgent);

console.log(screen.width);

window.alert("Hello");

// window.close();

// 

let adult = confirm("Are you 18 or above?");

if(adult){
    alert("Access granted");
} else {
    alert("Assess denied")
};

// 

alert("Welcome!!!!11")

let result = confirm("Do you want to continue");
console.log("Confired: ", result);

// common methods

let f = 52.783092654373;
console.log(f);

console.log(f.toFixed(1));

console.log(f.toFixed(3));

console.log(parseInt(f));


