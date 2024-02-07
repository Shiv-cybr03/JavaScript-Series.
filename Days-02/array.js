// ARRAY +++++++

const myarray = [5,6,7,2,9,10]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element );
    
// }

// myarray.push(100)
// console.log(myarray);
// myarray.push(50)
// myarray.push(101)
// myarray.pop()
// myarray.unshift(20)     // 20 is add in the first of the array
//myarray.shift()        // to remove first element of the array
// console.log(myarray.includes(5));   // to check number is present or not
// console.log(myarray.indexOf(2));   // to find index of the number
// console.log(myarray);

// console.log(myarray);

// console.log(myarray[0]);

/// SLICE and SPLICE

// console.log("A",myarray);

// const myarr1 = myarray.slice(1,4)
// console.log("slice 1 to 4",myarr1);

// console.log("after slice array:",myarray);

// console.log("B",myarray);
// const myarr2 = myarray.splice(1,4);
// console.log("splice 1 to 4",myarr2);

// console.log("after slice and splice array:",myarray);



// ********ARRAY PART-2************


const marble_hero = ["tonystack","ironman","spiderman"]
const dc_hero = ["superman","batman","flash"]

//marble_hero.push(dc_hero)     // this isn't a right ways(functins) to Join Multiple array !

const allheros = marble_hero.concat(dc_hero)
console.log(allheros);
console.log(allheros[4]);

const allnewhero = [...marble_hero, ...dc_hero]     // split function is used to Join multiple array in a single arry:!

console.log(allheros);

const array = [[1,2,3,[4,5,6],7,],8,9,[1,5,7,]]
console.log(array.flat(Infinity));

console.log(Array.isArray("shivram"));    // to check " " is array or not !

console.log(Array.from("shivram"));       // to convert as a array forms ! 

// how to convert variable to Array forms!

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3));