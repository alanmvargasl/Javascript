let Person = {
     name:"Alan",
     lastName:"Vargas",
     age:24
};

let newPerson = Object.create(Person);

console.log(newPerson.name);
console.log(Object.getPrototypeOf(newPerson));

/*
When an object is linked to another object this is
the sintaxis for it 
let object = Object.create(newObject);
the newObject will not have its own properties because
of this relation with the original object its
linked to, it will just share its properties and
values... if you want to create a new property
in any of those two objects you must create it
this way.

newObject.newProperty = "Value";
*/