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
 
 
 export const setActiveNav = (page) => {
    const navs = qs('a.nav-link');
  
    console.log('hi');
    Array
      .from(navs)
      .forEach(element => 
        element
        .getAttribute('button-value') === page
        ? element.classList.add('active')
        : element.classList.remove('active')
        );
  };