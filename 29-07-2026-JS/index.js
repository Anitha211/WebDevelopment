// DOM - Document object model
// Dom is like a bridge between HTML and JS and that allows JS to control the web page

let title = document.getElementById("title");

function changeText() {
    title.innerText = "Document Object Model"

    console.log("Text changed");
    
};

// 

let demo = document.getElementById("demo");

function changeHTML() {

    demo.innerHTML = "<b>Bold Text</b>";

    console.log("Text chages into bold text");
    
}

// 

let list = document.getElementById("list");

function addItem() {

    let li = document.createElement("li");
    li.innerText = "Orange";

    list.appendChild(li);
};

function removeItem() {
    document.getElementById("item").remove();
};

// 

function changeStyle() {

    let p = document.getElementById("msg");

    p.style.color = "blue";
    p.style.fontSize = "30px";
    p.style.backgroundColor = "yellow";
};

// 

function validateForm() {

    let name = document.getElementById("name").value;

    if(name === "") {
        document.getElementById("error").innerText = "Name is required";
    } else {

        document.getElementById("error").innerText = "Form Submitted successfully";
    }
};

// 

let Count = 0;
let c = document.getElementById("count");


function countIncrease() {
    Count++;
    c.innerText = "Button Clicked:   " + Count + "times";

};

function countDecrease() {
    Count--;
    c.innerText = "Button Clicked:  " + Count + "times";
}

// 

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

console.log(btn.innerText = "Button Clicked");
});

// 

let input = document.getElementById("Task");
let addBtn = document.getElementById("addBtn");
let List = document.getElementById("taskList");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
    let li = document.createElement("li");

    li.innerHTML = input.value;

    List.appendChild(li)
    input.value = ""
});

removeBtn.addEventListener("click", function () {
   let li = document.createElement("li");

    li.innerHTML = input.value;

    List.remove(li)
    input.value = ""
    
});

// 

let loginBtn = document.getElementById("loginBtn");
let username = document.getElementById("username");
let output = document.getElementById("output");

loginBtn.addEventListener("click", function() {

    if(username.value === "") {
        output.textContent = "Username is required";
        output.style.color = "red";
    } else {
        output.textContent = "Login successful";
        output.style.color = "green";
    }
});

// 

let Input = document.getElementById("task1");
let button = document.getElementById("AddBtn");
let L = document.getElementById("LIST");

button.addEventListener("click", function () {

    if(Input.value === "") {
        console.log("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = Input.value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        L.removeChild(li);
    });

    li.appendChild(removeBtn);
    L.appendChild(li);
    Input.value = "";

});

// 

let balance = 10000;
let amount = document.getElementById("amount");
let BTN = document.getElementById("withdrawBtn");
let display = document.getElementById("balance");

BTN.addEventListener("click", function() {

    balance -= Number(amount.value);
    display.textContent = "Balance: " + balance;
});

// 

let password = document.getElementById("password");

let Button = document.getElementById("toggleBtn");

Button.addEventListener("click", function() {

    if(password.type === "password") {
        password.type = "text";
        Button.textContent = "Hide";
    } else {

        password.type = "password";
        Button.textContent = "Show";
    }
});

// 

let btn1 = document.getElementById("resultBtn");
let table = document.getElementById("resultTable");

btn1.addEventListener("click", function() {

    let student = document.getElementById("student").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    
    let total = m1 + m2 + m3;

    let grade = total >= 270 ? "A" : 
                total >= 225 ? "B" : 
                total >= 150 ? "C" : 
                "Fail";
    
    let row = table.insertRow();
    row.insertCell(0).textContent = student;
    row.insertCell(1).textContent = m1;
    row.insertCell(2).textContent = m2;
    row.insertCell(3).textContent = m3;
    row.insertCell(4).textContent = total;
    row.insertCell(5).textContent = grade;

});

// 










