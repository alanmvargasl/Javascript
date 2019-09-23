//returning functions from functions
//video length : 10:16


let myVariable = "i am in the global scope";

function one ()
{
    return function ()
    {
        console.log('this is the second function');
    }
}

let myVar = one();
myVar();