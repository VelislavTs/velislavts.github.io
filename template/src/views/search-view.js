import { q, qs } from "../events/helpers.js";
import {
    addImageToGrid,
    setMasonry,
    addTextToGrid,
    setMasonryView
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
    setMasonryView();
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