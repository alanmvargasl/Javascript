//Truthy and Falsy - Evaluations!
let question = 1 < 2 ? true:false; //is 1 smaller than 2?
let paragraph = `This is a complete paragraph, and its purpose is to know if this paragraph is bigger than paragraph 2, what do you think?`;
let paragraph2 = `i am a small paragraph!`;
let question2 = paragraph.length > paragraph2.length ? true:false;

console.log(question);
console.log("Is paragraph 1 bigger than paragraph 2? " + question2);

//All these expressions are false by default.
if (false)          {} else {console.log(`False is Falsy`);}
if (null)           {} else {console.log(`null is Falsy`);}
if (undefined)      {} else {console.log(`undefined is Falsy`);}
if (0)              {} else {console.log(`0 is Falsy`);}
if (NaN)            {} else {console.log(`NaN is Falsy`);}
if (``)             {} else {console.log(`an empty string with single quotes is Falsy`);}
if ("")             {} else {console.log(`an empty string with double quotes is Falsy`);}

//Everything else is Truth
if (true)           { console.log(`True is Truthy`)}
if ({})             { console.log(`An Empty object is Truthy`)}
if ([])             { console.log(`An Empty Array is Truthy`)}
if (`Alan`)         { console.log(`A NON empty string is Truthy`)}
if (10)             { console.log(`A Positive integer is Truthy`)}
if (-10)            { console.log(`A Negative integer is Truthy`)}
if (1.23)           { console.log(`A Positive Float is Truthy`)}
if (-1.23)          { console.log(`A Negative Float is Truthy`)}
if (Infinity)       { console.log(`A Positive Infinity is Truthy`)}
if (-Infinity)      { console.log(`A Negative Infinity is Truthy`)}
