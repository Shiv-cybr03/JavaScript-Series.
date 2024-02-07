//*******************FUNCTIIONS***************/

// functions are one of the fundamental building blocks Code. They allow you to group and organize code into reusable blocks, making your code more readable and easier to maintain.


 //functions declared.
function greet(name) {
    console.log("Hello, " + name + "!");
}
  

//   Function Expression:
  const multiply = function(a, b) {
    return a * b;
};
  
//Parameter and Arguments.
function sum(x, y) {   //this is a parameter.
    return x + y;
}
  
  sum(2, 3); // Calling the function with arguments


//Return statement return some value after excute the functions.
function square(x) {
    return x * x;      //return values.
}

//Default Parameters.
function greet(name = "Guest") {    //these guest is default parameter.
    console.log("Hello, " + name + "!");
}

//IIFE (Immediately Invoked Function Expression):
  
(function() {
    console.log("This is an IIFE");
  })();
  