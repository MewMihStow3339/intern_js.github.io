// 1.

let arr = [0, 1, 2, 3, 4, 5]

console.log(arr.slice(1, 3));
console.log(`after slice: ${arr}\n`);

console.log(arr.splice(1, 3));
console.log(`after splice: ${arr}\n`);

// 2.

console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");

// 3.

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);

console.log(arr1);
console.log(arr2);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(0));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(0));

// 4.
var a = "mihir modhwadiya".split('');
var b = a.reverse();

console.log(a);