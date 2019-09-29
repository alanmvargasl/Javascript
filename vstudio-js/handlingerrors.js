/* let a = 9 * undefined / "panama";
console.log(a); */

function beforeTryCatch()
{
    let obj = undefined;
    console.log(obj.b);
    console.log(`IF the previous line shows the exception, this will never be executed!`);
}
// beforeTryCatch(); when this function is called, it gives an error because property B does not exist in obj!

function afterTryCatch()
{
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log(`IF the previous line shows the exception, this will never be executed!`);
    } catch (error) {
        console.log("This is an error!" + error.message);
    } finally {
        console.log("This will execute regardless of what happens in the TRYCATCH function, its function is to clear any resources we dont need anymore!");
    }
}
/* afterTryCatch(); //The try catch helps us prevent the program from closing by checking if the code or execution is correct, if it is not, it does
// whatever we tell it to! Awesome! */

function performCalculation(obj)
{

}