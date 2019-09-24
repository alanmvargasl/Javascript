let a,b,c,d,e;

let names = [ "alan", "chris", "vere", "dante", "santiago"];

/*
[a,b,c,d,e,d] = names;
console.log(a);
console.log(b); */

let others;

[a,b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);