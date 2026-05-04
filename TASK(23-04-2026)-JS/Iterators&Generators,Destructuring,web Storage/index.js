// Iterators and Generators:

// Iterators - it used to access values one by one by using next() method

let array = [11, 22, 33, 44];

console.log(array);

let i = array[Symbol.iterator]();

// console.log(i);

console.log(i.next());

console.log(i.next());
console.log(i.next());

console.log(i.next());

console.log(i.next());

// 

let str = "Java Script";
let iterator = str[Symbol.iterator]();

console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// Generators : a function that pauses execution and returns multiple values over time using yield.

function* myGenerators() {
    yield 1;
    yield 2;
    yield 3;
}

let G = myGenerators();

console.log(G.next());
console.log(G.next());
console.log(G.next());
console.log(G.next());

// 

function* num() {
    yield 10;
    yield 20;
    yield 30;
}

for(let n of num()) {
    console.log(n);    
}

// 

function* infinite() {
    let i = 1;
    while(true) {
        yield i++;
    }
}

let gen = infinite();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// 

function* test(){
    console.log("start");
    yield 1;
    console.log("Middle");
    yield 2;
    console.log("End");
}

let t = test();

console.log(t.next());
console.log(t.next());
console.log(t.next());

// 

function* numbers(n){
    for(let i = 1; i <= n; i++){
        yield i;
    }
}

let sum = 0;

for(let num of numbers(5)) {
    sum += num;
}
console.log("Sum of 1 to 5 numbers: ",sum);

// 

function* greet() {
    let name = yield "Enter name";
    yield `Hello ${name}`
}

let g = greet();

console.log(g.next());
console.log(g.next("Anitha"));

// 

function* evenNumbers(arr) {
    for(let num of arr) {
        if(num % 2 == 0) {
            yield num;
        }
    }
}

for(let value of evenNumbers([1,2,4,6,8,9,10,13,12,16,15])){
    console.log(value);
}

// 

function* square(arr) {
    for(let num of arr){
        yield num * num;
    }
}

for (let val of square([5,6,7,8,9])){
    console.log(val);
    
}

// 

// Destrusturing - it is used to extract values from arrays and objects and store them in variables in a clean and readable way
// cleaner code, less repetition, easier to read.


// Array Destructuring
let a = [1,2,3,4,5,6];
console.log(a);

let [A,B,C,D,E,F] = a;

console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);
console.log(F);

// 

let arr = [10, 20, 30, 40];

let [n1,  , n3] =arr;

console.log(arr);
console.log(n1);
console.log(n1, n3);

// 

let data = ["A", ["B", "C", "D"]];

let [, [p, , q]] = data;

console.log(p);

console.log(q);

console.log(p, q);

console.log(data);

// 

let Arr = ["A", "B", "C", "D"];

let [x, ...rest] = Arr;

console.log(x);
console.log(rest);

// 

let r = 5;
let s = 10;

[r, s] = [s, r];
console.log(r,s);
console.log(r);


// Object Destructuring: 

let user = {
    name: "Bob",
    age: 22
}

console.log(user);

let { name, age } = user;

console.log(name);
console.log(age);

// 

let person = {
    Name: "John",
    address: {
        city: "Hyderabad",
        pin:5000001
    }
};

let {Name, address: {city, pin}} = person;

console.log(person);

console.log(city,pin);

// 

let student = {
    name: "Anu",
    scores: [90, 60]
};

let { scores: [Telugu, Hindi] } = student;

console.log("Telugu score:", Telugu);

console.log("Hindi score:", Hindi);

// 

// WEB STORAGE :- it stores the data in the form of key-values pairs.

// local storage - it stores the data permanently,and the data remains after browser is closed


localStorage.setItem("name", "Local Storage");

console.log(localStorage.getItem("name"));

console.log(localStorage.removeItem("name"));
 

localStorage.clear()

// 
localStorage.setItem("name", "Balu")
console.log(localStorage.getItem("name"));

localStorage.setItem("course", "JavaScript")

localStorage.removeItem("course");

console.log(localStorage.getItem("course"));

// 

// session storage >>> it sortes data only for the current tab,
                    //  here the data will be remove when the browser is closed

sessionStorage.setItem("login", "true")

console.log(sessionStorage.getItem("login"));

sessionStorage.setItem("Item", "fruits")

console.log(sessionStorage.getItem("Item"));

// 

// let User = {
//     NAME: "Lucky",
//     age: 11
// };

// localStorage.setItem("User", JSON.stringify(User));

// let Data = JSON.parse(localStorage.getItem("user"));
// console.log(Data.age);

// 

let Student = {
    name : "Abhi",
    subject : "javaScript"
}

localStorage.setItem("Student", JSON.stringify(Student));

let d = JSON.parse(localStorage.getItem("Student"));

console.log(d.name);
console.log(d.subject);

//

let fruits = ["Apple", "Mango", "Kiwi"];

localStorage.setItem("fruits", JSON.stringify(fruits));

let storeFruits = JSON.parse(localStorage.getItem("fruits"));

console.log(storeFruits[0]);
console.log(storeFruits.length);


// 

let theme = localStorage.getItem("theme") || "light";

theme = theme === "light" ? "dark" : "light";

localStorage.setItem("theme", theme);

console.log(theme);

// 

let text = document.getElementById("text");
let login = document.getElementById("login");
let logout = document.getElementById("logout")

function checklogin(){
   let authToken = localStorage.getItem("authToken");

   if(authToken){
    text.innerText = "Hello User";
    login.style.display = "none";
    logout.style.display = "inline"
   } else {
    text.innerText = "Please Login";
    login.style.display = "inline";
    logout.style.display = "none"
   }
}


login.addEventListener("click", function(){
    localStorage.setItem("authToken", "abcd1234");
    checklogin();
    
});

logout.addEventListener("click", function(){
    localStorage.removeItem("authToken");
    checklogin();
});
checklogin();

// 

function saveName() {
    let Name = document.getElementById("input").value;

    localStorage.setItem("Name", Name)
}

function loadName(){
    let save = localStorage.getItem("Name");

    document.getElementById("output").innerText = save;

}
loadName();


// 

let themeText = document.getElementById("theme");

function dark(){
    localStorage.setItem("theme", "Dark");
    showtheme();
}

function light(){
    localStorage.setItem("theme", "light");
    showtheme();
}

function showtheme(){
    themeText.textContent = "Theme: " + 

    localStorage.getItem("theme")
}

showtheme();

// 








