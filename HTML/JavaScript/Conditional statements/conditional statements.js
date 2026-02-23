// Conditional Statements
// if -->
// if else
// if..else if..else
// switch statement
// Ternary

// if statement --> executs a block of code only if the condition is true

var number = 10;
if (number > 0) {
    console.log(number + " is a positive number.");
}

//
function checkNumber(num) {
    if (num < 0) {
        console.log(num + " is a Negative number.");
    }
}
var num = -5;
checkNumber(num);
//

var age = 20;
if (age <= 18) {
    console.log("You are an adult.");
}


// if-else statement --> executes one block of code if the condition is true, and different block of code if the condition is false

var age = 17
if (age >= 18) {
    console.log("You are eligible to vote.");

} else {
    console.log("You are not eligible to vote.");
}


var a = 15;
var b = 20;
if (a > b) {
    console.log(a + " is greater than " + b);

} else {
    console.log(a + " is less than " + b);

}


function compareNumbers(a, b) {
    if (a >= b) {
        console.log(a + " is greater than or equal to " + b);

    } else {
        console.log(a + " is less than " + b);

    }
}
var a = 15;
var b = 15;
compareNumbers(a, b);


//if else if else --->used to check multiple conditions
// Exam Result-----
var score = 85;
if (score >= 90) {
    console.log("Greade A");
} else if (score >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

//Traffic Signals----
var light = "yellow";
if (light == "green") {
    console.log("Go");
}
else if (light == "yellow") {
    console.log("slow down/wait");
}
else if (light == "red") {
    console.log("stop")
}
else {
    console.log("invalid signal")
}

// 
//Switch Statement ---> Allows to execute different blocks of code (compares one expression to many values)
var day =1; 
 switch (day) {
    case 1 :                                            
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
                console.log("wednesday");
                break;
                case 4:
                    console.log("Thursday");
                    break;
}


//
var choice = 5
switch (choice) {
    case 1:
        console.log("Pizza");
        break;
        case 2:
            console.log("Coke");
            break;
            case 3:
                console.log("Burger");
                break;
                case 4:
                    console.log("Momo's");
                     break;
                     default:
                        console.log("Item not avaliable");
                        break;
                    }

// ternary --> it is used to choose between two values based on condition.
// syntax ----->  condition ? valueIfTrue : valueIfFalse
var balance = 5000;
balance < 1000 ? console.log("Low balance") : console.log("Sufficient balance");


var username = "";
var massage = username? console.log("Welcome ${username}") : console.log("Please log in ");


var temp = 30;
temp < 0 ? console.log("freezing"):
temp < 15 ? console.log("Cold"):
temp < 25 ? console.log("warm"): console.log("Hot")





// turthy and falsy values 
// truthy values ---> non-zero numbers,non-empty strings,objects[],{},boolean
// falsy values ---> 0,false,"",null,undefined,Nan
var a = "javascript" ;
if (a) {
    console.log("True");
} else {
    console.log("False")
}

var b = 6;
if (b) {
    console.log("True");
} else {
    console.log("False")
}

var b = -0;
if (b) {
    console.log("True");
} else {
    console.log("False")
}

var BigInt = 0n;
if (BigInt) {
    console.log("True");
} else {
    console.log("False")
}

var b = "6.645";
if (b) {
    console.log("True");
} else {
    console.log("False")
}
//object
var user = { name : "petter"
};
if (user) {
    console.log("True");
}else{
    console.log("False")
}






                



