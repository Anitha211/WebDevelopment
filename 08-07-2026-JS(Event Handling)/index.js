// Event Handlings
// Event Bubbling - here the events moves from child - parent

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {

    console.log("Parent clicked");
});

child.addEventListener("click", function () {

    console.log("Button clicked");
});

// 

let g = document.getElementById("grandparent");

let p = document.getElementById("Parent");

let c = document.getElementById("Child");

g.addEventListener("click", function () {

    console.log("Grand Parent");
});

p.addEventListener("click", function () {

    console.log("Parent");
});

c.addEventListener("click", function () {

    console.log("Child");
})

// 

let card = document.getElementById("card");

let buy = document.getElementById("buy");

let result = document.getElementById("result");

buy.addEventListener("click", function () {

    console.log("Buy button clicked");

    result.innerHTML = "Buy Button Clicked<br>";
});

card.addEventListener("click", function () {

    console.log("Card Selected");

    result.innerHTML = "Card Selected<br>";
});

// 

let form = document.getElementById("loginform");

let btn = document.getElementById("loginBtn");

let output = document.getElementById("output");

form.addEventListener("click", function() {

    console.log("Form Clicked");
    output.innerHTML += "Form Clicked<br>"
});

btn.addEventListener("click", function() {

    console.log("Login Button Clicked");

    output.innerHTML = "";
    output.innerHTML += "Login Button Clicked<br>"
    
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

// Event Capturing -  event moves from parent to child

let P = document.getElementById("P");

let C = document.getElementById("C");

P.addEventListener("click", function() {
    console.log("Parent");
},true);

C.addEventListener("click", function() {
    console.log("Child");
    
},true);

// 

let Grandparent = document.getElementById("GRANDPARENT");

let Parent = document.getElementById("PARENT");

let Child = document.getElementById("CHILD");

let Result = document.getElementById("RESULT");

Grandparent.addEventListener("click", function() {
    console.log("Grand Parent");
    Result.innerHTML += "Grand Parent<br>";
}, true);

Parent.addEventListener("click", function() {
    console.log("Parent");
    Result.innerHTML += "Parent<br>"
},true);

Child.addEventListener("click", function() {
    console.log("Child");
    Result.innerHTML += "Child<br>"
}, true);

// 

let menu = document.getElementById("menu");

let home = document.getElementById("home");

let Output = document.getElementById("OUTPUT");

menu.addEventListener("click", function() {
    console.log("Menu Clicked");
    Output.innerHTML += "Menu Clicked<br>";
}, true);

home.addEventListener("click", function() {
    console.log("Home Button Clicked");
    Output.innerHTML += "Home Buuton Clicked<br>"
}, true);

// 

let list = document.getElementById("list");

let task = document.getElementById("task");

let ListOutput = document.getElementById("listResult");

list.addEventListener("click", function() {
    console.log("Todo List Clicked<br>");
    ListOutput.innerHTML += "Todo List Clicked"
}, true);

task.addEventListener("click", function() {
    console.log("Task Clicked");
    ListOutput.innerHTML += "Task Clicked<br>"
},true);


// Event Delegation - is attaching one event listener to a parent 
// element to handle events from its child elements.

let List = document.getElementById("List");

let Result1 = document.getElementById("para");

List.addEventListener("click", function(event) {
    console.log(event.target.innerText);
    Result1.innerHTML = "Clicked on: " + event.target.innerText;
});

// 

let fruits = document.getElementById("fruits");

fruits.addEventListener("click", function(e) {
    console.log(e.target.innerText);
});

// 

let list1 = document.getElementById("list1");

let addBtn = document.getElementById("add");

let Count = 1;

addBtn.addEventListener("click", () => {

    let li = document.createElement("li");

    li.innerText = "Item " +  Count++; 

    list.appendChild(li)
});

list1.addEventListener("click", (e) => {

    console.log("Clicked:", e.target.innerText);
    
});


// Normal event -  means attaching event listeners directly to each 
// DOM element instead of using parent handler.

let Btn1 = document.getElementById("Btn1");

let t1 = 0;

Btn1.addEventListener("click", function () {

    t1 += 1;
    console.log("value of t1:", t1);
    console.log("Button Clicked");

    document.getElementById("Output1").textContent = "Value of t1: " + t1;

});

// 

let city = document.getElementById("city");

city.addEventListener("change", function () {

    console.log(city.value);

});


// Event Throttling - it makes a function run only once in a fixed time interval

let time = document.getElementById("Btn");
let Timer = 0;

time.addEventListener("click", function () {

    clearTimeout();

    Timer = setTimeout(function () {
        console.log("Button Clicked Once");

    }, 3000);

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

// 

let LOGIN = document.getElementById("LOGIN");

let Result2 = document.getElementById("res1");

let isAllowed = true;

LOGIN.addEventListener("click", function() {

    if(isAllowed) {

        console.log("Login Successful");
        result.innerHTML = "Login Successful";

        isAllowed = false;

        setTimeout(function() {
            isAllowed = true;
        }, 3000)
    }
});

// Event Debouncing - it delays the function execution until the event stops for a specified time.

let timer;

let submit =  document.getElementById("submitBtn");

submit.addEventListener("click", function() {
    clearTimeout(timer);

    timer = setTimeout(function() {
        document.getElementById("out").innerText = "Submitted Successfully";
    }, 1000)
});

// 

let search = document.getElementById("search");

let show = document.getElementById("show");

let Time;

search.addEventListener("input", function() {
    clearInterval(Time);

    Time = setTimeout(function() {
        console.log(search.value);

        show.innerHTML = "Searching: " + search.value
        
    }, 2000)
});

// 

let message = document.getElementById("message");

let r = document.getElementById("r");

let t;

message.addEventListener("input", function() {
    clearInterval(t);

    t = setTimeout(function() {

        console.log("Saved");
        r.innerHTML = "Message Saved";

    },1500)
});

// 







