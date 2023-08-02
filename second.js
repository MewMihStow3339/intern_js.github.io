// 1.

let arr = [0, 1, 2, 3, 4, 5]

console.log(arr.slice(1, 3));
console.log(`after slice: ${arr}\n`); // slice counts *start to before given maximum limit*

console.log(arr.splice(1, 3));
console.log(`after splice: ${arr}\n`); // splice counts *start to end of limit*

// 2.

// console.log("first");

// setTimeout(() => {        // --|
//     console.log("second");//   |--> this runed at end of code
// }, 0);                    // --|

// console.log("third");

// 3.

var arr1 = "john".split(''); // splits and converts into array
var arr2 = arr1.reverse(); // arr1.reverse() effects arr1 and arr2,it also change both to n,h,o,j  
var arr3 = "jones".split(''); // splits and converts into array
arr2.push(arr3); // push(adds) arr3: j,o,n,e,s to arr2 and also affects arr1 because arr1.reverde()

console.log(arr1); // output: [n,h,o,j, [j,o,n,e,s]]
console.log(arr2); // output: [n,h,o,j, [j,o,n,e,s]]

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(0)); // array 1: length=5 last=n,h,o,j,j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(0)); // array 2: length=5 last=n,h,o,j,j,o,n,e,s

// 4.
var a = "mihir modhwadiya".split('');
var b = a.reverse();

console.log(a);
/*
[
  'a', 'y', 'i', 'd',
  'a', 'w', 'h', 'd',
  'o', 'm', ' ', 'r',
  'i', 'h', 'i', 'm'
]
*/

// 4.

let age = Symbol("age") // symbol is datatype and this is way to declare it.

const obj = {
  name: "mihir",
  [age]: 17,
  hobby: "programing, gaming",
  email: "mihirmodhwadiya21@gmail.com",
}
console.log(obj.name);
console.log(obj["email"]);
console.log(obj[age]);


// 5.

obj["email"] = "mihir@gmail.com"; // can be chaged like this
console.log(obj["email"]);


obj.fun = function () {
  console.log("hello this is function");
}
console.log(obj.fun);
obj.fun()

obj.fun2 = function () {
  console.log(`hello this is ${this.name}`);
}
obj.fun2()
// Object.freeze(obj); // it restrict any objects to update after its diclaration like:

console.log(obj["email"]);
obj["email"] = "mihirrrrrrrrrrr@gmail.com"; // can't be chaged like this

