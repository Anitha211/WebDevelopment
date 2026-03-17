// Dom --> Document Object Model

console.log(document);


// Dom is like a bridge between HTML and JS and that allows JS to control the web pageXOffset.

let title = document.getElementById("title");
console.log(title);

// 
let text = document.getElementsByClassName("text");
console.log(text);

// 
let h3 = document.getElementsByTagName("h3");
console.log(h3)

// 

let s1 = document.querySelector("#heading12");
console.log(s1);

// 

let h2 = document.querySelectorAll("h2");
console.log(h2);

// 
let all = document.querySelectorAll("h4");
console.log(all);

// Changing the text

function changeText(){
    document.getElementById("text").innerText = "Text Changed";
}


// 

function changeColor(){
    let element = document.getElementsByClassName("item");
    for(let i = 0; i < element.length; i++){
        element[i].style.color = "red"
    }
}

// 

function changeFirst(){
    document.querySelector(".demo").innerText = "Changed!"
}

// 

function addItem(){
   let li =  document.createElement("li");
    li.innerText = "Java Script";

    console.log(document.getElementById("list").appendChild(li));
     
}

// 

function removeItem(){
    let parent = document.getElementById("List");
    let Child = document.getElementById("remove");

    console.log(parent.removeChild(Child));
}

// 

function addContent(){
    let a = document.getElementById("box").innerHTML = "<h2>Hello Dom</h2>"
    console.log(a);
}

// 

let btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    console.log("Button Clicked!");
    
})

// 

let c = 0;
function count() {
    c++;
    let b = document.getElementById("count").innerText = " Button Clicked " +  c  + " times ";
    console.log(b);
    
}

// 

function addPara(){
    let p = document.createElement("p");
    p.innerText = "New Paragraph Added"

    console.log(document.getElementById("DIV").appendChild(p));
}

// 
// event handling - event bubbling, event capturing, and event delegation

let child = document.getElementById("child");

child.addEventListener("click", function(){
    console.log("child");
    
});

let parent = document.getElementById("parent");

parent.addEventListener("click", () => {
    console.log("Parent is clicked")
});

// 

let C = document.getElementById("Child");
C.addEventListener("click", () => {
    console.log("Child....");
});

let P = document.getElementById("Parent");
P.addEventListener("click", () => {
    console.log("Parent....");
});

let G = document.getElementById("grandparent");
G.addEventListener("click", () => {
    console.log("Grand Parent.....");
});

// 

// LIST = document.getElementsByClassName("ITEM");
// LIST.addEventListener("click", (e) => {
//     console.log("Clicked:", e.target.innerText);
    
// });

// 

// Event Capturing

let outer = document.getElementById("outer");

document.addEventListener("click", () => {
    console.log("outer");
},true);

let inner = document.getElementById("inner")

document.addEventListener("click", () => {
    console.log("inner");
},true);

// 

let Parent = document.getElementById("P")

let Child = document.getElementById("C")

Parent.addEventListener("click", function(){

    console.log("Parent Clicked");
    
},true);

Child.addEventListener("click", function(){

    console.log("button Clicked");
    
},true);

// 

let card = document.getElementById("card");

let BTN = document.getElementById("BTN");

card.addEventListener("click", () => {

    console.log("card capture");
},true);

BTN.addEventListener("click", () => {
    
    console.log("Button Clicked");
    
});


// Event Delegation

let l = document.getElementById("l");

l.addEventListener("click", (e) => {
    console.log("Clicked:", e.target.innerText);
    
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

// 




