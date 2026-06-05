// DOM =Document Object Model
// Javascript uses DOM to access and manipulate web page content, structure, and styles dynamically.

// changing text
function changeText() {

    document.getElementById("title")
        .innerText = "Welcome to DOM"
}

// changeing text color

function changeColor() {

    document.querySelector(".msg").style.color = "red";
}

// 

function changeAll() {

    let items = document.querySelectorAll(".item");

    items.forEach(function (element) {
        element.style.color = "blue"
    })
};

// 

// show input values 

function showName() {
    let value = document.getElementById("name").value;

    document.getElementById("result").innerText = value;
}

// Toggle text

function toggle() {
    let status = document.getElementById("status");

    if (status.innerText == "OFF") {
        status.innerText = "ON";
    } else {
        status.innerText = "OFF";
    }
}

// add list items dynamically

let count = 1;

function addItem() {
    let li = document.createElement("li");

    li.innerText = "Item " + count;

    document.getElementById("list").appendChild(li);

    console.log("Added Item " + count);

    count++;

};

// Removing paragraph

function removePara() {
    document.getElementById("para").remove();

    console.log("Pargraph Removed");

}

// Counter

let Count = 0;

function increase() {

    Count++;

    document.getElementById("count").innerText = Count;

    console.log("Count Increases: ", Count);

};

function decrease() {

    Count--;

    document.getElementById("count").innerText = Count;

    console.log("Count Decreases: ", Count);

};

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

// 

function showName() {

    let name = document.getElementById("userName").value;

    document.getElementById("result").innerText = name;
};

// 

function createCounter() {
    let C = 0;

    return function () {
        C++;
        let result = document.getElementById("Result");
        result.textContent = "Clicked" + " " + C + " " + "times"

    };
}

let counter = createCounter()

document.getElementById("btn").addEventListener("click", counter)

// Creating menu Active Effect using sibling traversal

function setActive(element) {

    let siblings = element.parentElement.children;

    for (let i = 0; i < siblings.length; i++) {
        siblings[i].className = "";
    }

    element.className = "active"
}

// 

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {

        let contents = document.querySelectorAll(".content");

        contents.forEach(function (content) {
            content.style.display = "none";
        });

        this.nextElementSibling.style.display = "block"
    });
})

// 

let button = document.querySelector(".Btn");

button.addEventListener("dblclick", function () {

    let card = this.parentElement;

    let details = card.children[2];

    details.style.display = "block";

});

// Toggle button visibility

let Button = document.getElementById("showBtn");

Button.addEventListener("mouseover", function () {

    let password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

        this.innerText = "Hide Password"

    } else {

        password.type = "password";

        this.innerText = "Show Password";
    }

});

// Adding Item to List

let Btn = document.getElementById("addBtn");

Btn.addEventListener("dblclick", function () {
    let input = document.getElementById("itemInput");

    let li = document.createElement("li");

    li.innerText = input.value;

    document.getElementById("output").appendChild(li);

    input.value = "";
});

// 

// Form Validation

let form = document.getElementById("myform")

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value

    let password = document.getElementById("password").value

    let nameError = document.getElementById("nameError")
    let emailError = document.getElementById("emailError")
    let passwordError = document.getElementById("passwordError")

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    if (name == "") {
        nameError.innerHTML = "Name is required";
    }

    if (email == "" || !email.includes("@")) {
        emailError.innerHTML = "Enter Valid email"
    };

    if (password.length < 6) {
        passwordError.innerHTML = "Password must be a 6 Characters"
    }

});

// Digital Clock - setInterval

function showTime() {
    let date = new Date();

    let time = date.toLocaleTimeString();

    document.getElementById("clock").innerText = time;

    // console.log("Current Time: ", time);
    
}

setInterval(showTime, 1000);

// 






