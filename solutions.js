let a = 20
let b = 30
let c = (a+b)
console.log(c);

let ab = 1042
let bc = 7
let quo = ab / bc
let rem = ab % bc 

console.log(quo);
console.log(rem);

let input = 8
for (let i = 1; i <= 10; i++) {
    let a = 8*i
    console.log(`8 *`,i,`=`,a);
}

const pi = 3;
console.log(pi*radius*radius);
console.log(2*pi*radius);

const ppi = 3;
const  rradius = 7;
console.log(ppi*rradius*rradius);
console.log(2*ppi*rradius);


const pii = 3;
const radiuss = 4;
let area = pii * radiuss * radiuss;
let perimeter = 2 * pii * radiuss;
console.log(area);
console.log(perimeter);


let num1 = 8
let num2 = 3
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(Math.floor(num1/num2));
console.log(num1%num2);

const agentName = "binod"
console.log(`Hi my name is ${agentName}`);


function celsiusToFahrenheit(C) {
    let F = (C * (9/5)) + 32;
    return F;
}

let celsius = 20;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);a



function celsiusToFahrenheit(C) {
    let F = (C * (9/5)) + 32;
    return F.toFixed(6);
}

let celsiuss = 20;
let fahrenheitt = celsiusToFahrenheit(celsiuss);
console.log("Temperature in Fahrenheit:", fahrenheitt);

const age = 20
switch (age) {
    case 28:
        console.log(`im young`);
        break;

    default:
        console.log(`im not young`);
        break;
}


const N = 40
if (N < 30) {
    console.log("less important");
    
} else {
    console.log("more important");
}

const num = 1
if (num > 1) {
    console.log("you entered more");
    
}if (num <= 1 ) {
    console.log("you entered less");
}


const numm = 4
if (num / 6) {
    console.log("divisible");
    
}else {
    console.log("not divisible")
}