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
function getNavMenu() {
  let navElements = [];

  const sectionsContent = document.querySelectorAll("section"); // Get All Sections Data

  sectionsContent.forEach(function (section) {
    navElements.push(section.dataset["nav"]); // Get Individual Section data name
  });
  return navElements;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * NAME       : generateNavBar
 * DESCRIPTION: This function is used to Generate the navigation bar elements dynamically
 */
const navBarSections = getNavMenu(); // Get Sections name As an Array

function generateNavBar() {
  const fragment = document.createDocumentFragment();

  navBarSections.forEach(function (section) {
    const newElement = document.createElement("li"); // Create <li> element for each section dynamically
    newElement.textContent = section;
    fragment.appendChild(newElement);
  });

  document.querySelector("#navbar__list").appendChild(fragment); // Insert the created list to the existing <ul> list
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

// Set sections as active
