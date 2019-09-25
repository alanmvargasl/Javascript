/* let name = "bob";
let lastName = "Vargas";
console.log(`My name is ${name} and my last name is ${lastName}`);
let sentence = `This is my sentence and it is
really cool to write like this!
i can do lots of lines without any problem...
something i cant do with the " ", this is great.`;
console.log(sentence); */

function getReasonCount()
{
    return 2;
}
let interpolation = `Give me ${ (getReasonCount()==1) ? `One Reason` : `Manny Reasons` } `;
console.log(interpolation);