// DOM ->Document object model
// Dom is like a bridge between HTML and JS and that allows JS to control the web page

let title = document.getElementById("title");
console.log(title);

// 

function changeText(){
    document.getElementById("msg").innerText = "New Text";
}

// change text 

let text = document.querySelector(".text")
text.innerText ="Changed";
console.log(text);

// show input values 

function showName(){
    let value = document.getElementById("name").value;

    document.getElementById("result").innerText = value;
}

// Toggle Text

function toggle(){
    let status = document.getElementById("status");

    if(status.innerText == "OFF"){
        status.innerText = "ON";
    } else {
        status.innerText = "OFF";
    }
}

// adding list items

function addItem(){
    let li = document.createElement("li");
    li.innerText = "New Item";

    document.getElementById("list").appendChild(li);
}

// delete element

function removePara(){
    document.getElementById("para").remove();
}

// count increase

let c = 0;
function increaseCount(){
    c++;
    let count = document.getElementById("count");
    count.innerHTML = "Button Clicked:   " + c +   "times"
}

// table

let data = ["A", "B", "AB", "C"];

let table = document.getElementById("table");

data.forEach(item => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerText = item;
    tr.appendChild(td);
    table.appendChild(tr)
});


// Adding events - 

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

console.log(btn.innerText = "Button Clicked");

});

// MOUSEOver

let Box = document.getElementById("Box");
Box.addEventListener("mouseover", function(){
    console.log(output.textContent = "Mouse over");
});

// MOUSEOUT

Box.addEventListener("mouseout", function(){
    console.log(output.textContent = "Mouse left");
});

// 

// Event delegation 

let List = document.getElementById("list1");

List.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        console.log(e.target.innerText);
        
    }
})

// 
let item = document.getElementById("items");

item.addEventListener("dblclick", function(e) {
    if(e.target.tagName === "LI"){
        e.target.remove()
        
    }
    console.log(item);
    
})

//Adding list items

function addItems() {
    let value = document.getElementById("input").value;

    let li = document.getElementById("LIST");
    li.innerText = value;

    document.getElementById("LIST").appendChild(li);
}

// // Event Capturing -> here the events moves from parent - child


let parent = document.getElementById("parent");

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
},true);

let child = document.getElementById("child");

child.addEventListener("click", function() {
    console.log("Child Clicked");
},true)

// Event Bubbuling - here the events moves from child - parent 


let result = document.getElementById("result");

let G = document.getElementById("GRANDPARENT");
G.addEventListener("click", function() {
    console.log("GRANDPARENT");
    result.innerHTML += "GRAND PARENT <br>" 
});

let P = document.getElementById("PARENT");
P.addEventListener("click", function() {
    console.log("PARENT");
    result.innerHTML += "PARENT <br>" 
});

let C = document.getElementById("GRANDPARENT");
C.addEventListener("click", function() {
    console.log("CHILD");
    result.innerText += "CHILD" 
});

// 

//Event Performances - 
// Normal event -> means attaching event listeners directly to each DOM element instead of using parent handler.

let button1 = document.getElementById("button");

button1.addEventListener("click", function () {
    console.log("Button Clicked");
});

// 

let Btn = document.getElementById("Btn");

let a1 = 0;

Btn.addEventListener("click", function () {

    a1 += 1;
    console.log("value of a1:", a1);
    console.log("Button Clicked");

    document.getElementById("Output").textContent = "Value of a1: " + a1;

});

// 

let course = document.getElementById("course");

course.addEventListener("change", function () {
    console.log("course changed");

});

// 
// Throttling -> it makes a function run only once in a fixed time interval

let time = document.getElementById("BTN");
let Timer = 0;
time.addEventListener("click",function(){
    clearTimeout();
    Timer =setTimeout(function(){
        console.log("Button Clicked Once");
        
    },3000);

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


// Debouncing event -> it delays the function execution until the event stops for a specified time.

let input = document.getElementById("input1");

let outPut = document.getElementById("out");

let timer;

input.addEventListener("keyup", function () {
    clearTimeout();

    timer = setTimeout(function () {
        console.log("User Stopped typing");
        outPut.textContent = "Final Input: " + input.value;

    }, 3000)
})







