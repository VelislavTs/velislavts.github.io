import { renderFavoriteStatus } from "../events/favorite-events.js";

export const addImageToGrid = (gifData) => {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    const img = document.createElement('img');
    const btn = renderFavoriteStatus(gifData.id);
    const heart = document.createElement('button')
    heart.innerHTML += btn;
    // console.log(btn);
    // console.log(path);
    img.src = `${gifData.images.downsized.url}`
    div.appendChild(img);
    div.appendChild(heart);
    grid.appendChild(div)
}

export const setMasonry = () => {
    new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        originLeft: false,
        originRight: false,
        fitWidth: true,
    });
}

export const addTextToGrid = (searchQuery = '') => {
    const h2 = document.createElement('h2');
    const query = searchQuery.substring(3)
    const text = `Search results for ${query}`
    const div = document.querySelector('#search-div')
    h2.innerText = text;
    h2.setAttribute('id', 'search-text');
    div.appendChild(h2);
}