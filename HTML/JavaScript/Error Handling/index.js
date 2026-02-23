// Error Handling --> is used to handle the errors  
// try --> checks errors
// catch ---> handle the errors
// throw ---> create a own error
// finally --> always runs
        
console.log("Hello");

// console.log(hai);

try {
    console.log(hai);
} catch (error) {
    console.log(error);
}

console.log(123);

// 

try {
    console.log("Try");
} catch (error) {
    console.log("catch");
} finally {
    console.log("finally");
    
} 

// 
try {
    let x = 10;
    x();
} catch (error) {
    console.log("Type Error");
    
} 


// 
try {
    console.log("Start");
    throw new Error("somethin went wrong");
    console.log("end");
} catch (error) {
    console.log(error);
} finally {
    console.log("finally execute");
    
}

// 
function checkAge(age){
    if(age < 18){
        throw "Not eligible"
    }
    return "Eligible";
}

try {
    console.log(checkAge(16))
} catch (error) {
    console.log(error);
    
}

// 

function checkNum(num){
       if(num < 0){
        throw "Invalid Number"
       }
       return "Valid Number"
}
try {
    console.log(checkNum(4));
    
} catch (error) {
    console.log(error);
} finally {
    console.log("Execution Completed");
    
};

try {
    console.log(checkNum(-4));
    
} catch (error) {
    console.log(error);
} finally {
    console.log("Execution Completed");
    
};


// 

for(let i = 1; i <= 3; i++){
    try {
        if(i == 2){
            throw "Error at 2"
        }
        console.log(i);
        
    } catch (error) {
        console.log(error);
        
    } 
}

// 

function div(a,b){
    if (b == 0){
        throw "Cannot divided by zero"
    }
    return a / b;
}
try {
    console.log(div(12, 2));
    
} catch (error) {
    console.log(error);
    
}

// 

// 
function check(value){
    return new Promise(function(resolve, reject){
        if(value < 0){
            reject ("Invalid value")
        } else {
        resolve (value)
        }
    });
}

async function checkVal(){
    try {
        let a = await check(5);
        let b = await check(-4);
        console.log(a, b);
    } catch (error) {
        console.log(error);
        
    }
}
checkVal();

//













