import { searchGifs } from "../data/search.js";

export const loadSearchData = (searchQuery = '') => {
    const searchDataResult = searchGifs(searchQuery); 
    return searchDataResult; // arr w/ n-num gifs matching search criteria
}