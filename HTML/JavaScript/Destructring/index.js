// Destructuring --> it is used to extract values from arrays and objects and store them in variables in a clean and readable way.
                 // cleaner code, less repetition, easier to read.

// Array destructuring 

let a = [1,2,3,4];

let [A, B, C, D] = a;

console.log(a);
console.log(A);
console.log(B);
console.log(C);
console.log(D);


// skip values

let num = [10, 20, 30, 40];

let [x, , y, ] = num;

console.log(num);

console.log(x);

console.log(y);

// 

function sum([a, b]){
    console.log(a + b);
};
sum([100, 100]);

// // //

let arr = [1,[2,3]];

let [a1, [a2, a3]] = arr;

console.log(a1);

console.log(a2);

console.log(a1, a3);

console.log(a1, a2, a3);


// 

let array = [10, [20, [30, 40]]];

let [n1, [n2, [n3, n4]]] = array;

console.log(n1);

console.log(n2);

console.log(n3);

console.log(n1, n2, n3, n4);

console.log(n1, n2, n3);

console.log(n1, n3);

// skip values 

let data = ["A", ["B", "C", "D"]];

let [, [p, ,q]] = data;

console.log(p);

console.log(q);

console.log(p,q);

console.log(data);

// 
//object destructuring 

let emp = {
    Name : "Anitha",
    salary : 15000,
    id : 103,
    city : "Hyderabad"
};

let { Name, salary, id, city } = emp;

console.log( Name);

console.log(salary);

console.log(id);

console.log(city);

console.log( Name, "|" , salary, "|" ,id, "|" ,city);

// 

let student = {
    N : "Balu",
    marks : {
        math : 90,
        science : 75
    }
};

let   {N, marks : { math , science }} = student;

console.log("math score:", math);

console.log("science score:", science);

console.log("Total score:",math + science);

console.log("Student Name:",N);

console.log(student);


// 
let d = {
    name : "Anu",
    scores : [90,60]
};

let {scores : [Telugu, Hindi]} = d;

console.log("Telugu score:", Telugu);

console.log("Hindi score:", Hindi);

// 
let person = {
    Pname : "Viha"
};

let { Pname, country = "India"} = person;

console.log(country);
console.log(Pname);
console.log(Pname, "from", country);

// 
// 
// 
let user = {
    ID : 13409,
    profile : {
        username: "Raashi",
        email: "raashi@gmail.com" 
    }
};

let {ID, profile:{ username, email}} = user;

console.log(ID);

console.log(username,email);

console.log(ID, username, email);

// 

function getScore({ name, marks:{math}}){
    console.log(name , "scored", math);
    
};

getScore({
    name : "Siva",
    marks : {math : 76}
});

// 

// iteration & Generators

// iteration --> it accessing values one by one from given data

let Array = [1,2,3];

for(let a of Array){
    console.log(a);
}

// 

let val = [10,20,30,"A","B"];

console.log(val);


let i = val[Symbol.iterator]();

console.log(i.next());

console.log(i.next());

console.log(i.next());

console.log(i.next());

console.log(i.next());

console.log(i.next());


// generators --> a function that pauses execution and returns multiple values over time using yield.

function* nums(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let g = nums();

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

console.log(g.next());

// 

function* fruits(){
    yield "Orange";
    yield "Kiwi",
    yield "Banana"
}

for (let i of fruits()){
    console.log(i);
}

//

function* c(){
    yield 1;
    yield 2;
    yield 4;
}

let gen = c();

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

//
function* value(){
    yield "A";
    return "Done";
} 

let G = value();

console.log(G.next());
console.log(G.next());
console.log(G.next());


// 

function* countUp(limit){
    for (let i = 1; i <= limit; i++ ){
        yield i;
    }
}

for (let num of countUp(6)){
    console.log(num);

}

//
 




























