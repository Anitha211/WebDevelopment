// Event Bubbling - here the events moves from child - parent

let Parent = document.getElementById("Parent");

Parent.addEventListener("click", function () {
    console.log("Parent Clicked");
})

let Child = document.getElementById("child");

Child.addEventListener("click", function () {
    console.log("Button Clicked");

});

// 

let result = document.getElementById("result");

let G = document.getElementById("grandparent");
G.addEventListener("click", function () {
    console.log("Grand Parent");
    result.innerHTML += "GRAND PARENT <br>"
});

let P = document.getElementById("parent");
P.addEventListener("click", function () {
    console.log("parent");
    result.innerHTML += " <br> PARENT "
});

let C = document.getElementById("Child");
C.addEventListener("click", function () {
    console.log("child");
    result.innerText += "CHILD"
});

// 

let cart = document.getElementById("cart");

cart.addEventListener("dblclick", function () {
    console.log("Cart Section Clicked");
});

let button = document.getElementById("buyBtn");

button.addEventListener("dblclick", function () {
    console.log("Product button clicked")
});


// Event Capturing - events moves from parent - child

let parent = document.getElementById("P");

parent.addEventListener("click", function () {
    console.log("Parent Clicked");
}, true);

let child = document.getElementById("C");

child.addEventListener("click", function () {
    console.log("Child Clicked");
}, true)

// 

let navbar = document.getElementById("navbar");

navbar.addEventListener("click", function () {
    console.log("Navbar Clicked");
}, true);

let Btn = document.getElementById("menuBtn");

Btn.addEventListener("click", function () {
    console.log("Menu button clicked");
})


// Event Delegation -  

let taskList = document.getElementById("taskList");

taskList.addEventListener("click", function (event) {
    console.log(event.target.innerText);

});

// 

let task = document.getElementById("task");

task.addEventListener("click", function (e) {
    console.log(e.target.innerText);
});

let addTask = document.getElementById("addBtn")

addTask.addEventListener("click", function () {
    let li = document.createElement("li");

    li.innerText = "New Task";

    task.appendChild(li);

});

// 

let menu = document.getElementById("menu");

menu.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);

});

// 

let table = document.getElementById("students");

table.addEventListener("mouseover", function (event) {
    console.log(event.target.innerText);

});

// 

let Buttons = document.getElementById("btns");

Buttons.addEventListener("click", function (e) {
    console.log(e.target.innerText + "Button Clicked");

});

// 

let explorer = document.getElementById("explorer");

explorer.addEventListener("click", function (e) {

    let item = document.querySelector("item");

    item.forEach(function (item) {
        item.classList.remove("active");
    });

    e.target.classList.add("active");

    console.log(e.target.innerText);

});


// Normal event -> means attaching event listeners directly to each 
// DOM element instead of using parent handler.

let BTN = document.getElementById("BTN");

BTN.addEventListener("click", function () {
    console.log("Button Clicked");

});

// 

let Btn1 = document.getElementById("Btn1");

let a1 = 0;

Btn1.addEventListener("click", function () {

    a1 += 1;
    console.log("value of a1:", a1);
    console.log("Button Clicked");

    document.getElementById("Output").textContent = "Value of a1: " + a1;

});

// 

let nameInput = document.getElementById("name");

nameInput.addEventListener("input", function () {

    console.log(nameInput.value);

});

// 

let city = document.getElementById("city");

city.addEventListener("change", function () {

    console.log(city.value);

});

// 

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    console.log("Form Submitted");

});

// 

let Login = document.getElementById("loginForm");

let message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let username = document.getElementById("Username").value;

    message.innerText = "Welcome " + username;

    console.log("Welcome " + username);

});

// 
// Event Throtting - it makes a function run only once in a fixed time interval


let time = document.getElementById("Btn");
let Timer = 0;
time.addEventListener("click", function () {
    clearTimeout();
    Timer = setTimeout(function () {
        console.log("Button Clicked Once");

    }, 3000);

});

// 

let typing = false;

let search = document.getElementById("search");

search.addEventListener("input", function() {

    if(!typing) {

        document.getElementById("output")
        .innerText = "Searching: " + search.value;

        typing = true;

        setTimeout(function() {
            typing = false;
        },1000)
    }
});

// 

let move = document.getElementById("mouse");

let allowMove = true;

move.addEventListener("mousemove", function () {
    if (allowMove) {
        console.log("Mouse Moved");
        allowMove = false;

        setTimeout(function () {
            allowMove = true;
        }, 2000);
    };
});

// Event Debouncing - it delays the function execution until the event stops for a specified time.

let timer;

let submit =  document.getElementById("submitBtn");

submit.addEventListener("click", function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        document.getElementById("output").innerText = "Submitted Successfully";
    }, 1000)
});

// 

let input = document.getElementById("input1");

let outPut = document.getElementById("out");

let t;

input.addEventListener("keyup", function () {
    clearTimeout();

    t = setTimeout(function () {
        console.log("User Stopped typing");
        outPut.textContent = "Final Input: " + input.value;

    }, 3000)
});

// 







