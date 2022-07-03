import { searchGifs } from "../data/search.js";
import { uploadGif } from "../data/upload.js";

export const loadSearchData = async (searchQuery = '') => {
    const searchDataResult = await searchGifs(searchQuery); 
    return searchDataResult; // arr w/ n-num gifs matching search criteria
};

export const sendGifForUpload = async (file) => {
    const gifId = await uploadGif(file);
    return gifId;
}

export const loadRandomGifs = async() => {
    const randomGifsResponse = await getRandomGifs();
    return randomGifsResponse;
}