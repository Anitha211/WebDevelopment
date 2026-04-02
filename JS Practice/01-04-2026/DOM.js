// Dom - Document Object Model
// DOM is like a bridge between HTML and JS that allows JS to control the web page.


// Dom Methods - getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll

let id = document.getElementById("title");
console.log(id);

let className = document.getElementsByClassName("className");
console.log(className);

let tag = document.getElementsByTagName("h1");
console.log(tag);

let query = document.querySelector("#title");
console.log(query);

let All = document.querySelectorAll(".className");
console.log(All);



// Dom Properties - innerHtml, innerText, innerContent

// inner Html - get and sets html content

let change = document.getElementById("title").innerHTML = "DOM";

let demo = document.getElementById("demo");
demo.innerHTML = "<b>Welcome</b> to Java Script -- innerHtml";
console.log(demo);

// inner Text - get and sets visible text

let el = document.getElementById("el");
el.innerText = "<b>Inner</b> Text";
console.log(el);

// text content - get all text

let content = document.getElementById("Content");
console.log(content);



// Traversing Dom - moving between elements in a webpage using js.

let middle = document.getElementById("middle");
console.log(middle);

// - parent 

let parent = middle.parentElement;
console.log(parent);

// first child of parent

let first = middle.parentElement.firstElementChild;
console.log(first);

// last child to parent 

let last = middle.parentElement.lastElementChild;
console.log(last);

// next sibling

let sibling = middle.nextElementSibling;
console.log(sibling);

// previous sibling

let pre = middle.previousElementSibling;
console.log(pre);

// changing li item 

let list = document.querySelector("ul");
list.children[1].textContent = "Mango";
console.log(list);



// Adding / Removing / Replacing Elements 

let List = document.getElementById("list");
console.log(List);

// adding

let add = document.createElement("li");
add.textContent = "React";
List.appendChild(add);
console.log(add);

// removing

let remove = document.querySelector("li");
List.children[2].remove();

// 

let Replace = document.createElement("li")
Replace.textContent = "Javascript";
List.children[1].replaceWith(Replace);
console.log(Replace);

// 

let h1 = document.getElementById("heading");
console.log(h1);

let newElement = document.createElement("h1");

newElement.innerText = "Creating a DOM"

console.log(newElement);

h1.appendChild(newElement);

h1.appendChild(newElement);

h1.before(newElement);

h1.after(newElement);


// Adding events - click, mouseover, mouseout, keydown, submit

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
console.log(btn.innerText = "Button Clicked");
});

// 

let output = document.getElementById("output");

document.getElementById("button").addEventListener("click", function() {
    console.log( output.textContent = "Button Clicked");
});

// MOUSEOVER

let Box = document.getElementById("Box");
Box.addEventListener("mouseover", function(){
    console.log(output.textContent = "Mouse over");
});

// MOUSEOUT

Box.addEventListener("mouseout", function(){
    console.log(output.textContent = "Mouse left");
});

// Keydown

document.getElementById("input").addEventListener("keydown", function(e){
    console.log(output.textContent = "key pressed: " + e.key);
     
});

// submit

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    console.log(output.textContent = "Form Submitted");
});


// 

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    let p = document.createElement("p");
    p.textContent = "Added Paragraph";
    document.body.appendChild(p);
});

//

let count = 0;
let a = document.getElementById("a")

function countIncrease(){
    count++;
    a.innerHTML = "Button Clicked:   " + count +   "times"
};

// 

let value = 10;

let dec =document.getElementById("dec");
dec.addEventListener("click", () => {
    value--;
    document.getElementById("OUTPUT").innerText = "Valve : " +value;
})

// 













