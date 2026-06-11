// Objects - is a collection of data and stores as key-value pairs.


let person = {
    name: "John",
    age: 24,
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person["name"]);

person.age = 30;
console.log(person);

// add new property

person.city = "London";
console.log(person.city);
console.log(person);

// deleting 

delete person.age;
console.log(person);
console.log(person.age);

// object with function 

let user = {
    name: "Alex",
    city: "Bangalore",
    greet() {
        return `Hello ${this.name}`
    }
}

console.log(user.greet());
console.log(user);

// find length of object

let product = {
    id: 1,
    name: "Laptop",
    price: 65000,
};

console.log(product);
console.log("Product length: ",Object.keys(product).length);

// printing only keys from object

console.log(Object.keys(product));

// printing only values from object

console.log(Object.values(product));

// both key and values

for(let key in product) {
    console.log(key, ":" , product[key]);
    
}

// nested object

let employee = {
    name: "Reddy",
    address: {
        city: "Kadapa",
        state: "Andhra Pradesh"
    }
};

console.log(employee);

console.log(employee.address);

console.log(employee.address.city);

// 

let cart = {
    mobile: 20000,
    laptop: 70000,
    headphones: 2999
}

let total = 0;

for (let item in cart) {
    total += cart[item];
}

console.log(cart);
console.log("Total price of items: ", total);

// Array of object

let emp = [
    {name:"John", salary: 35000},
    {name: "Sara", salary: 15000},
];

console.log(emp);


emp.forEach(employee => {
    console.log(employee.name);
});

// 

let calculator = {
    add(a,b) {
        return a + b;
    },

    sub(a,b) {
        return a - b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.sub(10, 5));

// 

let students = [
    {name: "Ravi", marks: 87},
    {name: "Ananya", marks: 75},
    {name: "Priya", marks: 60}
];

students.forEach(stu => {
    if(stu.marks >= 75){
        console.log(stu.name);
    }
});

// 

let marks = {
    math: 60,
    science: 75,
    english: 85
};

let highest = 0;

for (let subject in marks) {

    if(marks[subject] > highest) {
        highest = marks[subject];
    }
}

console.log(marks);

console.log(highest);

console.log(Object.keys(marks).length);

// spread() 

let personalInfo = {
    name: "Viha",
    age: 22
};

let address = {
    city : "Hyderabad",
    state : "Telangana" 
};

let User = {
    ...personalInfo,
    ...address
};

console.log(User);

// 

let Student = {
    name: "Riya",
    marks: 85,

    getGrade() {
        if(this.marks >= 90) return "A";
        if(this.marks >= 75) return "B";
        if(this.marks >= 50) return "C";

        return "Fail";
    }
};

console.log(Student.getGrade());

// 

let score = {
    math: 80,
    science: 95,
    english: 88
};

let highestSubject = "";
let highestScore = 0;

for (let subject in score) {

    if(score[subject] > highestScore) {

        highestScore = score[subject];
        highestSubject = subject;
    }

}

console.log(highestSubject, highestScore);

// 

let account = {

    balance: 1000,

    deposit(amount) {
        this.balance += amount
    },

    withdraw(amount) {
        this.balance -= amount
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);

// Copying/Cloning object
// Creating a duplicate object without affecting the original object.
// Types of copying - Shallow copy, Deep copy

let original = {
    name: "Anitha",
    age: 20,
};

let copy = {...original};

copy.age = 21;

console.log(original);
console.log(copy);

// Shallow copy - it creates a new object

let Original = {
    name: "Dhanvi",
    address: {
        city: "Hyderabad"
    }
};

let Shallow = {...Original}

Shallow.address.city = "Pune"

console.log(Original.address.city);
console.log(Shallow.address.city);

// Deep copy - it creates a completely independent copy

let Deep = JSON.parse(JSON.stringify(Original));

Deep.address.city = "Pune";

console.log(Original.address.city);
console.log(Deep.address.city);

// object.keys --> it returns arrays of all keys in an object
// object.values --> it returns all values of an objects
// object.entries --> it returns array of key-values pairs.

let Student1 = {
    name: "Babu",
    age: 14,
    class: 7,
    marks: 85
};

console.log(Object.keys(Student1));

console.log(Object.values(Student1));

console.log(Object.entries(Student1));

Object.keys(Student1).forEach(key => {
    console.log(key + ":" + Student1[key]);
});

for(let value of Object.values(Student1)){
    console.log(value);
};

//Math Object - used to perform mathematical operations

console.log(Math.PI);

console.log(Math.round(5.9));
console.log(Math.round(4.8));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.max(60, 30, 45, 8));
console.log(Math.min(10, 50, 45, 8));
console.log(Math.cbrt(27));
console.log(Math.pow(5, 2));
console.log(Math.floor(9.4));
console.log(Math.sqrt(45));

console.log(Math.random());

// 

let otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);

// 

let radius = 5;

let area = Math.PI * radius * radius;

console.log(area);

// Date Object -  is used to work with dates and time


let now = new Date();
console.log(now);

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.getHours());

let time = now.getHours() + ":" + 
now.getMinutes() + ":" + 
now.getSeconds();

console.log("Time: ",time);

let date = new Date("2002-07-19")
console.log(date);

// 

let birthYear = 2002;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);

























