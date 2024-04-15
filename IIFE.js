//immediate invoked function expressions


(function connect() {
    console.log(`db connected`);
})();

//for immediate exicuting the function this pattern use to create a priavate scope 
//for variables and avoide  polluting the global scope.

( () => {
    console.log(`db connected2`)
})();