// 1. arrow function
const arrow = (a, b) => { // explicite return
    return a + b;
}
console.log(arrow(3, 3));

// 2. react IMP <--------------------------------------------------- IMP

const arrow_implicite = (a, b) => (a + b)

console.log(arrow_implicite(2, 3));

// 3. object return in implicite function

const obj_imp = () => ({ namee: "mihir" }) // mjst be wraped in parentheses {}

console.log(obj_imp());

// 4. arrow function vs variable function where to put function is called hoisting

console.log(normal(3)) // can be called before function defination
function normal(num) {
    return num
}

const variable = function (num) {
    return num
}
console.log(variable(5)); // can't be called before function defination
    
// 5. Immediately Invoke Function Expression (IIFE)

(function call_sort(){ // called named iife
    console.log(`calling without name`);
})(); // must use semicolon 

// 6. arror IIFE

((name)=>{ // called simple iife
    console.log(`My name is: ${name}`);
})("mihir"); // must use semicolon 
