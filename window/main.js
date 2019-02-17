//INTRO

/* Two ways for instances 'window' object
-----------------------------------------------------*/
console.log(window); //Explicitly
console.log(document.defaultView); //By calling the window reference of the current DOM that we are using

/* Opening and closing a blank window
-----------------------------------------------------*/
let nuevaPestaña = window.open('', '',''); //Opens a new 'about:blank' tab in the browser

window.close(); //WARNING: We can't close the windows that were opened before executing this script

nuevaPestaña.close(); //Closes the window previously created

/*
Opens a new window instead of a tab. NOTICE: Positioning (WIDTH AND HEIGHT) and SIZING can be set nothing but pixels
 */
let nuevaVentana = window.open('','_blank', 'height=500px, width=500px, left=400px');


/* 1-- Using 'window' methods explicitly
-----------------------------------------------------*/
window.console.log("A que no sabeis quién soy: ");


/* 2-- Using 'window' methods implicitly
-----------------------------------------------------*/
console.log("Soy el Stifmeister");


/* 3-- Calling the document object explicitly
-----------------------------------------------------*/
window.console.log(window.document);


/* 4-- Calling the document object implicitly
-----------------------------------------------------*/
console.log(document);


/* 5-- Declaring constants and variable into the global object scope 'window'
----------------------------------------------------------------------------*/
var quote = "I'm gonna rock out with my cock out";
//const quote = "You realise we're all going to go to college as virgins. They probably have special dorms for people like us.";
//let quote = "If you can't bring yourself to photograph a naked chick, how the hell are you ever gonna sleep with one?";

/* NOTICE: VAR sets the variable into the 'window' global scope object while LET and CONST doesn't */

/*
Show the value of the variable if declared with VAR and 'null' if declared with LET and CONST
 */
console.log(window.quote);

/*
Show the value whether it was declared with VAR, LET and CONST
 */
console.log(quote);

/*
Checking if the variable has been set in the global object
 */
console.log(window);


/* 6-- Getting all the CSS properties of an element
----------------------------------------------------------------------------*/
var main = document.getElementById('main', '::after'); //Save the 'div' with the ID = 'main' into a variable
console.log(window.getComputedStyle(main)); //Prints all the CSS properties whether if they've already been set or no.


