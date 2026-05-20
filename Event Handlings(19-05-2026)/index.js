// Event Bubbling -> here the events moves from child - parent 


let P = document.getElementById("Parent");

let C = document.getElementById("Child");

P.addEventListener("click", function() {
    console.log("Parent Clicked");
    
});

C.addEventListener("click", function() {
    console.log("Child Clicked");
    
});

// 

let Parent = document.getElementById("P");

let Child = document.getElementById("C");

Parent.addEventListener("click", function() {
    console.log("P Clicked");
    
});

Child.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("C Clicked");
    
});

// 

let card = document.getElementById("card");

let deleteBtn = document.getElementById("deleteBtn");

card.addEventListener("click", function() {
    console.log("Card Opened");
});

deleteBtn.addEventListener("click", function() {
    console.log("Product Deleted");
});

// 

let Grand = document.getElementById("grandparent");

let PParent = document.getElementById("PParent");

let CChild = document.getElementById("CChild");

Grand.addEventListener("click", function() {
    console.log("Grandparent Clicked");
});

PParent.addEventListener("click", function() {
    console.log("Parent Clicked");
});

CChild.addEventListener("click", function() {
    console.log("Child Clicked");
});


// Event Capturing -> here the events moves from parent - child

let parent = document.getElementById("parent");

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
},true);

let child = document.getElementById("child");

child.addEventListener("click", function() {
    console.log("Child Clicked");
},true);

// 

let A1 = document.getElementById("a1");

let A2 = document.getElementById("a2");

let A3 = document.getElementById("a3");

A1.addEventListener("click", function() {
    console.log("GRAND PARENT");
},true);

A2.addEventListener("click", function() {
    console.log("PARENT");
},true);

A3.addEventListener("click", function() {
    console.log("CHILD");
},true);


//Shopping Cart 

let Card = document.getElementById("Card");

let CartBtn = document.getElementById("CartBtn");

let BuyBtn = document.getElementById("buyBtn");

Card.addEventListener("mouseover", function() {
    console.log("Product Details Opened");
})

CartBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Product Added to Cart");
});

BuyBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("Redirecting to Payment");
});

// Event Delegation - here the parent elements handles events 
//                    of its child elements using event bubbling


let fruits = document.getElementById("fruits");

fruits.addEventListener("click", function(e) {
    console.log(e.target.innerText);
});

// 

let todoList = document.getElementById("todoList");

todoList.addEventListener("dblclick" , function(e) {
    console.log(e.target.innerText);  
});

// 

let Product = document.getElementById("products");

document.addEventListener("click", function() {
    let li = document.createElement("li");

    li.innerText = "Phones"

    Product.appendChild(li)
});

// 

let list = document.getElementById("list1");

let addBtn = document.getElementById("add");

let Count = 1;

addBtn.addEventListener("click", () => {

    let li = document.createElement("li");

    li.innerText = "Item " +  Count++; 

    list.appendChild(li)
});

list.addEventListener("click", (e) => {

    console.log("Clicked:", e.target.innerText);
    
});

// 

let container = document.getElementById("container")

container.addEventListener("click", (e) => {

    if(e.target.tagName == "BUTTON"){

        console.log("Action:", e.target.innerText);
    }
})

// form

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

// Event Throttling

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

let throttle = false;

window.addEventListener("scroll", function() {
    if(throttle) return;

    throttle = true;

    console.log("Scrolling...");

    setTimeout(function() {
        throttle = false;
    },1000)
    
});

// 

let t = false;

document.getElementById("btnn")
.addEventListener("click", function() {
    if(t) {
        console.log("Please Wait");

        return;
        
    }

    t = true;

    console.log("Form Submitted");

    setTimeout(function() {
        t = false;
    }, 3000)
});

// 

let T = false;

document.getElementById("box")
.addEventListener("mousemove", function() {

    if(T) return;

    console.log("Move Moving");

    setTimeout(function() {
        T = false;
    }, 1000)
    
});

// Debouncing -> it delays the function execution until the event stops for a specified time.

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

let count = 0;
let time;

let btn2 = document.getElementById("btn2");
let result = document.getElementById("result");

btn2.addEventListener("click", function () {
    clearTimeout(time);

    time = setTimeout(function () {
        count++;
        console.log("Clicked: ", count);
        result.textContent = "Clicked: " + count;
    }, 2000);
});

// 










