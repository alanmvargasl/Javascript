let pattern = /abc/;
console.log(pattern);
console.log(typeof pattern);

let value = "This is my amigo,there are lots of abc.";
console.log(pattern.test(value));

console.log(value.replace(pattern, `Just`));

console.log(value.match(pattern));
let info = value.match(pattern);

console.log(info.index);