
// function add(number1,number2){
//     return number1 + number2
// }

// sum = add(5,8);
// console.log(sum);

// function calculate(...num){
//     return num
// }

// total= calculate(5,8,4,5,8);
// console.log(total);

// const userdeltails = {
//     name: "ShivKumar",
//     course: "fullStack-developer",
//     price: 199
     
// };

// function anotheruser(userdeltails) {
//     console.log(`Name is ${userdeltails.name} Her course is ${userdeltails.course} and course price is ${userdeltails.price}.`);
// }

// anotheruser(userdeltails)


// const myarray = [10,22,3,50,80,46,20,"Shiv",20,"Sabaila"]
// console.log(myarray);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     if (element == 20){
//         console.log("20 is present Index at :",index);
//     }
// }

// const square = function (num){
//     return num * num
// }

// console.log(square);
// console.log("The square 5 is: ",square(5));

// function Squaring(a,b){
//     const x = multi(a)
//     const y = multi(b)

//     function multi(num1){
//         console.log(num1*num1);
//     }
//     console.log(a);
//     console.log(b);

// }

// Squaring(5,10);

//*******************************CALLBACK FUNCTIONS*********************************/
//Functions!
// function naming(name,callback){
//     console.log("HI"+" "+name);
//     callback();
// }
// //callback functions.
// function callme(){
//     console.log("hello I am a callback functions.");
// }
// //passing functions as a argument!
// naming("spiderman",callme)


// const calcu = (a,b,operation) => { //functions
//     return operation(a,b);      // return value.
// }
//  // Method 1

//  const addition = calcu(5,8, function (no1,no2){   //functions
//     return no1 + no2
// });
// console.log(addition);

// //Methods 2
// const substract = (a,b) => a-b;    //functions
// const subresult = calcu(10,4,substract);  //calcu functions calls. and pass substract functions.
// console.log(subresult);

// //Methods 3
// function multiply(a,b){     // normal functions
//     return a * b
// }
// const multiplyres = multiply(3,5);  //multiple functions calls
// console.log(multiplyres);

//****************************************ARRAY CALLBACK FUNCTIONS*************************/
//----> It's a functions passed as an argument to another functions.

const a = [5,8,6,9,7,0,4,-6,-4,5,9,3,7,5]

const firstNeg = (num) =>{        // this functions is return first negative number in an array.
    return num < 0               
}

// const result = a.find(firstNeg)   // call firstNeg functions to find negative number in an array!
 // to print first negative number index.

// console.log(result);

// To print all array element using foreach() functions.

a.forEach((numberValue,indexnumber) => {
    console.log("Array element is : "+ numberValue +" and Index Number is",indexnumber);
});















