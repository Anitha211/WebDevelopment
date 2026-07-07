// DOM- Document Object Model
// Dom is like a bridge between HTML and JS and that allows JS to control the web pages.

function showName() {
    let name = document.getElementById("name").value

    document.getElementById("result").innerHTML = "Hello " + name;
}

// 

let Count = 0;
let a = document.getElementById("output")

function countIncrease() {
    Count++;
    a.innerHTML = "Button Clicked:   " + Count + "times"

}

// login form

function login() {
    let user = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    if(user === "" || password === "") {
        document.getElementById("msg").innerHTML = "Please fill all fields";

    } else {
        document.getElementById("msg").innerHTML = "Login Successful";
    }
}

// 

let c = 0;

function addToCart() {
    c++;
    document.getElementById("cart")
    .innerHTML = "Cart Items: " + c;
}

// todo

function addTask() {
    let task = document.getElementById("task").value;

    let li = document.createElement("li");

    li.innerHTML = task;

    document.getElementById("LIST").appendChild(li);
};

// list items 

let count = 1;

function addItem() {
    let li = document.createElement("li");

    li.innerText = "Item " + count;

    document.getElementById("list").appendChild(li);

    count++;
};

// character counter

function countChar() {
    let text = document.getElementById("TEXT").value;

    document.getElementById("COUNT").innerHTML = text.length;
};

// 

function showCourse() {
    let value = document.getElementById("course").value;

    document.getElementById("Result").innerHTML = "You Selected: " + value;
};

// change text

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    document.getElementById("text").innerHTML = "Welcome"
});

// mouseover and mouseout

let Box = document.getElementById("Box");
Box.addEventListener("mouseover", function(){
    console.log(output.textContent = "Mouse over");
});

Box.addEventListener("mouseout", function(){
    console.log(output.textContent = "Mouse left");
});

// dblclick

let BTN = document.getElementById("BTN");

BTN.addEventListener("dblclick", function() {

    document.getElementById("res").innerHTML = 
    "Button Double Clicked";

});

// keydown

let name = document.getElementById("name");

name.addEventListener("keydown", function() {

    document.getElementById("Output").innerHTML
    ="Key Pressed";

});

// 



