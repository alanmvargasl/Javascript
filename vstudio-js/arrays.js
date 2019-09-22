//Arrays Video Length: 11:12 Video 8/35

/*
let a = [5,4,6,7,4];
console.log(a[0]);
let b = ["Alan", "Bryan", "Vere"];
console.log(b[2]);

//Making a complete word out an array
let c = b[0] +" " + b[2];
console.log(c);
*/
//Practice

let schoolGrades = [10,6,7,8,10,7,5,1,5,1,4,0,1,6];
// i want to know what is the average of the grades.
let process =0;
for (i=0;i<schoolGrades.length;i++)
{
process = process + schoolGrades[i];
}
process = process / schoolGrades.length;
Average = process;
console.log(Average);

schoolGrades.push(11); //adds this value at the end of the array, it creates a space for it.
console.log(schoolGrades);

schoolGrades.pop(); // deletes the last value in an array
console.log(schoolGrades);
