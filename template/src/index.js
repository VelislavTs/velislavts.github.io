import { renderSearchData } from "./events/search-events.js";


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = '&q=' + document.getElementById('search-input').value
        renderSearchData(searchQuery); // waiting for event
    });
});


// const gridItems = document.querySelectorAll('.grid-item')
// gridItems.forEach(item => {
//    document.getElementById('grid').removeChild(item);
// })