for (let i = 0; i <= 10; i++) {
    //console.log(i);
}
for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j )
    }
}

//WHILE-------------------
let index =  0

while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2

}

//d0 while------

do {
    
    console.log(`score is ${score}`);
    score++

} while (score <= 10);

//Array specific loops

