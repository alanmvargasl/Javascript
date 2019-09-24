/* //This Keyboard
//Video Length
let objectCar =
{
    brand: "Tsuru",
    version: "Premium",
    year: 2019,

    getPrice: function ()
    {
        let price = 1000, tax = 0.16;
        let totalprice= price + (price * tax);
        console.log("The Cost of the car is: " + totalprice);
        
    },
    printDescription: function ()
    {
        console.log("You have bought a " + this.brand + " it is the version "+ this.version + " Year: " + this.year);
    }
}

 objectCar.printDescription();
 objectCar.getPrice();

 function first ()
 {
     return this;
 }
 console.log(first() === global);

 function second ()
 {
    let b =  "use strict";
     return this;
 }
 console.log(second() === global);


 let myObject = {
     value: "my object"
 };

 global.value = "Global Object";

 function third ()
 {
    return this.value;
 }
 console.log(third());  */

 function fifth(firstname , lastname)
 {
     console.log(firstname + " " + lastname);
 }
 fifth("alan","vargas");