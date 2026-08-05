// Destructuring --> it is used to extract values from arrays and objects and store them in variables in a clean and readable way
// cleaner code, less repetition, easier to read.

// Array destructuring 

let array = [1, 2, 3, 4, 5]

let [A, B, C, D, E] = array;

console.log(array);
console.log(A);
console.log(B);
console.log(C)
console.log(D);
console.log(E);

// 

let fruits = ["Apple", "Mango", "Banana"]

let [first, second, third] = fruits;

console.log(fruits);
console.log(first);
console.log(second);
console.log(third);
console.log(first,third);

// 

let d = [11]
let [d1, d2 = 22] = d

console.log(d1);
console.log(d2);

console.log(d);

// 

let arr = [10, [20, [30, 40]]];

let [n1, [n2, [n3, n4]]] = arr;

console.log(n1);

console.log(n2);

console.log(n3);

console.log(n1, n2, n3, n4);

console.log(n1, n2, n3);

console.log(n1, n3);

console.log(arr);

// 

let x = 1;
let y = 2;

[x, y] = [y, x]

console.log(x);
console.log(y);

// Object destructuring 

let user = {
    name: "Bob",
    age: 22
}

console.log(user);

let { name, age } = user;

console.log(name);
console.log(age);

// 

let emp = {
    Name: "Anitha",
    salary: 15000,
    id: 103,
    city: "Hyderabad"
};

let { salary, id, city } = emp;

// console.log( Name);

console.log(salary);

console.log(id);

console.log(city);

// 

let student = {
    name: "Anu",
    scores: [90, 60]
};

let { scores: [Telugu, Hindi] } = student;

console.log("Telugu score:", Telugu);

console.log("Hindi score:", Hindi);

// 

let employee = {
    id: 101,
    details: {
        Name: "Lakshmi",
        department: "Frontend"
    }
};

let {details: {Name, department}} = employee;

console.log(employee);
console.log(Name);
console.log(department);

// 

let Student = {
    NAME: "Anitha",
    age: 22,
    city: "Kadapa"
};

let {NAME, ...rest} = Student;

console.log(Student);
console.log(NAME);
console.log(rest);

// 

let stu = {
    Studentname: "Balaji",
    marks: [85, 90, 80]
};

let {Studentname, marks: [p, q, r]} = stu;

console.log(stu);
console.log(Studentname);
console.log(p);
console.log(q);
console.log(r);

// Iterator & Generators - 

let Fruits = ["Apple", "Kiwi", "Orange"];

let iterator = Fruits[Symbol.iterator]();

console.log(Fruits);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 

let val = [10, 20, 30];

let i = val[Symbol.iterator]();

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());


// Generators - a function that pauses execution and returns multiple values over time using yield.

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = generateNumbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// 

function* demo() {
    console.log("Start");
    yield 10;

    console.log("Middle");
    yield 20;

    console.log("End");
}

let generator = demo();

generator.next();
generator.next();
generator.next();
generator.next();
generator.next();

// 

function* idGenerator() {
    let Id = 1;

    while(true) {
        yield Id++;
    }
}

let g = idGenerator();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// 

function* evenNumbers() {
    let num = 2;

    while (true) {
        yield num;
        num += 2;
    }
}

let even = evenNumbers();

console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);
console.log(even.next().value);

// 

function* fruitsItem() {
    yield "Apple";
    yield "Banana";
    yield "Mango"
}

for(let fruit of fruitsItem()) {
    console.log(fruit);
    
}

// 





















