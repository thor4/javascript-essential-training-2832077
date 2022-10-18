/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const mainty = document.querySelector("main li:first-child").classList;

mainty.add("newClass", "secondClass"); // add classes
console.log(mainty);
mainty.remove("secondClass"); //remove one of them
console.log(mainty);

const attrib = document.querySelector("form");
attrib.setAttribute("title", "this is a test"); // add a new attribute to an element
console.log(attrib.getAttribute("title")); // request value of the attribute

const style = document.querySelector(".page-header__heading");
console.log(style.style); // get a list of all style properties available
style.style.color = "blue"; // set color value via inline CSS

// request the value of the attribute
// change the value of the attribute
// add some inline CSS to an element by specifying the style property and setting its value
// query the style property of an element in the console to get a list of all the style properties available
