import {
    renderFavoriteStatus
} from "../events/favorite-events.js";
import {
    q,
    qs
} from "../events/helpers.js";

const grid = q('#grid');
export const addImageToGrid = (gifData) => {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    const img = document.createElement('img');
    img.style.visibility = "hidden";
    const btn = renderFavoriteStatus(gifData.id);
    const heart = document.createElement('button')
    heart.innerHTML += btn;
    heart.style.visibility = 'hidden';

    try {
        img.src = `${gifData.images.downsized.url}`
    } catch (e) {
        img.src = `${gifData.value.data.images.downsized.url}`
    }

    div.appendChild(img);
    div.appendChild(heart);
    grid.appendChild(div)
}


export const setMasonryView = (timeout = 3000) => {
    setTimeout(() => {
        setMasonry()
        const gridItems = qs('.grid-item')
        gridItems.forEach(el => {
            el.childNodes.forEach(child => {
                child.style.visibility = "visible";
            })
        })
        q('#grid').style.display = 'flex'
        q('#grid').style.visibility = 'visible';
        q('#loading-screen').style.display = 'none';
    }, timeout);
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
    q('#search-input').value = '';
}
export const removeGrid = () => {
    const parent = q('#grid');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}