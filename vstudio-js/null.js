let pattern= /abc/;
let paragraph = "My Pattern will be searched inside here!";
let result = paragraph.match(pattern);
console.log(result);
console.log(result === null ? "No match was found!":false);