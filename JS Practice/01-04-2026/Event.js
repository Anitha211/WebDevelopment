// Event Handling

// Event Capturing -> here the events moves from parent - child


let parent = document.getElementById("parent");

parent.addEventListener("click", function() {
    console.log("Parent Clicked");
},true);

let child = document.getElementById("child");

child.addEventListener("click", function() {
    console.log("Child Clicked");
},true)

// 

let output = document.getElementById("output");

let grand = document.getElementById("Grandparent");

grand.addEventListener("click", function() {
    console.log("Grandparent");
    output.innerHTML += "Grandparent<br>"
    
},true);


let p = document.getElementById("Parent");

p.addEventListener("click", function() {
    console.log("Parent");
    output.innerHTML += "Parent<br>"
},true);

let c = document.getElementById("Child");

c.addEventListener("click", function() {

    console.log("child");
    output.innerHTML += "Child<br>"
    
},true);

// 

let out = document.getElementById("outer");

out.addEventListener("click", function() {
    console.log("outer");
},true);

let inner = document.getElementById("inner");

inner.addEventListener("click", function() {
    console.log("inner");
},true);

let button = document.getElementById("button");

button.addEventListener("click", function() {
    console.log("Button Clicked");
    
},true);


//  Event Bubbling -> here the events moves from child - parent 


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

let card = document.getElementById("card");
card.addEventListener("mouseover", function() {
    console.log("card");
});

let btn = document.getElementById("btn");
btn.addEventListener("mouseover", function() {
    console.log("btn");
});

//

let Result = document.getElementById("Result");

let Parent = document.getElementById("P");

Parent.addEventListener("click", function() {
    console.log("Parent (Capturing)");
    Result.innerHTML += "Parent (Capturing) <br>"
},true);

let Parent1 = document.getElementById("P");

Parent1.addEventListener("click", function() {
    console.log("Parent (Bubbling)");
    Result.innerHTML += "Parent (Bubbling)<br>"
});

let Child = document.getElementById("C");

Child.addEventListener("click", function() {
    console.log("Child");
    Result.innerHTML += "Child<br>"
});

// 

let product = document.getElementsByClassName("product");

for(let i = 0; i < product.length; i++ ){

    product[i].addEventListener("click", function(){
        console.log("Product clicked:",product[i].textContent);
        
    })
}
let pro = document.getElementById("productlist");

pro.addEventListener("click", function(){
    console.log("Product list clicked");
},true);

// Event Delegation -> handle events on many child via a parent using bubbuling 

let list = document.getElementById("list");
list.addEventListener("dblclick", function(e) {
    console.log("Clicked: ", e.target.textContent);
});

//

let todo = document.getElementById("todo");

todo.addEventListener("click", function(e) {
    if(e.target.tagname === "BUTTON"){
        e.target.parentElement.remove();
        console.log("Deleted task: ", e.target.textContent);
        
    }
});

// 

let form = document.getElementById("signup");
form.addEventListener("focus", function(e) {
    console.log("Focused on: ", e.target.name);
    
},true);


// 

let Add = document.getElementById("Add");

Add.addEventListener("click", function() {
    let value = document.getElementById("Input").value;

    let li = document.createElement("li");
    li.innerHTML = value  + " <button>Delete</button>";

 document.getElementById("Todo").appendChild(li);
});

let t = document.getElementById("Todo");
t.addEventListener("click", function(e) {
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    } else if (e.target.tagName == "LI"){
            e.target.style.textDecoration = "line-through";
    }
    });








