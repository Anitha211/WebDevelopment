// Event Bubbling - here the events moves from child - parent

let parent = document.getElementById("parent");

parent.addEventListener("click", function () {

    console.log("Parent Clicked");

})

let child = document.getElementById("child");

child.addEventListener("click", function () {
    console.log("Button Clicked");

});

// 

let result = document.getElementById("result");

let GP = document.getElementById("grandparent");

GP.addEventListener("click", function () {

    console.log("Grand Parent");
    result.innerHTML += "GRAND PARENT <br>"
});

let P = document.getElementById("Parent");

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

let form = document.getElementById("loginform");
let button = document.getElementById("loginBtn");

let output = document.getElementById("output");

form.addEventListener("click", function () {

    console.log("Form Clicked");
    output.innerHTML += "Form Clicked<br>";
});

button.addEventListener("click", function () {

    console.log("Login Button Clicked");
    output.innerHTML = "";
    output.innerHTML += "Login Button Clicked<br>"
});

// 

let cart = document.getElementById("cart");
let list = document.getElementById("itemList");

let add = document.getElementById("add");
let remove = document.getElementById("remove");

let Result = document.getElementById("res");

cart.addEventListener("click", function () {

    console.log("Cart Clicked");
    Result.innerHTML += "Cart Clicked<br>"
});

add.addEventListener("click", function () {

    Result.innerHTML = "";

    let li = document.createElement("li");
    li.innerText = "New Item";
    list.appendChild(li);

    console.log("Add Button Clicked");
    Result.innerHTML += "Add Button Clicked<br>"
});

remove.addEventListener("click", function () {

    Result.innerHTML = "";

    list.lastElementChild.remove();

    console.log("Remove Button Clicked");
    Result.innerHTML += "Remove Button Clicked<br>"

});

// 

// Event Capturing -> here the events moves from parent - child

let Parent = document.getElementById("parent1");
let Child = document.getElementById("child1");

Parent.addEventListener("click", function () {

    console.log("Parent Clicked");
}, true);

Child.addEventListener("click", function () {

    console.log("Child Clicked");
}, true);

// 

let GF = document.getElementById("GF");

let PARENT = document.getElementById("P");

let CHILD = document.getElementById("C");

GF.addEventListener("click", function () {
    console.log("GRAND PARENT");
}, true);

PARENT.addEventListener("click", function () {
    console.log("PARENT");
}, true);

CHILD.addEventListener("click", function () {
    console.log("CHILD");
}, true);

// 

let menu = document.getElementById("menu");

let home = document.getElementById("home");

let Output = document.getElementById("Output");

menu.addEventListener("click", function () {

    console.log("Menu clicked");
    Output.innerHTML += "Menu Clicked<br>"
}, true);

home.addEventListener("click", function () {

    console.log("Home button clicked");
    Output.innerHTML += "Home button clicked<br>"
});

// 

let out = document.getElementById("outer");

out.addEventListener("click", function () {
    console.log("outer");
}, true);

let inner = document.getElementById("inner");

inner.addEventListener("click", function () {
    console.log("inner");
}, true);

let Button = document.getElementById("button");

Button.addEventListener("click", function () {
    console.log("Button Clicked");

}, true);

// 

let Form = document.getElementById("examForm");
let submit = document.getElementById("submit");
let RESULT = document.getElementById("RESULT");

Form.addEventListener("click", function () {

    console.log("Exam form clicked");
    RESULT.innerHTML += "Exam form clicked<br>";
}, true);

submit.addEventListener("click", function () {

    console.log("Submit button clicked");
    RESULT.innerHTML += "Submit button clicked";

}, true);

// Event Delegation - here the parent elements handles events
//of its child elements using event bubbling

let List = document.getElementById("list");
let a = document.getElementById("a");

List.addEventListener("click", function(event) {

    // event.stopPropagation();

    console.log(event.target.innerText);

    a.innerHTML = "Clicked: " + event.target.innerText;
    
});

// 

let table = document.getElementById("table");

let t = document.getElementById("t");

table.addEventListener("dblclick", function(e) {

    console.log(e.target.innerText);

    t.innerHTML = e.target.innerText;
    
});

// 

let LIST = document.getElementById("list1");

let addBtn1 = document.getElementById("addButton");

let Count = 1;

addBtn1.addEventListener("click", () => {

    let li = document.createElement("li");

    li.innerText = "Item " +  Count++; 

    LIST.appendChild(li)
});

LIST.addEventListener("click", (e) => {

    console.log("Clicked:", e.target.innerText);
    
});

// Normal Event - 

let Btn1 = document.getElementById("Button");

let T1 = 0;

Btn1.addEventListener("click", function () {

    T1 += 1;
    console.log("value of t1:", T1);
    console.log("Button Clicked");

    document.getElementById("Output1").textContent = "Value of t1: " + T1;

});

// 

let course = document.getElementById("course");

let select = document.getElementById("select");

course.addEventListener("change", function() {
    console.log(course.value);

    result.innerHTML = "Selected: " + course.value
    
});


// Event Throttling - it makes a function run only once in a fixed time interval

let Throttling = false;

document.getElementById("btn")
.addEventListener("click", function() {
    if(Throttling) return;

    Throttling = true;

    console.log("Button Clicked");

    setTimeout(function() {
        Throttling = false;
    },2000)
    
});

// 

let time = document.getElementById("Btn11");
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

// Event Debouncing - it delays the function execution until the event stops for a specified time.

let input = document.getElementById("input");

let outPut = document.getElementById("out");

let timer;

input.addEventListener("keyup", function () {
    clearTimeout();

    timer = setTimeout(function () {
        console.log("User Stopped typing");
        outPut.textContent = "Final Input: " + input.value;

    }, 3000)
})


// 

let message = document.getElementById("message");

let r = document.getElementById("r");

let t1;

message.addEventListener("input", function() {
    clearInterval(t);

    t1 = setTimeout(function() {

        console.log("Saved");
        r.innerHTML = "Message Saved";

    },1500)
});

// 

let Login = document.getElementById("Login");
let R = document.getElementById("R");

let TIME;

Login.addEventListener("dblclick", function() {

    clearTimeout(TIME);

    TIMR = setTimeout( function() {

        console.log("Login Successfully");
        R.innerHTML = "Login Successfully"
        
    },2000)
});








