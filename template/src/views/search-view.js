import { q, qs } from "../events/helpers.js";
import {
    addImageToGrid,
    addTextToGrid,
    setMasonryView,
    removeGrid
} from "./main-view.js"

export const toSearchView = async (searchResults, searchQuery) => {
    
    const results = await searchResults;
    const query = await searchQuery;
    
    removeGrid();
    
    if(q('#search-text') ) removeText();
    addTextToGrid(query)
    results.data.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setMasonryView();
}


export const removeText = () => {
    const text = q('#search-text');
    q('#search-div').removeChild(text);
}