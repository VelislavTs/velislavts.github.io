const API_KEY = 'api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yq'
const REQUEST_URL = 'https://api.giphy.com/v1/gifs/trending?'
const LIMIT = '&limit=25'
const RATING = '&rating=g'
// https://api.giphy.com/v1/gifs/trending?api_key=eKe4TcSvYOBAjxJYbt0cc2UESWgsz8Yq&limit=25&rating=g
const grid = document.getElementById('grid');

const getData = async () => {
    const response = await fetch(REQUEST_URL+API_KEY+LIMIT+RATING)
    const data = await response.json();
    loadImages(data.data);
}
const loadImages = async (collection) => {
    const path = collection.forEach(image => {
        console.log(image.images.downsized.url);
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

    if (scrollTop + clientHeight >= scrollHeight) {
        getData();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    getData();
});
