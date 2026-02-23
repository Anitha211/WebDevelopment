// DOM ---> Document Object Model
// DOM is like a bridge between HTML and JS that allows JS to control the web page.


// DOM Methods are...,

// getElementsById() --> used to select an Html element using its id.
                        // it returns single element
                        // it is the fastest way to select an element

console.log(document);

let h1 = document.getElementById("heading");
console.log(h1);

let h2 = document.getElementById("text");
console.log(h2);


// getElementsByClassName() --> used to select all Html elements that have the same class name
        //    it returns multiple elements
        // output return in the form of array []


let c = document.getElementsByClassName("demo");
console.log(c);


// getElementsByTagName() --> 

let t = document.getElementsByTagName("h1");
console.log(t);

let para = document.getElementsByTagName("p");
console.log(para);

// querySelector() --> it selects the first element and returns only one element

let s = document.querySelector("h3");
console.log(s);

let s1 = document.querySelector("#heading12");
console.log(s1);

let s2 = document.querySelector("#city");
console.log(s2);

// querySelectorAll() ---> it selects all matching elements

let all = document.querySelectorAll("h3");
console.log(all);

let all1 = document.querySelectorAll("h1");
console.log(all1);

let a = document.querySelectorAll("#city");
console.log(a);


// DOM Traversing:

// parent element

let n = document.getElementById("head1");

console.log(n);

console.log(n.parentElement);

// children element

let parent = n.parentElement;
console.log(parent.children);

// firstElementChild

console.log(parent.firstElementChild);

// lastElementChild

console.log(parent.lastElementChild);

// nextElementSibling

console.log(parent.nextElementSibling);

// previousElementsSibling

console.log(parent.previousElementSibling);

// example ---

let selector = document.getElementById("item2");

console.log(selector);

console.log("nextElement:",selector.nextElementSibling);

console.log("previousElement:",selector.previousElementSibling);

//  // creating a DOM:

// creatElement()

let newElement = document.createElement("h1");

newElement.innerText = "Creating a DOM"

console.log(newElement);

h1.appendChild(newElement);

h1.appendChild(newElement);

h1.before(newElement);

h1.after(newElement);

// 
let heading = document.createElement("h2");

heading.innerText = "Welcome to JavaScript DOM";

console.log(heading);


let paragraph = document.createElement("p");
paragraph.innerText = "This Paragraph is created using DOM methods";

console.log(paragraph);

let container = document.getElementById("container");


container.appendChild(heading);

container.appendChild(paragraph);

// 

let btn = document.getElementById("btn");

console.log(btn);

btn.onclick = function(){
// alert("Button Clicked");
console.log("Button Clicked");
}

// addEventListener

function click(){
// alert("Button Clicked");
btn.innerText = "Button Clicked";
}
btn.addEventListener("click",click);


// Event Handling ---> event bubbuling, capturing, deligation

let child = document.getElementById("innertext")
function action(){
    console.log("Inner Clicked");
    
}
child.addEventListener("click",action);

// 
let Parent = document.getElementById("outertext");

function action1(){
    console.log("outer Clicked");
    
}
Parent.addEventListener("click",action1, true);

// 
let div = document.getElementById("div")
function action2(){
        console.log("Parent Element");
        
}
div.addEventListener("click",action2)


//
let div1 = document.getElementById("div1")
function action3(){
        console.log("Parent Element");
        
}
div1.addEventListener("click",action3,true)
 
// 

let menu = document.getElementById("menu");
function menuList(){
    console.log("clicked");
}
menu.addEventListener("click", function(e){
    console.log(e.target.innerText);
    
})

// ex
let e = document.getElementById("parent")

function value(){
    console.log("Parent");
    
};
e.addEventListener("click",value);

// 
let e1 = document.getElementById("child")

function value1(){
    console.log("child");
    
};
e1.addEventListener("click",value1);



    //    normal event

let button = document.getElementById("button");

let a1 = 0;
let b1 = 0;
let c1 = 0;

button.addEventListener("click", function() {

a1 += 1;
console.log("value of a1:",a1);
    console.log("Button Clicked");
    
});

//  Throttling
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
// 

// debouncing
let t1 = 0;

button.addEventListener("click",function(){
clearTimeout();
t1 = setTimeout(function(){
    c1+= 1;
console.log("value of c1:",c1)
} ,2000 );

});


//  ex of debouncing event
let time = document.getElementById("btn1");
let timer = 0;
time.addEventListener("click",function(){
    clearTimeout();
    timer =setTimeout(function(){
        console.log("Button Clicked Once");
        
    },3000);

});

// Mouse Move Throttling

let move = document.getElementById("area");

let allowMove = true;

move.addEventListener("mousemove", function(){
    if(allowMove){
        console.log("Mouse Moved");
        allowMove = false;

        setTimeout(function (){
            allowMove = true;
        },2000);
    };
});

// normal event

let course = document.getElementById("course");

course.addEventListener("change", function(){
    console.log("course changed");
    
});

// double click

let btn2 = document.getElementById("btn2");

btn2.addEventListener("dblclick", function () {

    console.log("Button double clicked");    
});

// event bubbuling, capturing
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


// 












