// OBJECT -> it is a collection of keys-value pairs
// 

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

// Deleting the value

delete person.age;
console.log(person);

// new object -> new creates a new object.

let car = new Object();
console.log(car);

car.brand = "Honda";
car.model = "City"
console.log(car);

// Constructor way -> A constructor is a function that builds new objects.
//                   ~ "this" keyword used to create an object.

function Student(name, age, course, id) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.id = id;
}

let s1 = new Student("Anitha", 23, "javascript", 101);
console.log(s1);

let s2 = new Student("Vidya", 23, "javascript", 202);
console.log(s2);

let s3 = new Student("Chikki", 25, "javascript", 303); console.log(s3);

// 

let employee = {
    name: "Ankitha",
    role: "Developer",
    salary: "20000"
};

for (let key in employee) {
    console.log(key + ":", employee[key]);
}

// 

let stu = {
    name: "Priya",
    marks: {
        math: 90,
        English: 80
    }
}
console.log(stu.marks.math);

// class -> is a function inside a class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let P1 = new Person("Anitha", 19);
P1.greet();

// 

class Calculator {
    add(a, b) {
        return a + b;
    }
    mul(a, b) {
        return a * b;
    }
}

let cal = new Calculator();
console.log(cal.add(2, 3));
console.log(cal.mul(4, 5));

// 

class Students {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getResult() {
        if (this.marks >= 40) {
            console.log(this.name + "Pass");

        } else {
            console.log(this.name + "Fail");

        }
    }
}

let Stu = new Students("Siva", 50);
Stu.getResult();

// 

let object = {
    a: 1, b: 2, c: 3
};

let count = Object.keys(object).length;
console.log("length of object is ", count);

// sum of object values

let marks = {
    math: 50,
    English: 60,
    Science: 40
};

let sum = 0;
for (let key in marks) {
    sum += marks[key];
}

console.log("Total Marks: ", sum);

// 
let OBJ = {
    name: "Anasuya",
    age: 40
};

let arr = Object.entries(OBJ);
console.log(arr);

// 

class Stud {
    constructor(name, marks, grade) {
        this.name = name;
        this.marks = marks;
        this.grade = grade;
    }
}

let students = [
    new Stud("Meena", 86, "A"),
    new Stud("veena", 90, "A"),
    new Stud("Reena", 68, "C"),
    new Stud("vani", 75, "B")
];

for (stu of students) {
    if (stu.grade == "A") {
        console.log(stu.name, "got grade A with marks:", stu.marks);

    }
}

// merge two objects

let obj1 = {
    a: 1, b: 2
};
console.log(obj1);


let obj2 = {
    c: 3, d: 4
};
console.log(obj2);


let merge = { ...obj1, ...obj2 };
console.log(merge);


// Copying of objects - Normal copy, Deep copy, shallow copy

// Normal copy 

let o1 = { name: "Viya" };
let o2 = o1;

console.log(o1.name);
console.log(o2.name);

// 

let obj11 = { a: 1, b: 2, c: 3 };

let obj22 = obj11

console.log(obj11);

console.log(obj11);

// 

let user1 = { name: "Anu" }

let user2 = user1;

user2.age = 25;

console.log(user1);
console.log(user2);

// Shallow copy ->  with the help of spread operator

let Obj1 = {
    name: "Balaji",
    address: {
        city: "Pune"
    }
};

let Obj2 = { ...Obj1 };

Obj2.name = "Sai";
Obj2.address.city = "Hyderabad"

console.log(Obj1.name);
console.log(Obj1.address.city);


// 

let a = {
    x: 10, y: 20
};

let b = { ...a };

b.x = 50;

console.log(a.x);
console.log(b.x);

// 

let n1 = {
    numbers: [1, 2, 3, 4, 5]
};

let n2 = { ...n1 };

n2.numbers.push(6);

console.log(n1.numbers);

// 

let a1 = {
    name: "Gayatri",
    skills: ["Js", "Html"]
};

let a2 = { ...a1 };

a2.name = "Sindhu";
a2.skills[0] = "React";

console.log(a1.name);
console.log(a1.skills[0]);

// Deep copy -> it copies everything 

let d1 = {
    user: {
        name: "Aman"
    }
};

let d2 = JSON.parse(JSON.stringify(d1));

d2.age = 23;

console.log(d1);
console.log(d2);

// 

let student1 = {
    name: "Anu",
    age: 24,
    id: 203,
    course: "Java Script"
};

let deepcopy = JSON.parse(JSON.stringify(student1));

deepcopy.Institute = "NYB";

console.log(student1);
console.log(deepcopy);


// 

let STUDENTS = {
    Alice: 85,
    Bob: 92,
    Carol: 78
};

for (let key in STUDENTS) {
    console.log(key + ":" + STUDENTS[key]);
};

for (let score of Object.values(STUDENTS)) {
    console.log(score);
};

// 

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

let emp = {
    name :"Aman",
    age: 21,
    role: "Web Developer",
    salary: 20000
};

for(let [key, value] of Object.entries(emp)) {
    console.log(key, value);
};

// 

// math object --> is used to perform mathematical calculations

console.log(Math.PI);

console.log(Math.round(5.9));
console.log(Math.round(4.8));

console.log(Math.floor(4.9));
console.log(Math.floor(4.1));

console.log(Math.sqrt(45));

console.log(Math.pow(5, 2));

console.log(Math.floor(4.9));

console.log(Math.max(10, 5, 45, 8));
console.log(Math.min(10, 5, 45, 8));

let num = Math.floor(Math.random() * 10) + 1;
console.log(num);


// Date Object ->  is used to work with dates and time


let now = new Date();
console.log(now);

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getDate());



let date = new Date("2002-07-19")
console.log(date);



















