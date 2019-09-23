/*function sayHello (name) {
    return ("My name is " + name);
}

console.log(sayHello("Alan"));
let name2 = sayHello("Alan"); // this cannot happen because it has no returning function.
name2();
*/
function sayHelloF (name) {
    return function () 
    {
        console.log("My name is " + name);
    }
}
let name = sayHelloF("alan");
name();

