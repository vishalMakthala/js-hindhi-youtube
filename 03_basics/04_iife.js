// Immediately Invoked Function Expressin (IIFE)

// (function chai(){
//     // console.log(`DB CONNECTED`);
// })()
// function is affected with pollution of  global scope function 
//many times 
// to avoid those polutions IIFE is used
(function chai (){
    // named iife
    console.log(`DB CONNECTED $`);
})();
( (name) =>{
    console.log(`DB CONNECTED TWO  ${name}`);
})('hitesh')