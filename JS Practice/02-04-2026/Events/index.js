// Event Performance - Normal Event, Throttling, Debouncing 

// Normal Event -> means attaching event listeners directly to each DOM element instead of uusing parent handler.

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Button Clicked");
});

// 

let double = document.getElementById("dblBtn");
double.addEventListener("dblclick", function () {
    console.log("Double Clicked");

});

// 

let output = document.getElementById("output")

let button = document.querySelectorAll(".button");

button.forEach(function (btn) {
    btn.addEventListener("click", function () {
        console.log(btn.textContent);

        output.textContent = "Clicked Button: " + btn.textContent;
    });
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

let clkBtn = document.getElementById("clickBtn");

let dblBtn = document.getElementById("DblBtn")

let hoverBtn = document.getElementById("hoverBtn")


let a = 0;
let b = 0;
let c = 0;

clkBtn.addEventListener("click", function () {
    a++;
    console.log("a (click): ", a);
    document.getElementById("a").textContent = "Click Count (a): " + a;
});

dblBtn.addEventListener("dblclick", function () {
    b++;
    console.log("b (double click): ", b);
    document.getElementById("b").textContent = "Double Click Count (b): " + b;
});

hoverBtn.addEventListener("mouseover", function () {
    c++;
    console.log("c(Mouseover): ", c);
    document.getElementById("c").textContent = "Mouse Over Count (c): " + c;

});

// 

// Throttling -> it makes a function run only once in a fixed time interval

let Count = 0;
let button1 = document.getElementById("btn1");

let Output = document.getElementById("output1");

button1.addEventListener("click", function () {
    Count++;
    console.log("Clicked: ", Count);
    Output.textContent = "Count: " + Count

}, 5000);

// 

let move = document.getElementById("A");

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



















