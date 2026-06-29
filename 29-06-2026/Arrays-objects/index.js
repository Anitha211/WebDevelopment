// Arrays -> arrays are used to stored the collection of data.

let array = [1, 2, 3, 4]
console.log(array);

// Array Methods

// push() -> is used add an elements to the end of the array
let fruits = ["Apple", "Mango", "Orange"];
console.log(fruits);

fruits.push("Banana");
console.log(fruits);

// pop() -> used to revome last element from array

let num = [1, 2, 3, 4, 5, 6, 100, 200]
console.log(num);

num.pop();
console.log(num);

//unshift() -> used to add element at start 

let b = [2, 3]
console.log(b);

b.unshift(1);
console.log(b);

// shift() -> used to remove first element in array

let first = ["A", "B", "C", "D", "E"];
console.log(first);

first.shift()
console.log(first);

// sum of even numbers in a array

function sumEven(arr) {
    let add = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            add += arr[i];
        }
    }
    return add;
}
console.log(sumEven([1, 2, 3, 4, 5, 6, 7]));

// 

let sumArr = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i]
}

console.log(sumArr);
console.log("sum:", sum);

// map() -> it is used to create a new array
//       -> it changes every element in array

let Arr = [1, 2, 3, 4, 5, 6];

console.log(Arr);

let double = Arr.map(n => n * 2);

console.log(double);

// filter() -> returns elements that satisfy a condition

let even = Arr.filter(num => num % 2 === 0);

console.log("Even:", even);

// 

let arrays = [1, 2, 3, 4, 5, 6];

let Add = arrays.filter(sum => sum + 2);

console.log(Add);


// reduce() --> it reduces the array into a single value  

let ARR = [1, 2, 3, 4];
let add = ARR.reduce((total, num) => total + num, 0);

console.log(add);

// includes() => checks values exists (returns true , false)

let i = ["Apple", "Orange"]
console.log(i.includes("kiwi"));
console.log(i.includes("Apple"));

// concat() -> combine two arrays

let c1 = ["a"]
let c2 = ["b"]

let concat = c1.concat(c2);
console.log(concat);

// reverse() -> used to reverse the array

let re = [1, 2, 3, 4, 5, 5, 5, "a", "b"];

re.reverse();
console.log(re);

// 

function reverseWords(sentence) {
    return sentence
        .split("")
        .map(word =>
            word.split("").reverse().join(""))
        .join("");
}

console.log(reverseWords("Hello World"));

// 

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// indexOf() -> is used to find a particular element in a array
//               if the element is not present in the array then it returns -1

let Index = ["abc", "bcd", "cde"]

console.log(Index.indexOf("bcd"));
console.log(Index.indexOf("def"));

//

function findIndex(letters, value) {

    return letters.indexOf(value);
}
let letters = ["a", "b", "c", "d", "e"];

console.log(letters);

console.log(findIndex(letters, "b"));
console.log(findIndex(letters, "f"));

// find max number 

let maxArr = [5, 34, 56, 2, 33, 79];
let max = maxArr[0];

for (let i = 1; i < maxArr.length; i++) {
    if (maxArr[i] > max) {
        max = maxArr[i]
    }
}
console.log(maxArr);
console.log("Max:", max);

// Reverse an array

let revArr = [1, 2, 3, 5, 46]
let reverse = [];

for (let i = revArr.length - 1; i >= 0; i--) {
    reverse.push(revArr[i])
}
console.log(revArr);
console.log("Reverse Array:", reverse);

// Count even numbers

let countArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 0;

for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] % 2 == 0) {
        count++
    }
}
console.log(countArr);
console.log("Even Count:", count);

// Employeee records

let employees = [
    { name: "Anitha", salary: 20000 },
    { name: "Bob", salary: 25000 },
    { name: "Veena", salary: 35000 }
];

console.log(employees);

employees.forEach(function (emp) {
    console.log(emp.name + " - " + emp.salary);
});

// convert names to uppercase

let names = ["anu", "lucky", "rahul", "chotu"];

console.log(names);

let uppercase = names.map(function (n) {
    return n.toUpperCase();
});

console.log(uppercase);

// 

let employee = [
    { id: 1, name: "Arun", salary: 20000 },
    { id: 2, name: "Kumudini", salary: "55000" },
    { id: 3, name: "Priya", salary: 40000 }
];

console.log(employee);

let highSalary = employee.filter(emp =>
    emp.salary > 35000);

let name = employee.map(emp => emp.name);

let totalSalary = employee.reduce((sum, emp) => sum +
    emp.salary, 0);

console.log(highSalary);
console.log(name);
console.log(totalSalary);

////////////////////////////////////////////

// OBJECT -> it is a collection of keys-value pairs

let person = {
    name: "John",
    isStudent: true,
    age: 19
}

console.log(person);
console.log(person["name"]);
console.log(person["isStudent"]);

// Adding a new value 

person.city = "Kadapa";
console.log(person);

person.id = 101;
console.log(person);

// new object -> new creates a new object.

let car = new Object();
console.log(car);

car.brand = "Honda";
car.model = "City"
console.log(car);

// class object - 

class studentData {
    constructor(name, age, course, id) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.id = id;
    }
}

let s1 = new studentData("Anitha", 23, "java", 101);
console.log(s1);

// 

function Employee(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
}
let emp = [
    new Employee("Meena", 101, 25000),
    new Employee("veena", 101, 17000),
    new Employee("Reena", 101, 20000)
];
for (let i of emp) {
    if (i.salary >= 20000) {
        console.log(i.name, "has high salary:", i.salary);
    }
}

// 

let cart = {
    item: "shoes",
    quantity: 12,
    price: 2500,
    total() {
        return this.quantity * this.price;
    }
}

console.log(cart.total());

// 

let book = {
    title: "Web Development",
    author: "John",
    available: true,

    borrow() {
        this.available = false;
    }
}

book.borrow();

console.log(book);

// 

let product = {
    name: "HeadPhones",
    price: 3000,
    discount: 10,

    finalPrice() {
        return this.price - (this.price * this.discount/100)
    }
};

console.log(product.finalPrice());

// 

let account = {
    name: "Vidya",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        console.log("Balance:", this.balance);
    },

    withdraw(amount) {
        this.balance -= amount;
        console.log("Balance:", this.balance);
        
    }

}

account.deposit(2000);
account.withdraw(1000);

// object.keys --> it returns arrays of all keys in an object
// object.values --> it returns all values of an objects
// object.entries --> it returns array of key-values pairs.

let k = {
    name: "Babu",
    age: 14,
    class: 7,
    marks: 85
};

console.log(Object.keys(k));

console.log(Object.values(k));

console.log(Object.entries(k));

Object.keys(k).forEach(key => {
    console.log(key + ":" + k[key]);
});

for(let value of Object.values(k)){
    console.log(value);
};

// 

//sum of object values

let marks = {
    math: 50,
    English: 60,
    Science: 40
};

let Sum = 0;
for (let key in marks) {
    Sum += marks[key];
}

console.log("Total Marks: ", Sum);

//Date Object 

let date = new Date();

console.log(date);

console.log(date.getFullYear());

console.log(date.getDate());

console.log(date.getHours());

console.log(date.getMinutes());

console.log(date.getSeconds());

console.log(date.toDateString());

console.log(date.getDay());

// 
let d = new Date();
let day = d.getDay();

if(day === 0 || day === 6){
    console.log("Weekend");
    
} else {
    console.log("Weekday");
    
};

// Math object

let Num =Math.floor(Math.random() * 10) + 1;

console.log(Num);

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);

// 

let arr = [10, 25, 5, 38]

console.log(Math.max(...arr));

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

















