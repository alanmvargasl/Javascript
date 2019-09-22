//JavaScript Decision Statements
//Video Length 14:45 11/35

//if statement
let a = 1;
let b = 11;
let desition = null;
if (a == b) //is a the same as b?
{
    desition = true;
    
}
else {
    desition = false;
}

console.log(desition);

//ternary operator
a == b ? desition=true: desition=false; 
console.log(desition);

// the ternary does the same as the if statement but with
// a whole lot less lines. ONE LINE for Ternary
// and 10 lines for the IF statement.

switch (a)
{
    case 1: console.log("Youve chosen option 1");
            break;
    case 2: console.log("Youve chosen option 1");
            break;
    default: break;
}

