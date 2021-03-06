/**
 * Shorthand for document.querySelector
 * @param {string} selector 
 * @returns {Element}
 */
 export const q = (selector) => document.querySelector(selector);

 /**
  * Shorthand for document.querySelectorAll
  * @param {string} selector 
  * @returns {NodeLists<Element>}
  */
 export const qs = (selector) => document.querySelectorAll(selector);
 
 /**
  * @description: setActiveNav function will set/remove active status of navigation buttons 
  * @param {String} page 
  */
 export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');
    Array
      .from(navs)
      .forEach(element => 
        element
        .getAttribute('button-value') === page
        ? element.classList.add('active')
        : element.classList.remove('active')
        );
  };