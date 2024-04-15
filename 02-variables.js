// Three wAys to create variable

// #1

console.log("var");
var ac = 10;
//console.log(ac);

ac = 20;
//console.log(ac);

{
  var ac = 30;
}
//console.log(ac);

// #2 - Let

console.log("Let");
let bc = 10;
//console.log(bc);

// let bc = 20; - Error
bc = 20;
//console.log(bc);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error

// #3 
console.log("const");

const cc = 10;
//console.log(cc);

// cc = 20; //Error
//console.log(cc);

//SCOPE

let a = 300
if (true) {
  let a = 10
  const b = 20
  var c = 30
}
//console.log(a)
//console.log(b)
console.log(c)


function one(){
  const username = "sara"

  function two() {
    const website = "yutube"
    console.log(username);
    
  }
  //console.log(website);

  two()
}
one()
