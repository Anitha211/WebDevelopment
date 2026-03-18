// Async & await ---> 
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

async function calculate() {
    let a = 5;
    let b = 10;
    return a + b
}
calculate()
.then((result) => {
    console.log(result);
});

// 

async function check(num) {
    if(num > 10){
        return "Largest"
    } else {
        return "smallest"
    }
}
check(5)
.then((res) => {
    console.log(res);
})

// 

function getVal(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Done")
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

function square(nums){
    return Promise.resolve(nums*nums)
}

async function cal(){
    let i = await square(7);
    let j = await square(10)

    console.log("square of i:", i);
    console.log("square of j:", j);
    console.log("sum of i and j:", i + j);
}
cal();

// 

function success(){
    return Promise.resolve("Success")
}

function failure(){
    return Promise.reject("Error")
}

async function getAll(){
    let Result = await Promise.allSettled([success(),failure()])
    console.log(Result);
    
}
getAll();

// 

function double(num){
    return Promise.resolve(num * 5)
}

async function getDouble(){
    let D = await Promise.all([
        double(5),
        double(10)
    ]);
    console.log(D);
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

function delay(n){
    return new Promise(function (res) {
        setTimeout(function () {
            res(n);
        }, 1000)
    })
}

async function test(){
    let a = await delay(1);
    let b = await delay(2);
    let c = await delay(3);

    console.log(a+b+c);
    
}
test();


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
greaterVal(7);


// 

