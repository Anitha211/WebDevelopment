// Function Currying - it transforms a function with multiple arguments into to a series of functions.

function addtion(a) {

    return function(b) {

        return function(c){
                return a + b + c;
        }
    }
}

console.log(addtion(5)(10)(15));

// 

function mul(a) {

    return function(b) {

        return function(c) {
            return a * b * c
        }
    } 
}

console.log(mul(12)(12)(12));

// 

function discount(discountPrecent) {

    return function (price) {
        return price - (price * discountPrecent / 100)
    }
}

let tenPercent = discount(10);

console.log(tenPercent(1000));
console.log(tenPercent(2500));

// 

function minLength(length) {

    return function(value) {

        return value.length >= length;
    };
}

let validatePassward = minLength(8);

console.log(validatePassward("hello123"));

// 

function taxCalculator(taxRate) {

    return function(amount) {

        return amount + (amount * taxRate)
    }
}

let tax = taxCalculator(0.18);
console.log(tax(1000));

// Pure Function -  it always returnd the same output fot the same input

function add(a,b){
    return a + b;
}

console.log(add(3,5));
console.log(add(44,44));

// 

function sqr(n) {
    return n * n
}
console.log(sqr(4));

// 

function verify(mobileNum) {

    return function (otp) {

        return "OTP " + otp + " Verified successfully for " + mobileNum;
    };
}

console.log(verify("9867453214")(123456));

// / Impure function --> it is a function that dose not always return the same output 

let count = 0;

function inc(){
    count++;
    return count;
}

console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());

// 

function getRandom() {
    return Math.random() * 5;
}

console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());

// 

let Total = 0;
function addTotal(value){
    Total += value;
    return Total;
};
console.log(addTotal(3));
console.log(addTotal(3));


// Higher Order Function - it is function that takes another function 
//          as an argument or return that function as a result.

function greet(name) {

    return `Hello, ${name}`
}

function greetUser(name, callback) {
    return callback(name);
}

console.log(greetUser("John", greet));

// 

function add(a, b) {
    return a + b;
}

function calculate(a, b, c) {

    return c(a,b);
}

console.log(calculate(10, 20, add));

// 

function calculateMarks(marks, callback) {
    return callback(marks);
};

function getMarks(marks) {
    if (marks >= 90) {
        return "Grade A"
    } else if(marks >= 75) {
        return "Grade B"
    } else if(marks >= 50) {
        return "Grade C"
    } else {
        return "Fail"
    }
}

console.log(calculateMarks(95, getMarks));
console.log(calculateMarks(43, getMarks));

// 

function totalMarks(math, science) {
    return math + science;
}

function result(math, science, total) {
    return total(math, science);

}

console.log(result(85, 90, totalMarks));

// First class function - can assign a function to a variable ,passes arguments 
//                   function and return a function from another function.

let Num = [1,2,3,4];

let Sq = Num.map(function(num) {
    
    return num * num;
});

console.log(Sq);

// 

function add(a, b) {
    return a + b;
}

function multiply(a, b){
    return a * b;

}

function calculate(a, b, cal) {
    return cal(a, b);

}

console.log(calculate(10, 49, add));
console.log(calculate(99, 99, multiply));

// 

function calculateSalary(basic, bonus) {
    return basic + bonus;

}

let salary = calculateSalary;

console.log(salary(30000, 5000));

// 

function withdrawal(amount, charge) {

    return amount - charge;
}

let ATM = withdrawal;
console.log(ATM(5000, 144));

// 



