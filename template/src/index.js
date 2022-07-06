import { HOME } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorite-events.js";
import { q, qs } from "./events/helpers.js";
import { loadPage } from "./events/navigation-handling.js";
import { appendToHomePage, renderHomePage } from "./events/random-gifs-events.js";
import { renderSearchData } from "./events/search-events.js";
import { removeText } from "./views/search-view.js";

document.addEventListener('DOMContentLoaded', () => {

    loadPage(HOME);
    q('#search-button').addEventListener('click', () => {
        qs('.nav-link').forEach(el => el.classList.remove('active'));
        const searchQuery = '&q=' + q('#search-input').value
        renderSearchData(searchQuery); // waiting for event
    });

    if (q('#search-text')) removeText();
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('nav-link')) {
            if (q('#search-text')) removeText();
            loadPage(event.target.getAttribute('button-value'));

        };

        if (event.target.classList.contains('favorite')) {
            toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
        };
    });

    document.getElementById('navbar-brand-btn').addEventListener('click', () => {
        if (q('#search-text')) removeText();
        renderHomePage();
    })

    window.addEventListener('scroll', async () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            if (q('.nav-link').classList.value === 'nav-link active') {
                await appendToHomePage();
            }
        }
    });
});

