// tc39.es and MDN reference


// 1.
console.log("hello world");


//2.
const conts1 = 3.14; // can't be changed thoughout the code

var varr = "not changed" // can be re-inisialize
var varr = "changed" // can be re-inisialize

let var1 = "mihir" // can't be re-inisialize
let var2 = "shubham" // can't be re-inisialize
let var3 = "chintan" // can't be re-inisialize
let var4 = "soneir" // can't be re-inisialize

console.table([var1, var2, var3, var4]); // table view output

// 3.
let tricky1 = null
let tricky2 = undefined

console.log(typeof tricky1); // object 
console.log(typeof tricky2); // undefined

// 4.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // true because >= converts null into 0

// 5.
let strtonum = "mihir"
let num = Number(strtonum)
console.log(typeof num);
console.log(num); // NaN: Not an Number

// 6.
let strtonum2 = undefined
let num2 = Number(strtonum2)
console.log(typeof num2);
console.log(num); // NaN: Not an Number

// 7.
let convert_first

console.log("3" + 1); // 31
console.log(1 + "3"); // 13
console.log("3" + 1 + 2); // 312
console.log(1 + 2 + "3"); // 33

// 8.

let namee = "mihir";
let age = 17;

console.log(`Hello!, My name is: ${namee} and my age is: ${age}`);

// 9.

let str = new String("mihir");
