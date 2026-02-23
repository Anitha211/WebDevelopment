//  Output Methods in JavaScript

console.log("Hello!");

document.write("Welcome to a WebPage")

alert("Login")

// let a = prompt("Enter Your Name")
// console.log(a);

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

// parseInt - convert a str into int

let data = prompt("Enter a value");
let m = parseInt(data)
console.log(typeof(m));

let age = prompt("Enter Age");
let d = parseInt(age);
console.log("Your age:",d);

// parseFloat - str into float 

console.log(parseFloat(10.5566))

let price = prompt("Enter Price");
let total = parseFloat(price) + 5;
console.log("Total Price:", total);

// 
let f = 52.783092654373;
console.log(f);

console.log(f.toFixed(1));

console.log(f.toFixed(3));

console.log(parseInt(f));

// 

let num = 12345;

console.log(num);

let t = num.toString();
console.log(t);

console.log(typeof(t));

// 
let user = {
    name : "Anu",
    age : 17
}

let v = JSON.stringify(user)
console.log(user);
console.log(v);

console.log(user.toString());


// Browser Object Model
// BOM is used to interact with the browser window

console.log(window);

console.log("Height:", window.innerHeight);
console.log("Width:",window.innerWidth);

console.log(navigator.userAgent);

console.log(screen.width);

window.alert("Hello");

// 

alert("Welcome to our website");

let login = confirm("Do you want to login?");

if (login){
    let name = prompt("Enter Your Name:");

    if(name){
        alert("Hello" + name + "Login successfully");
    } else {
        alert("Login cancelled")
    }
} 

// 

let adult = confirm("Are you 18 or above?");

if(adult){
    alert("Access granted");
} else {
    alert("Assess denied")
};

// 

let a1 = Number(prompt("Enter first number:"));

let a2 = Number(prompt("Enter second number:"));

alert("Sum is:", (a1+a2));


// 



































