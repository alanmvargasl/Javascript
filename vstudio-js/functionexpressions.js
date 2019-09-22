//JavaScript Function Expressions 
//Video Length : 12:06 10/35 
//Really Good Video!

setTimeout(function () 
{console.log("i waited 2 seconds to run"); }, 2000 );

(function () 
{
console.log("This is an immediately invoked function expression");
})();
/*
An Immediately-invoked Function Expression (IIFE for friends) is a way 
to execute functions immediately, as soon as they are created. IIFEs are very useful
 because they don't pollute the global object, and they are a simple way to isolate variables 
 declarations.20 may. 2018 */

//example
number = 20; // this will run second.

(function () 
{
 let number = 10;
 console.log(number);    
})(); // this will run first because it is immediately invoked because of the ()

console.log(number);