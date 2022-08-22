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

function getSectionsData() {
  let sectionsData = [];

  const sectionsContent = document.querySelectorAll("section"); // Select All Sections Data

  sectionsContent.forEach(function (section) {
    sectionsData.push(section); // Prepare an array contains all Sections data [ID and data] to be used
  });
  return sectionsData;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * Generate the Navbar menu dynamically depending on sections data.
 *
 * @return {null} null.
 */

function generateNavBar() {
  const navBarSections = getSectionsData(); // Get Sections data Array
  const fragment = document.createDocumentFragment();

  navBarSections.forEach(function (section) {
    const newAnchorElement = document.createElement("a"); // Create <a> element for each section dynamically
    newAnchorElement.setAttribute("href", `#${section.id}`); // add href attribute with each section ID
    const newListElement = document.createElement("li"); // Create <li> element for each section dynamically
    newListElement.textContent = section.dataset["nav"]; // Create Navbar element text using section dataset dynamically
    newAnchorElement.appendChild(newListElement); // insert the list item inside the anchor element
    // newAnchorElement.classList.add("menu__link");
    fragment.appendChild(newAnchorElement);
  });

  document.querySelector("#navbar__list").appendChild(fragment); // Insert the created list to the existing <ul> list element
}

// build the nav
generateNavBar();
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
document
  .querySelector("#navbar__list")
  .addEventListener("click", function (evt) {
    evt.preventDefault();
    if (evt.target.nodeName === "LI") {
      const elementParentID = evt.target.parentElement.hash;
      console.log(evt);

      const element = document.querySelector(elementParentID);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  });

// Set sections as active
