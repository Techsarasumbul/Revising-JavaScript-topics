//Basics

function loginUserMessage(username){
    if(username === undefined){
console.log("please enter a username"); 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("message"))


//Object-function
const user = {
    username: "sara sumbul",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sara sumbul",
    price:199
})

//problems


function addition(num1, num2) {
    return num1 + num2;
}
let result = addition(5,3);
//console.log(result);

//console.log(addition(5, 3));

function convert(minutes){
    return minutes * 60
}
let seconds = convert(5);
//console.log(seconds);


//Array-function
const myNewArray = [200, 400, 100, 600]

function returnFirstvalue(getArray) {
    return getArray[0]
    
}

console.log(returnFirstvalue(myNewArray))
