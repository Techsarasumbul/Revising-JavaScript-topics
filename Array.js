const myArr = [0,1,2,3,4,5,6,7,8,true]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);


//Array method

//push: Adds one or more elements to the end of an array and returns the new length of the array.

let myarr = [1,2,3];
myarr.push(4);

//pop: Removes the last element from an array and returns that element.

let myarr2 = [1,2,3];
let remove = myarr2.pop();

//shift: Removes the first element from an array and returns that element.

let myarr3 = [1,2,3];
let removed = myarr3.shift();

//unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.

let arr1 = [2, 3];
arr1.unshift(1);

//splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // Remove one element at index 2
// arr is now [1, 2, 4, 5]

//slice: Returns a copy of a portion of an array into new array selected from start to end (end not included) where start and end represent the index of items in that array.

let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4); // Returns [2, 3, 4]


//concat: Combines two or more arrays.

let arr3 = [1, 2];
let arr4 = [3, 4];
let combine = arr3.concat(arr4); // Returns [1, 2, 3, 4]

//spread

const arr5 = [1, 2, 3];
const arr6 = [4, 5, 6];

const combined = [...arr5, ...arr6]; // Creates a new array [1, 2, 3, 4, 5, 6]

console.log(Array.isAarray("sumbul"))// to check if it is array or not

console.log(Array.from("sumbul"))//to make it array
console.log(Array.from({name: "sumbul"}))//results in an empty array we have to define specific keys or values to convert in array.


