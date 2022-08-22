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
 * This function is used to collect all sections data dynamically
 *
 * @returns {Array} an array contains all sections data
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
    newAnchorElement.classList.add("menu__link"); // add href attribute with each section ID
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

const sectionsContent = document.querySelectorAll("section"); // Select All Sections Data
sectionsContent.forEach(function (section) {
  document.addEventListener("scroll", (event) => {
    const sectionHight = section.getBoundingClientRect().height; // Calculate Section Height
    const sectionTop = section.getBoundingClientRect().top; //  Calculate distance between section top and screen top
    const sectionBottom = section.getBoundingClientRect().bottom; //  Calculate distance between section bottom and screen top

    // calculate when the section should be active during appearance on screen
    if (sectionHight / 3 > sectionTop && sectionBottom > sectionHight / 2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

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
      const element = document.querySelector(elementParentID);
      // Scroll to anchor ID using scrollTO event
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      // Remove sections as active from all section
      const sectionsContent = document.querySelectorAll("section"); // Select All Sections Data
      sectionsContent.forEach(function (section) {
        section.classList.remove("active"); // Remove active Class from all sections elements
      });

      // Set sections as active
      element.classList.add("active");
    }
  });
