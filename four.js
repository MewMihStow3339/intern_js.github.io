// 1. for of
const arr = ["one", "two", "three", "four"]

for (const val of arr) { // of most used for map,array, etc. 
    console.log(val);
}

console.log();

// 2. for in
const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three"
}

for (const key in arr) { // in most used for objects
    console.log(obj[key]);
}
console.log();

// 3.

const mp = new Map();

mp.set("name","mihir");
mp.set("age",17);
mp.set("hobby","programming and gaming");

for(const [key,val] of mp){
    console.log(`${key} is: ${val}`);
}