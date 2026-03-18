//  callbacks --> t is a function passed into another function and executed later.

function fetchData(a){
    setTimeout(() => {
        a("Data Received after 4seconds");
    }, 4000)
}

fetchData((data) => {
    console.log(data);
    
});

// 

function greet(name, callback){
    console.log("Hello " + name);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
    
}
greet("ANITHA", sayBye);

// 

// Promise -->

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

let num = 7;

let promise = new Promise(function(resolve, reject){
    if(num % 2 == 0){
        resolve("Even");
    } else {
        reject("Odd");
    }
})
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})

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

// Promise Methods --
//  Promise.All() --> if any promise is rejected then the entire result will rejects

let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then((r) => {
    console.log(r);
})
.catch((e) => {
    console.log(e);
})

// 

let a = Promise.resolve("resolve")
let b = Promise.reject("reject")

Promise.all([a,b])
.then((r) => {
    console.log(r);
})
.catch((e)=> {
    console.log(e)
});

// 

let A = Promise.resolve(10);
let B = Promise.resolve(10);

Promise.all([A, B])
.then(([A, B]) => {
    console.log(A+B);
})
.catch((e) => {
    console.log(e);
})

// 

let a1 = Promise.resolve(5);
let a2 =Promise.resolve(5);

Promise.all([a1, a2])
.then(([a1,a2]) => {
    console.log(a1*a2);
})

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

// 

function success(){
    return Promise.resolve("success");
};

function reject(){
    return Promise.reject("Error occurred")
};

Promise.all([success(),reject()])
.then((result) =>{
    console.log(result);
    
})
.catch((error) => {
    console.log(error);
});


// 

let P1 = Promise.resolve("Apple");

let P2 = Promise.reject("Onion");

let P3 = Promise.resolve("Kiwi");

Promise.all([P1, P2, P3])
.then(function(result){
    console.log("Resolve:", result);
})
.catch(error =>
    console.log("Reject:", error)
    
);

// 

let users = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json());

let posts = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json());

Promise.all([users, posts])
.then(([userData, PostData]) => {
    console.log("Users:", userData.length);
    console.log("Posts:",PostData.length);
})
.catch((error) => {
    console.log(error);
})

// 

let t1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("promise 1 is resolved");
    },5000);
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

let step1 = new Promise(function (resolve){
    setTimeout(function(){
        console.log("Step 1");
        resolve(100);
    },5000)
});

let step2 = new Promise(function (resolve){
    setTimeout(function(){
        console.log("Step 2");
        resolve(20);
    },2000)
});

Promise.all([step1, step2])
.then(function([a , b]){
    console.log("Total:",a + b);
})
.catch((error) => {
    console.log(error);
    
});

// 
// 
// promise.race() ---> it returns the first settled promise 

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

let pro1 = Promise.resolve("Fail race")
let pro2 = Promise.resolve("Resolve")

Promise.race([pro1, pro2])
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err)
})

// 

let T1 = new Promise(function(reject){
    setTimeout(function(){
        reject("Race is reject but Resolve")
    },5000)
})

let T2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Resolve")
    },3000)
})

Promise.race([T1, T2])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})

// 

function fast(){
    return new Promise(function(resolve){
        return new Promise(function(){
            resolve("Fast.........")
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


// 

let x = Promise.resolve("Instant");

let y = new Promise(function (resolve){
    setTimeout(function(){
        resolve("Delayed")
    },1000)
})

Promise.race([x,y])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

// 
// 
//promise.allSettled()---> it returns both resolve and reject

let b1 = Promise.resolve("Successfully");

let b2 = Promise.reject("Failed");

Promise.allSettled([b1, b2])
.then((result) => {
    console.log("allsettled:",result)
})
.catch((error) => {
    console.log(error)
})

//

let s1 = new Promise(function (resolve){
    setTimeout(function() {
        resolve("Done")
    },1000)
});

let s2 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("Failed////////////")
    },2000)
})

Promise.allSettled([s1,s2])
.then((result) => {
    console.log("Allsettled:",result);
})
.catch((error) => {
    console.log(error);
})

//

let u = Promise.resolve(100);

let v = Promise.reject("Error occurred!!!!!!!!");

let w = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(12345)
    },1000)
});

Promise.allSettled([u,v,w])
.then(result => 
    console.log("allSettled--",result)
)
.catch(error =>
    console.log("allSettled:",error)
);

// 
// 
// Promise.any() --> it returns only the first resolve condition

let r1 = Promise.resolve("ERROR 1!!");

let r2 = Promise.reject("ERROR 2!!");

Promise.any([r1, r2])
.then(result => console.log(result))
.catch(error => console.log(error));


let AA = Promise.reject("Error 11111");
let BB = Promise.resolve("Success 222");
let CC = Promise.resolve("Success 333");

Promise.any([AA, BB, CC])
.then(function (res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
})

// 

let Aa = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve("Fail 1..........");
    }, 1000)
})

let Bb = new Promise(function(resolve){
    setTimeout(function(){
        resolve("successed")
    },2000)
})

let Cc = new Promise(function(resolve){
    setTimeout(function(){
        resolve("successed22")
    },3000)
})

Promise.any([Aa, Bb, Cc])
.then((result) => {
    console.log("any:",result);
})
.catch((error) => {
    console.log(error)
})

// 

let X = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("Success after 1 second......")
    },1000)
});

let Y = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve ("success after 500ms........")
    },500)
});


let Z = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject ("Failed.......")
    },100)
});

Promise.any([X, Y, Z])
.then(result => console.log(result))
.catch(error => console.log(error))

// 
// 
