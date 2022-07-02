import { searchGifs } from "../data/search.js";

export const loadSearchData = async (searchQuery = '') => {
    const searchDataResult = await searchGifs(searchQuery); 
    return searchDataResult; // arr w/ n-num gifs matching search criteria
};