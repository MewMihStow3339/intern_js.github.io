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

mp.set("name", "mihir");
mp.set("age", 17);
mp.set("hobby", "programming and gaming");

for (const [key, val] of mp) {
    console.log(`${key} is: ${val}`);
}

// 4. foreach

const lang = ["js", "ts", "React", "Angular"]

const values = lang.forEach((item) => { // does't return any values
    console.log(item);
})

// 5. filter

const mynums = [1, 2, 3, 4, 5, 7, 8, 9]

const nums = mynums.filter((num) => num > 4) // does return values

console.log(nums);

// 6.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);