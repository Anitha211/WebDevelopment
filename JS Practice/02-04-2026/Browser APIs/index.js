// Timer Api's - > used to run code after a delay or repeatedly,
// to control time based behavior in web apps

// setTimeout -> executes a code onces after a specified delay

setTimeout(() => {
    console.log("Hello after 2 seconds");
    
}, 2000);

// 

setTimeout(function () {
    // alert("Welcome to the website!");
},3000)

// 

let title = document.getElementById("title");

setTimeout(function () {
    console.log("Content Loaded!");
    title.innerText = "Content Loaded!"
},2000)

// 

console.log("Start");

setTimeout(() => {
    console.log("Runs after 4 seconds...");
    
},4000);

console.log("End");

// 

let time = 5;

function countDown() {
    if(time > 0){
        console.log(time);
        time--;
        setTimeout(countDown, 2000)
    } else {
        console.log("Time up");
        
    }
}

countDown();



// setInterval ---> executes a code repeatedly at a fixed interval

setInterval(() => {
    // console.log("Set Interval");
    
},2000);



let count = 0;

let id = setInterval(() => {
    console.log("Count: ", count);
    count++;

    if(count > 5){
        clearInterval(id)
    }
}, 1500);

// clearInterval -> stops a repating setInterval

let timer = setInterval(() => {
    console.log("Running....");
    
},500);

setTimeout(() => {
    clearInterval(timer)
},1000)

// 

let t = setInterval(() => {
    console.log("Running");
    
},1000);

function stop(){
    clearInterval(t)
};

// 

let a = setInterval(() => {
    console.log("A");
},1000);

let b = setInterval(() => {
    console.log("B");
},1500);

setTimeout(() => {
    clearInterval(a)
},3000);

setTimeout(() => {
    clearInterval(b);
}, 5000);

// 

// clearTimeout -> is used stop a setTimeout() before it runs

let t1 = setTimeout(() => {
    console.log("Executed");
},3000);

setTimeout(() => {
    clearTimeout(t1)
},1000)

// 

let c = setTimeout(() => {
    console.log("Message shown");
    
},5000);

function cancel(){
    console.log("Message cancelled");
    
    clearTimeout(c)
}

// 

let num = 0;
let Count = document.getElementById("count")

let T = setInterval(() => {
    num++;
    Count.innerText = "Count Num : " + num;
    console.log("count num : ", num);

    if(num == 5){
        clearInterval(T)
    }
    
},2000);

// 




