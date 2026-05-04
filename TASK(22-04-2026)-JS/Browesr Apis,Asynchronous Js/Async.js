// Browser Api's -> setTimeout, setInterval, clearTimeout, clearInterval 

// Timer Api's - > used to run code after a delay or repeatedly,
// to control time based behavior in web apps

// setTimeout : runs onces after delay

setTimeout(() => {
    console.log("Hello after 2 seconds");

}, 2000);

// 
console.log("Start");

setTimeout(() => {
    console.log("Runs after 4 seconds...");

}, 4000);

console.log("End");

// 
let time = 5;

function countDown() {
    if (time > 0) {
        console.log(time);
        time--;
        setTimeout(countDown, 2000)
    } else {
        console.log("Time up");

    }
}

countDown();

// 

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("loop", i);

    }, 1000)
}

// setInterval : Run repeatedly

setInterval(() => {
    // console.log("Runs repeatedly at every 1 second ");

}, 1000);

// 

let count = 0;

let id = setInterval(() => {
    console.log("Count: ", count);
    count++;

    if (count > 5) {
        clearInterval(id)
    }
}, 1500);


// clearTimeout : cancels the setTimeOut


let t1 = setTimeout(() => {
    console.log("Executed");
}, 3000);

setTimeout(() => {
    clearTimeout(t1)
}, 1000)


//clearInterval -> stops a repating setInterval

let timer = setInterval(() => {
    console.log("Running....");

}, 500);

setTimeout(() => {
    clearInterval(timer)
}, 1000)

// 

let c = setTimeout(() => {
    console.log("Message shown");

}, 5000);

function cancel() {
    console.log("Message cancelled");

    clearTimeout(c)
}


// //

setTimeout(() => {
    console.log("A");

    setTimeout(() => {
        console.log("B");

    }, 0)

}, 0)
console.log("C");

// 
// Asynchronous Js:
// Callbacks : function passed an argument, executes later

console.log("Start.........");

function sayHello() {
    console.log("Hello after 9 seconds............");

}

setTimeout(sayHello, 10000);

console.log("end,,,,,,,,,,,,,");

// 
function getData(callback) {
    setTimeout(() => {
        console.log("Data fetched data");
        callback();
    }, 2000)
}

function processData() {
    console.log("Processing data....");

}
getData(processData);

// 

function greet(name) {
    console.log("Hello " + name);
}

setTimeout(greet, 1000, "Anitha");

// 

let button = document.getElementById("btn");
let msg = document.getElementById("msg");

function showMessage() {
    console.log(msg.textContent = "Button Clicked");
}
button.addEventListener("click", showMessage);

// 

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
};

let btn = document.getElementById("btn1");
btn.addEventListener("click", displayDate)

// 

// promises: it gives a result in the future (success or failure).

let promise = new Promise((resolve, reject) => {
    let success = false;

    if (success) {
        resolve("Success")
    } else {
        resolve("Failed")
    }
});

promise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Done");
    });

// 

let p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello after 2 secomds")
    }, 2000)
})
p
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })

// 

console.log("Begin");

let P = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Async Done")
    }, 5000)
})
P
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

console.log("ENDED");


// Promise methods : Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()

// Promise.All() ->  if any promise is rejected then the entire result will rejects

let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
    .then((r) => {
        console.log("promise.all()--", r);
    })
    .catch((e) => {
        console.log(e);
    })

// 
function fruits() {
    return Promise.resolve("Apple")
};

function veg() {
    return Promise.resolve("Onion")
};

Promise.all([fruits(), veg()])
    .then(result => console.log(result))
    .catch(error => console.log(error));

//

let T1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Resolved")
    }, 1000);
});

let T2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Sucessfully resolved")
    }, 1500)
});

Promise.all([T1, T2])
    .then((rel) => console.log("Result: ", rel))
    .catch((err) => console.log("Error: ", err))

// 

// promise.race() ---> it returns the first settled promise 

let pro1 = Promise.resolve("Fail race")
let pro2 = Promise.resolve("Resolve")

Promise.race([pro1, pro2])
    .then(function (res) {
        console.log("PROMISE.RACE():- ", res);
    })
    .catch(function (err) {
        console.log(err)
    })

// 

let r1 = Promise.resolve("Immediate");

let r2 = new Promise((res) => {
    setTimeout(() =>
        res("Delayed"), 1000)
});

Promise.race([r1, r2])
    .then((res) => console.log(res));

// 

let T11 = new Promise(function (reject) {
    setTimeout(function () {
        reject("Race is reject but Resolve")
    }, 5000)
})

let T22 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Resolve....................")
    }, 3000)
})

Promise.race([T11, T22])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// 

// Promise.allSettled() -> it returns both resolve and reject

let a1 = Promise.resolve("Sucesss");
let a2 = Promise.reject("Error");

Promise.allSettled([a1, a2])
    .then((result) =>
        console.log("allSettled: ", result)
    )
    .catch((error) =>
        console.log(error)
    )

// 

let u = Promise.resolve(100);

let v = Promise.reject("Error occurred!!!!!!!!");

let w = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(12345)
    }, 1000)
});

Promise.allSettled([u, v, w])
    .then(result =>
        console.log("allSettled--", result)
    )
    .catch(error =>
        console.log("allSettled:", error));


// Promise.any() -> it returns only the first resolve condition

let a11 = Promise.resolve("ERROR 1!!");

let a22 = Promise.reject("ERROR 2!!");

Promise.any([a11, a22])
.then(result => console.log(result))
.catch(error => console.log(error));

// 

let d = Promise.reject("Success1")
let f = Promise.reject("Success");

Promise.any([d,f])
.then((res) => console.log(res))
.catch((e) => console.log(e))

// 

let X = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("Success after 1 second.")
    },1000)
});

let Y = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("success after 500ms.")
    },500)
});


let Z = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject ("Failed.")
    },100)
});

Promise.any([X, Y, Z])
.then(result => 
    console.log(result)
)
.catch(error => 
    console.log(error)
)

// 

// Async and await ->  
    // async makes a function to return a promise
    // await makes a function to wait for a promise


console.log("start11111111");

async function test(){
    console.log("Inside111111111");
    return "Done"
}
test()
.then(function(result){
    console.log(result);
});

console.log("End111111111111");

// 

function getVal(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done async")
        },4000);
    })
};

async function hello() {
    return await getVal()
    
}

let result = hello();
console.log(result);

// 

function wait(ms) {
    return new Promise(resolve => 
        setTimeout(resolve,ms)
    )
}

async function loop() {
    for(let i = 1;i <= 5 ; i++){
        await wait(1000);
        console.log(i,"( - after 1s)");
        
    }
}
loop();

// 

function check(value){
    return Promise.resolve(value);
}
async function greaterVal(num){
    if (num > 5){
        let x = await check("Greater")
        console.log(x);
} else {
    let y = await check("Lesser")
        console.log(y);
    }
};
greaterVal(2);

//




