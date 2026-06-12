// web Storage - is a browser feature that allows to store data in the users browser as key-value pairs.

// Types - localStorage, SessionStorage 

// Local Storage - data remains even after browser is closed.
//  - Stores data permanently until it is manually removed.

localStorage.setItem("username", "Viha"); //store data - setItem

let user = localStorage.getItem("username"); //Get Data - getItem
console.log(user);

localStorage.removeItem("username"); // Remove data - removeItem

localStorage.clear(); // to crear all the data

// Dark mode example

localStorage.setItem("theme", "Dark");

let theme = localStorage.getItem("theme");

console.log("Seleted Theme:", theme);

// Session Storage - Stores data only for the current browser tab/session.
//  - Stores data temporary and when the browser tab closed, the data is automatically deleted

sessionStorage.setItem("user", "John");

console.log(sessionStorage.getItem("user"));

// 

localStorage.setItem("cartCount", 5);

let count = localStorage.getItem("cartCount");
console.log("items in cart:", `${count}`);

// 

let User = {
    name: "Priya",
    age: 24
};

localStorage.setItem("User", JSON.stringify(User));

console.log(User);

// 

let fruits = ["Apple", "Mango", "Kiwi"];

console.log(fruits);

localStorage.setItem("fruits", JSON.stringify(fruits));

let storeFruits = JSON.parse(localStorage.getItem("fruits"));

console.log(storeFruits[0]);
console.log(storeFruits[2]);
console.log(storeFruits.length);

// login 

let input = document.getElementById("username");

let msg = document.getElementById("message");

let savedUser = localStorage.getItem("username");

if(savedUser) {
    msg.textContent = `Welcome Back ${savedUser}`;
}

document.getElementById("loginBtn").addEventListener("click", function() {
    localStorage.setItem("username", input.value);

    msg.textContent = `Welcome ${input.value}`
});

// Theme 

let themeText = document.getElementById("theme");

function dark(){
    localStorage.setItem("theme", "Dark");
    showtheme();
}

function light(){
    localStorage.setItem("theme", "light");
    showtheme();
}

function showtheme(){
    themeText.textContent = "Theme: " + 

    localStorage.getItem("theme")
}

showtheme();

// 

let Count = localStorage.getItem("count");

if (Count === null) {
    Count = 0;
}

document.getElementById("count").textContent = Count;

function increase() {
    Count++;

    localStorage.setItem("count", Count);

    document.getElementById("count").textContent = Count;

    console.log("Count: ",Count);
    
}

// 

function saveName() {
    let Name = document.getElementById("input").value;

    localStorage.setItem("Name", Name)
}

function loadName(){
    let save = localStorage.getItem("Name");

    document.getElementById("output").innerText = save;

    
}
loadName();

// 

function changeTheme() {

    let t = localStorage.getItem("THEME");

    if(t === "dark") {

        document.body.style.background = "White";

        localStorage.setItem("THEME", "light");
    } else {

        document.body.style.background = "black";

        localStorage.setItem("THEME", "dark")
        
    }

}

// 





















