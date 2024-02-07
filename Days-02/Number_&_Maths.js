const number = 45600    // simple declared Number datatype 

const balance = new Number(50000)   // this is also a declared 
console.log(balance);
//+++++++++++++++++++++++ using Methods++++++++++++++++++++

console.log(balance.toFixed(3));   // output is 50000.000

console.log(balance.toLocaleString());   //output is 50,000  seperating with coma

console.log(balance.toPrecision());     

console.log(balance.valueOf());      //returns a number as a number

//++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.ceil(4.9));
console.log(Math.abs(-5));   // to always convert negative to positive value As not positive to negative.
console.log(Math.round(5.5));  //to print round of value ex:6
console.log(Math.min(5,9,3,7,84,)); //to find minimum value is 3
console.log(Math.max(1,6,3,7));  // to print maximum value is 7

console.log(Math.random());     //to print random value

console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 20
const max = 50

console.log((Math.random()*(max - min +1))+min);
