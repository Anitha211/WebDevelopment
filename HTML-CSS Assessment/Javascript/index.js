// Nested Array Flattening

function flattenArray(arr) {
    let result = [];

    for(let item of arr){
        if(Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));

// Remove Falsy Values from Array

function removeFalsyValues(arr){
    return arr.filter(item => Boolean(item));
}

let data = [0,1, false, 2, "null", undefined, NaN, "hello23"]
console.log(data);


console.log(removeFalsyValues(data));

// Memoization Function

function memoize(){
    let cache = {}

    return function (...args){
        let key = JSON.stringify(args)

        if(cache[key]){
            console.log("From Cache");
            return cache[key]
            
        }

        console.log("Calculated");
        let result = fn(...agrs)
        cache[key] = result;

        return result
        
    }
}

function fac(n){
    if(n === 0)
        return 1;
    return n * fac(n-1)
}

let memo = memoize(fac);

console.log(memoize(5));
console.log(memoize(5));
console.log(memoize(5));

// 













