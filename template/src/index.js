import { getRandomGifs } from "./data/random.js";
import { q } from "./events/helpers.js";
import { loadPage } from "./events/navigation-handling.js";
import { appendToHomePage2, renderHomePage2 } from "./events/random-gifs-events.js";
import { renderSearchData } from "./events/search-events.js";


document.addEventListener('DOMContentLoaded', () => {
    renderHomePage2();
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = '&q=' + document.getElementById('search-input').value
        renderSearchData(searchQuery); // waiting for event
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            //console.log(event.target.getAttribute('button-value'))
            loadPage(event.target.getAttribute('button-value'));
        };
    });

    document.getElementById('navbar-brand-btn').addEventListener('click', () => {
        renderHomePage2();
    })

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            appendToHomePage2()
        }
    });
});


// const gridItems = document.querySelectorAll('.grid-item')
// gridItems.forEach(item => {
//    document.getElementById('grid').removeChild(item);
// })