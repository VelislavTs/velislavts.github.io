import { q } from '../events/helpers.js';
import { toggleLoading } from './loading-view.js';
import {
    addImageToGrid,
    addTextToGrid,
    setMasonryView,
    removeGrid
} from './main-view.js';
/**
 * @description: toSearchView function is rensponsible for the view of the search page. 
 * @param {Object} searchResults 
 * @param {String} searchQuery 
 */
export const toSearchView = async (searchResults, searchQuery) => {
    try {
        const results = await searchResults;
        const query = await searchQuery;
        removeGrid();
        if(q('#search-text')) removeText();
        addTextToGrid(query);
        results.data.forEach(imageUrl => {
            addImageToGrid(imageUrl);
        });
        toggleLoading();
        setMasonryView(3500);
    } catch (err) {
        return err.message;
    }
};
/**
 * @description: removeText is a help function, which will remove the text after new search event is triggered. 
 */
export const removeText = () => {
    const text = q('#search-text');
    q('#search-div').removeChild(text);
};