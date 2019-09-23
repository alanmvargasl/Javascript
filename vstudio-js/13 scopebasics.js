// Scope Basics

let a= "first"; // this is the only variable who is available in all
//other environments, because it was created in the global environment.

function scopeTest ()
{
    console.log(a); // if you create a variable inside a function
    //it will only exist inside that function.
}

scopeTest();


//This video explains a little about how variables and their Environments.

//Example:

function thisIsaTest()
{
    let a= 10;
    let b = 20;
    let c=20;
}

let d= a+b+c; // this will give an error because a,b and c do not exist
//outside of the function thisIsaTest