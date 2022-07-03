import { q } from "./events/helpers.js";
import { loadPage } from "./events/navigation-handling.js";
import { renderSearchData } from "./events/search-events.js";


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = '&q=' + document.getElementById('search-input').value
        renderSearchData(searchQuery); // waiting for event
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            console.log(event.target.getAttribute('button-value'))
            loadPage(event.target.getAttribute('button-value'));
        };
        if (event.target.classList.contains('nav-link')) {
            loadPage(event.target.getAttribute('button-value'));
        };
    })
});


// const gridItems = document.querySelectorAll('.grid-item')
// gridItems.forEach(item => {
//    document.getElementById('grid').removeChild(item);
// })