import {
    addImageToGrid,
    setMasonry,
    addTextToGrid
} from "./main-view.js"

export const toSearchView = async (searchResults, searchQuery) => {
    
    const results = await searchResults;
    const query = await searchQuery;
    removeGrid();
    
    if(document.querySelector('#search-text') ) removeText();
    addTextToGrid(query)
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
    
}

export const removeGrid = () => {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        document.getElementById('grid').removeChild(item);
    })
}

export const removeText = () => {
    const text = document.querySelector('#search-text');
    document.getElementById('search-div').removeChild(text);
}