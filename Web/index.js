// Flatten Nested Array 

let arr = [1, [2, [3, [4]]]];

console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(Infinity));

// 

// function factorial(n){

//     for(let i = 2; i <= n; i++ ){

//         for(let j =2; j <= n; j++ ){
            

//         }

//     }

// }

// console.log(factorial(5));


// 

// let arr = ["012", string, 123]

// function falsy(arr) {

// }

// 

let n = 5;

async function num() {
    for(let i = 1; i >= 5; i++){
        return n[i]
    }
}

console.log(num(5));






fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json)
.then(d => console.log(d))
.catch(e => console.log(e))
