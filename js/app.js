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
   // create data attribute
   newLi.setAttribute("data-nav", datalinks[i]);
   unorderList.appendChild(newLi);
   newLi.innerHTML = arr;
});

// Reference the menu links in the navbar list
const menuLinks = document.querySelector("#navbar__list");
// reference the sections on the page and store them as a node list to loop over when someone clicks or scrolls
const sections = document.querySelectorAll("section");
// console.log(menuLinks)

// Add an event listener to the list to watch for target click events
menuLinks.addEventListener("click", (e) => {
   // add the preventDefault method to stop the event from bubbling up the whole page
   e.preventDefault()
   // see where the user clicked on the list as far as which li element
   // console.log(e.target)
   // store the target click event for later use
   let item = e.target;
   // select the section element based on the li data nav information
   let element = document.getElementById(item.getAttribute("data-nav"));
   // loop through the menu links and remove any active classes that may be there from previous clicks
   menuLinks.childNodes.forEach(function (item) { item.classList.remove("your-active-class") })
   // toggle or add the class for the li element that was clicked on
   item.classList.toggle("your-active-class")
   // similar to what we did with the li element we now do with the sections and remove the active class that may have been applied from previous clicks
   sections.forEach((section) => section.classList.remove("your-active-class"))
   // toggle or add the active class to the section element that corresponds with the li that was clicked
   element.classList.toggle("your-active-class")
   //== scroll to each section of the page on a click==//
   element.scrollIntoView({behavior:"smooth"});
   // console.log(element);
});

// Now do the same thing for when the user scrolls up and down the page

// Add class 'active' to section when it is near top of viewport
function makeActive() {

  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // You can play with the values in the "if" condition to further make it more accurate. 
    if (box.top <= 250 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.classList.add("your-active-class");
      //  console.log("element is in view")

    } else {
      // Remove active state from other section and corresponding Nav link.
      section.classList.remove("your-active-class");
      //  console.log("element is not in view")
    }
  }
}


document.addEventListener("scroll", function (e) {
   makeActive()
})

