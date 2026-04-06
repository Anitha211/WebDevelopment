// Async and await ->  
    // async makes a function to return a promise
    // await makes a function to wait for a promise

async function a() {
    return "Async/Await";
}
a()
.then(function(b){
    console.log(b);
});


// 

console.log("start");

async function test(){
    console.log("Inside");
    return "Done"
}
test()
.then(function(result){
    console.log(result);
});

console.log("End");


// 


function getVal(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done....")
        },4000);
    })
};

async function hello() {
    return await getVal()
    
}

let result = hello();
console.log(result);

// 

function getValues(num){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num)
        },2000)
    })
}

async function printNum() {
    for(let i = 1; i <= 7; i++){
        console.log(await getValues(i));
        
    }
};
printNum();

// 

function double(num){
    return Promise.resolve(num * 5)
}

async function getDouble(){
    let mul = await Promise.all([
        double(5),
        double(10)
    ]);
    console.log(mul);
}
getDouble();

// 

function getEven(num){
    return Promise.resolve(num % 2 == 0);
}

async function checkNum(){
    let even = await getEven(6);
    if(even){
        console.log("Even");
    } else {
        console.log("Odd");
        
    }
}

checkNum();

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

function success(){
    return Promise.resolve("SUCCESS"); 
}

function failure(){
    return Promise.reject("ERROR")
}

async function getAll(){
    let Result = await Promise.allSettled([success(), failure()]);
    console.log(Result);
}
getAll();

// 

function delay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Finished after 2 seconds")
        }, 2000)
    })
}

async function run() {
    console.log("START");

    let Result = await delay();

    console.log(Result);
    console.log("END");
}
run();

// 






















