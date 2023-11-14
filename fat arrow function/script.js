function sum() {  //Named Function
    var a = 5;
    var b = 10;
    return a + b;
}
console.log(sum());

//ES6
const add1 = function () { //Anonymous Function
    let a = 15;
    let b = 10;
    return a + b;
}
console.log(add1());

const add2 = () => {  //Fat Arrow Function
    let a = 25;
    let b = 10;
    return a + b;
}
console.log(add2());

//T2
let a2 = 20;
let b2 = 30;
const add3 = () => {
    return a2 + b2;
}
console.log(add3());

//T3
let a3 = 30;
let b3 = 30;
const add4 = () => a3 + b3;
console.log(add4());

//T4
let a4 = 40;
const add5 = (b4) => a4 = b4;
console.log(add5(40))

//T5
const add6 = (a5, b5) => a5 + b5;
console.log(add6(99, 11))
