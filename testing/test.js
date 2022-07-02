// const API_KEY = 'api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yq'
// const REQUEST_URL = 'https://api.giphy.com/v1/gifs/trending?'
// const LIMIT = '&limit=25'
// const RATING = '&rating=g'
// // https://api.giphy.com/v1/gifs/trending?api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yq&limit=25&rating=g


// https://api.giphy.com/v1/gifs/search?api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yqq=&limit=25&rating=g 

const API_KEY = 'api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yq'
const REQUEST_URL = 'https://api.giphy.com/v1/gifs/search?'
const LIMIT = '&limit=15'
const RATING = '&rating=g'
const SEARCH_CRITERIA = '&q=' + document.getElementById('search-input').value;


const grid = document.getElementById('grid');

const getData = async () => {
    const response = await fetch(REQUEST_URL + API_KEY + LIMIT + RATING)
    const data = await response.json();
    loadImages(data.data);
}

const searchData = async (request) => {
    const response = await fetch(REQUEST_URL + API_KEY + request + LIMIT + RATING)
    const data = await response.json();
    loadImages(data.data);
}

const loadImages = async (collection) => {
    const path = collection.forEach(image => {
        addImageToGrid(image.images.downsized.url);
    });
};



const addImageToGrid = (path) => {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    const img = document.createElement('img');
    img.src = `${path}`
    div.appendChild(img);
    grid.appendChild(div)
    setMasonry();
}

const setMasonry = () => {
    new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        originLeft: false,
        originRight: false,
        fitWidth: true,
    });
};

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {}
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', () => {
        const gridItems = document.querySelectorAll('.grid-item')
        gridItems.forEach(item => {
           document.getElementById('grid').removeChild(item);
        })
        const searchQuery = '&q=' + document.getElementById('search-input').value
        searchData(searchQuery);
    })
});

// https://api.giphy.com/v1/gifs/search?api_key=m2h3bY3cGXyBHla3bhM7gIP64RY97yJg&q=&limit=25&offset=0&rating=g&lang=en