import { HOME } from "./common/constants.js";
import { getRandomGifs } from "./data/random.js";
import { toggleFavoriteStatus } from "./events/favorite-events.js";
import { q, qs } from "./events/helpers.js";
import { loadPage } from "./events/navigation-handling.js";
import { appendToHomePage, renderHomePage } from "./events/random-gifs-events.js";
import { renderSearchData } from "./events/search-events.js";
import { removeText } from "./views/search-view.js";

document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('#search-text') ) removeText();
    renderHomePage();
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = '&q=' + document.getElementById('search-input').value
        renderSearchData(searchQuery); // waiting for event
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            if(document.querySelector('#search-text') ) removeText();
            loadPage(event.target.getAttribute('button-value'));

        };
        
        if(event.target.classList.contains('favorite')){
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        };
    });

    document.getElementById('navbar-brand-btn').addEventListener('click', () => {
        if(document.querySelector('#search-text') ) removeText();
        renderHomePage();
    })

    window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            if(q('.nav-link').classList.value === 'nav-link active') {
                appendToHomePage();
            }
        }
    });
});

