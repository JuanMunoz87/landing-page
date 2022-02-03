/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// ======================================================// 
// References
const unorderList = document.querySelector("ul");
console.log(unorderList);


//== this will dynamically create a navigation menu ==//
// array of names
const navNames = ["Section 1", "Section 2", "Section 3", "Section 4"];
const datalinks = ["section1", "section2", "section3", "section4"];

// forEach method 
navNames.forEach(function(arr,i) {
   //  create a li
   const newLi = document.createElement("li");
   // create attribute class and value
   newLi.setAttribute("class", "menu__link");
   newLi.setAttribute("data-nav", datalinks[i]);
   unorderList.appendChild(newLi);
   newLi.innerHTML = arr;
});
// console.log(unorderList);

// Reference
const menuLinks = document.querySelectorAll(".menu__link");
// console.log(menuLinks)
//== scroll to each section of the page ==//
menuLinks.forEach((item) => {
   item.addEventListener("click", () => {
      let el = document.getElementById(item.getAttribute("data-nav"));
      el.scrollIntoView({behavior:"smooth"});
      // console.log(el);
   })
});


