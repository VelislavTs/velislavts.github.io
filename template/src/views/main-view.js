import {
    renderFavoriteStatus
} from '../events/favorite-events.js';
import {
    q,
    qs
} from '../events/helpers.js';
import { toggleLoading } from './loading-view.js';
/** The grid variable is selecting the grid container. */
const grid = q('#grid');
/**
 * @description: addImageToGrid function will create the view of all pages. 
 * @param {Object} gifData 
 */
export const addImageToGrid = (gifData) => {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    const img = document.createElement('img');
    const divInner = document.createElement('div');
    divInner.classList.add('inner-div-details');
    const heartButton = document.createElement('span');
    heartButton.classList.add('heart-holder');
    const placeholderForTitle = document.createElement('span');
    placeholderForTitle.classList.add('title-holder');
    let buttonForHeart;
    let gifTitle;
    if (gifData.title || gifData.title === '') {
        gifTitle = gifData.title;
    } else {
        gifTitle = gifData.value.data.title;
    }
    if (gifData.id) {
        buttonForHeart = renderFavoriteStatus(gifData.id);
    } else {
        buttonForHeart = renderFavoriteStatus(gifData.value.data.id);
    }
    try {
        img.src = `${gifData.images.downsized.url}`;
    } catch (e) {
        img.src = `${gifData.value.data.images.downsized.url}`;
    }
    heartButton.innerHTML += buttonForHeart;
    placeholderForTitle.innerHTML += gifTitle;
    div.appendChild(img);
    div.appendChild(divInner);
    divInner.appendChild(heartButton);
    divInner.appendChild(placeholderForTitle);
    grid.appendChild(div);
    grid.style.visibility = 'hidden';
};
/**
 * @description: setMasonryView function will set the rendered data in Masonry view with given delay. 
 * @param {Number} timeout 
 */
export const setMasonryView = (timeout = 3000) => {
    setTimeout(() => {
        setMasonry();
        const gridItems = qs('.grid-item');
        gridItems.forEach(el => {
            el.childNodes.forEach(child => {
                child.style.visibility = 'visible';
            });
        });
        q('#grid').style.display = 'flex';
        q('#grid').style.visibility = 'visible';
        toggleLoading(); 
    }, timeout);
};
/**
 * @description: setMasonry function is setting the Masonry Object. 
 */
export const setMasonry = () => {
    new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        originLeft: false,
        originRight: false,
        fitWidth: true,
    });
};
/**
 * @description: addTextToGrid function will add information text for the searching view. 
 * @param {String} searchQuery 
 */
export const addTextToGrid = (searchQuery = '') => {
    const h2 = document.createElement('h2');
    const query = searchQuery.substring(3);
    const text = `Search results for ${query}`;
    const div = q('#search-div');
    h2.innerText = text;
    h2.setAttribute('id', 'search-text');
    div.appendChild(h2);
    q('#search-input').value = '';
};
/**
 * @description: removeGrid function will remove the grid from the view. 
 */
export const removeGrid = () => {
    const parent = q('#grid');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};