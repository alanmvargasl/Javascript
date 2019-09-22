//JavaScript Iteration Statements
//Video Length 12:24


//for
let array = [1,2,3,4,5,6];
for (i=0;i<array.length; i++)
{
    console.log(array[i]);
}

let desition = false;
let number =0;
//while
while (desition == false)
{
    console.log("I am inside the while until the number = 10");
    number++;
    
    if (number == 10)
    {
        desition = true;
    }

}