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
    const divInner = document.createElement('div');
    divInner.classList.add('inner-div-details');
    const heartButton = document.createElement('button');
    const placeholderForTitle = document.createElement('span');
    let buttonForHeart;
    let gifTitle;

    if (gifData.title) {
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
        img.src = `${gifData.images.downsized.url}`
    } catch (e) {
        img.src = `${gifData.value.data.images.downsized.url}`
    }

    heartButton.innerHTML += buttonForHeart;
    placeholderForTitle.innerHTML += gifTitle;
   
    div.appendChild(img)
    div.appendChild(divInner);
    divInner.appendChild(heartButton);
    divInner.appendChild(placeholderForTitle);
    grid.appendChild(div);
    grid.style.visibility = 'hidden';
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
    const div = q('#search-div')
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