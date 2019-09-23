//16 - JavaScript Module Pattern and Revealing Module Pattern
//Video Length 18:04
let counter = (function ()
{
    //private stuff
    let count =0;

    function print(message)
    {
        console.log(message + "----" + count);
    }

    //return an object
    return {
    
        get: function () { return count;},
        set: function (value) { count = value;},

    increment: function()
    {
        count += 1;
        print ("After increment");
    },
    reset: function()
    {
        print("before reset");
        count =0;
        print("After rest");

    }
    }
})();
// console.log(counter.count);
counter.increment();
counter.increment();
counter.increment();
counter.set(10);
console.log(counter.get());
counter.reset();

//The reason of doing it this way is because some variables collapse when the code is very long, if the variables
//are in the global scope, then they could collapse or be duplicate when complementing with other developers code.
//so, the recommendation is to always do objects, methods and functions in order to avoid this problem..
//because, when a variable is created in a function, it only exists in that function, meaning we can create the variable X 
//in multiple functions without any problem, because they will all be different X´s for each function.