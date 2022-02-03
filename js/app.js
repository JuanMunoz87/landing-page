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


//== scroll to each section of the page on a click==//
menuLinks.forEach((item) => {
   item.addEventListener("click", () => {
      let element = document.getElementById(item.getAttribute("data-nav"));
      element.scrollIntoView({behavior:"smooth"});
      // console.log(element);
   })
});


