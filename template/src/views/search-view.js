import { q } from "../events/helpers.js";
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
    results.data.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
    
}

export const removeGrid = () => {
    const parent = q('#grid');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export const removeText = () => {
    const text = document.querySelector('#search-text');
    document.getElementById('search-div').removeChild(text);
}