import { q, qs } from "../events/helpers.js";
import { toggleLoading } from "./loading-view.js";
import {
    addImageToGrid,
    addTextToGrid,
    setMasonryView,
    removeGrid
} from "./main-view.js"

export const toSearchView = async (searchResults, searchQuery) => {
    try {
        const results = await searchResults;
        const query = await searchQuery;
        
        removeGrid();
        
        if(q('#search-text') ) removeText();
        addTextToGrid(query)
        results.data.forEach(imageUrl => {
            addImageToGrid(imageUrl);
        });
        setMasonryView();
    } catch (err) {
        return err.message;
    }
}


export const removeText = () => {
    const text = q('#search-text');
    q('#search-div').removeChild(text);
}