// timers

// setTimeOut

setTimeout(function() {
        console.log("Runs After 2 Seconds");
},1000);


// // clearTimeout

let aa = setTimeout(function() {
        console.log("Runs After 2 Seconds");
},1000);


// clearInteral --> stops a repating setInterval

let bb = setInterval(function() {
        console.log("Runs every Second");
},1000);
clearInterval(bb);

// setTimeout() --> executes a code onces after a specified delay

function sayHello(){
    console.log("Hello after 2 seconds");    
}
setTimeout(sayHello, 2000);

// setInterval ---> executes a code repeatedly at a fixed interval

let counter = 0;
let counterDisplay = document.getElementById("counter");

function countNumbers(){
    counter++;
 console.log(counterDisplay.textContent = "count: " + counter);

    if(counter === 5){
        clearInterval(intervalid);
    }
}
let intervalid = setInterval(countNumbers,2000);



// Asynchronous 

// callbacks --> it is a function passed an argument to another function, which is execited later


console.log("Start");

function sayHello(){
    console.log("Hello after 9 seconds");
    
}

setTimeout(sayHello, 10000);

console.log("end");

// 
function a1(s){
    console.log(s);
};
function one(a,b,c){
    console.log("One is executed");
    c(a+b);
};
one(1,2,a1);



// callback
let btn1 = document.getElementById("btn1");
let msg = document.getElementById("msg");

function showMessage(){
    console.log(msg.textContent = "Button Clicked");
}
btn1.addEventListener("click",showMessage);

// promise --> 

// let result = document.getElementById("result");

let p = new Promise(function(resolve,reject){
   let success = true;

   if(success){
    resolve("Promise resolved successfully");
} else {
    reject("Promise rejected")
}
});

p.then(function(result){
    console.log(result);
});
p.catch(function(error){
    console.log(error);
    
});

// 
let promise = new Promise(function(resolve, reject){
    let success = true;

    if(success){
        resolve("Success");
    } else {
        reject("Something went wrong");
    }
});

promise.then(function(result){
    console.log(result);
});
promise.catch(function(error){
    console.log(error);
});

//
let myPromise = new Promise(function(resolve, reject){
    let success = true;

    if(success){
    resolve("Promise resolved successfully");
} else {
    reject("Promise rejected")
}
    
});

myPromise.then(function(message){
    console.log(message);
    
});

myPromise.catch(function(error){
    console.log(error);
});

//
function checkNumber(num){
    return new Promise(function(resolve, reject){
        if(num > 10){
            resolve("Number is greater than 10")
        }else{
            reject("Number is less than 10")
        }
    });
}
checkNumber(6)
.then(function(result){
    console.log("SUCCESS:", result);
})
.catch(function(error){
    console.log("ERROR:", error);
});

// 
<div id="a">

    <div class="header">Header</div>


// 
{/* // promise.all() ---> if any one promise rejects then the entire result will rejects */}
                    
let p1 = Promise.resolve("Apple");

let p2 = Promise.resolve("Mango");

let p3 = Promise.resolve("Kiwi");

Promise.all([p1, p2, p3])
.then(function(result){
    console.log("Resolve:", result);
})
.catch(error =>
    console.log("Reject:", error)
    
);

// 

let a = Promise.resolve("10");
let b = Promise.reject("10");

Promise.all([a,b])
.then(function(result){
    console.log("Resolved:", result);
})
.catch(error =>
    console.log("Rejected:", error)
    
);

// 
let t1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise 1 is resolved");
    },500);
});


let t2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise 2 is resolved");
    },1000);
});


let t3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject("promise 3 is resolved");
    },1500);
});

Promise.all([t1,t2,t3])
.then(function(result){
    console.log("RESULT:", result);
})
.catch(error =>
    console.log("ERROR:", error)
  
);

// 

function fruits(){
    return Promise.resolve("Apple")
};

function veg(){
    return Promise.resolve("Onion")
};

Promise.all([fruits(), veg()])
.then(result => console.log(result))
.catch(error => console.log(error));

 {/* promise.race() ---> it returns the first settled promise */}

let ab = Promise.reject("ABC");
let ac = Promise.resolve("abc");

Promise.race([ab,ac])
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error)
});

// 


let promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("First");
    },1000);
});

let promise2 = new Promise(function(reject){
    setTimeout(function(){
        reject("Second");
    },500);
});

Promise.race([promise1, promise2])
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
});

// 

function fast(){
    return new Promise(function(resolve){
        return new Promise(function(){
            resolve("Fast")
        },1000);
    });
}

function slow(){
    return new Promise(function(resolve){
        return new Promise(function(){
            resolve("slow")
        },100);
    });
}

Promise.race([fast(), slow()])
.then(function(a){
    console.log(a);
})
.catch(function(b){
    console.log(b)
});



{/* //promise.allSettled()---> it returns both resolve and reject  */}


let b1 = Promise.resolve("Successfully");

let b2 = Promise.reject("Failed");

Promise.allSettled([b1, b2])
.then(result => 
    console.log(result)
)
.catch(error =>
    console.log(error)
)


//


let aaa = Promise.resolve(10);

let bbb = Promise.reject("Error occurred");

let ccc = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(1234567890)
    },1000)
});

Promise.allSettled([aaa, bbb, ccc])
.then(result => 
    console.log("allSettled:",result)
)
.catch(error =>
    console.log("allSettled:",error)
);


// 

function task1(){
    return Promise.resolve("Task 1 completed")
}
function task2(){
    return Promise.resolve("Task 2 completed")
}

Promise.allSettled([task1(), task2()])
.then(result => console.log(result))
.catch(error => console.log(error));


// promise.any() --> it returns only first resolve conditions


let v1 = Promise.reject("error!!!!!!!!!!!!");

let v2 = Promise.resolve("success!!");

let v3 = Promise.resolve("Another Success");

Promise.any([v1, v2, v3])
.then(result => console.log(result))
.catch(error => console.log(error));


// 

let r1 = Promise.reject("ERROR 1!!");

let r2 = Promise.reject("ERROR 2!!");

Promise.any([r1, r2])
.then(result => console.log(result))
.catch(error => console.log(error));

// 

let x = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("Success after 1 second......")
    },1000)
});

let y = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("success after 500ms........")
    },500)
});


let z = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject ("Failed.......")
    },100)
});

Promise.any([x, y, z])
.then(result => console.log(result))
.catch(error => console.log(error))

// 

function val1(){
    return Promise.resolve("...............")
}
function val2(){
    return Promise.reject("////////////////////")
}
Promise.any([val1(), val2()])
.then(result => console.log("ANY:",result))



// async/await ----> 

function getVal(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Done")
        },2000);
    })
};

async function hello() {
    return await getVal()
    
}

let result = hello();
console.log(result);




