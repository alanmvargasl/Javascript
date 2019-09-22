//video length 8:52
// JavaScript Type Coercion and Conversion
 let a = 10;
 let b = "2";
 let c = a + b; // it forces the INT to become a String to be able to add both variables.
 console.log("Answer" + c); 

 //we are converting number string to number int
 let d = parseInt(b,10);
 console.log (d);

 //we are trying to make a string into a number
 let f = parseInt("Itwontwork",10);
 console.log(f + " this is saying that the string i am trying to convert \n is not a number");

//We want to know if what the user entered is or is not a number
let g = isNaN(b);
console.log(g + " this is saying that the variable is not a type INT or Number");
