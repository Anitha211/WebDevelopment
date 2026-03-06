// DOM = Document Object Model

// document.getElementById("")

let h1 = document.getElementById("id").style.color = "red";
console.log(h1);

// document.getElementsByClassName("")

let h2 = document.getElementsByClassName("class")
console.log(h2);

// document.getElementsByTagName("")

let div = document.getElementsByTagName("div")
console.log(div);

// document.querySelector("")

let q = document.querySelector("#q")
console.log(q);

// document.querySelectorAll("")

let A = document.querySelectorAll("h1")
console.log(A);

// 
console.log(document)

console.log(document.body);

console.log(document.head);

console.log(document.title);

console.log(document.links);

// 

let n = document.createElement("p")
n.innerText = "This is the Div 2 Paragraph-3"
console.log(n);

// let parent = document.getElementById("second")
// console.log(parent);

// parent.appendChild(n)

// console.log(parent.innerText);

// console.log(parent.innerHTML);

let last = document.getElementById("last")

// parent.insertBefore(n, last)

last.remove();

/////////////////////////////////////////////////

// CHANGE THE TEXT CONTENT

function changeText() {
    document.getElementById("text").textContent = "Welcome to Dom"
}

// 

function addItem() {
    let li = document.createElement("li")
    li.textContent = "New Item"
    document.getElementById("list").appendChild(li)
}

// 

function insertItem() {
    let item = document.createElement("li");
    item.textContent = "Orange";

    let list = document.getElementById("item");
    let banana = document.getElementById("banana")
    list.insertBefore(item, banana)
}

// 

function replaceText() {
    let p = document.createElement("p")
    p.textContent = "text is replaced"

    let Parent = document.body
    let old = document.getElementById("old")
    Parent.replaceChild(p, old);
}

// 

function createCounter() {
    let count = 0;

    return function () {
        count++;
        let result = document.getElementById("result");
        result.textContent = "Clicked" + " " + count + " " + "times"

    };
}

let counter = createCounter()

document.getElementById("btn").addEventListener("click", counter)

// 

let btn = document.getElementById("Btn");
let text = document.getElementById("Text")

btn.addEventListener("click", function () {
    text.innerHTML = "Button is Clicked!"
})

// 

let button1 = document.getElementById("colorBtn");

button1.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue"
})

// 

let input = document.getElementById("task")
let addBtn = document.getElementById("add")
let l = document.getElementById("list")

addBtn.addEventListener("click", function () {
    let li = document.createElement("li");

    li.innerHTML = input.value;

    l.appendChild(li)
    input.value = ""
})


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
// 
// 


let button = document.getElementById("button");

let a1 = 0;
let b1 = 0;
let c1 = 0;

button.addEventListener("click", function() {

a1 += 1;
console.log("value of a1:",a1);
    console.log("Button Clicked");
    
});

// 

let lastclick = 0;
button.addEventListener("click", function() {
let current = Date.now();
if(current - lastclick > 2000){
b1 += 1;
console.log("value of b1:",b1);
lastclick = current;
}
    console.log("Button Clicked");
})


// event capturing

let P = document.getElementById("P")

let C = document.getElementById("C")

P.addEventListener("click", function(){
    console.log("P Clicked");
    
},true)

C.addEventListener("click", function(){
    console.log("button Clicked");
    
},true)

// 

let grandparent = document.getElementById("grandparent")

let Parent = document.getElementById("Parent")

let Child = document.getElementById("Child")

grandparent.addEventListener("click", function(){
    console.log("GrandParent Capturing");
},true);

Parent.addEventListener("click", function(){
    console.log("Parent Capturing");
},true);

Child.addEventListener("click", function(){
    console.log("Button Clicked");
});

Parent.addEventListener("click", function(){
    console.log("Parent Bubbling");
});

grandparent.addEventListener("click", function(){
    console.log("GrandParent Bubbling");
});






