import { searchGifs } from "../data/search.js";
import { generateTrendingGifs } from "../data/trending.js";
import { uploadGif } from "../data/upload.js";
/**
 * @description: loadSearchData function will load all Gifs corresponding to the search criteria.
 * @param {String} searchQuery 
 * @returns: It returns the search data result. 
 */
export const loadSearchData = async (searchQuery = '') => {
    try {
        const searchDataResult = await searchGifs(searchQuery); 
        return searchDataResult;
    } catch (err) {
        return err.message;
    }
};
/**
 * @description: sendGifForUpload function will send the gif for uploading. 
 * @param {Object} file 
 * @returns: It returns the Gif ID. 
 */
export const sendGifForUpload = async (file) => {
    try {
        const gifId = await uploadGif(file);
        return gifId;
    } catch (err) {
        return err.message
    }
    }
/**
 * @description: loadRandomGifs function will load the response for multiple random Gifs. 
 * @returns: It returns an array with all random Gifs. 
 */
export const loadRandomGifs = async() => {
    try {
        const randomGifsResponse = await getRandomGifs();
        return randomGifsResponse;
    } catch (err) {
        return err.message;
    }
}
/**
 * @description: loadTrendingData function will load the response for trending Gifs. 
 * @returns: It returns an object will all trending Gifs
 */
export const loadTrendingData = async () => {
    try {
        const trendingDataResult = await generateTrendingGifs(); 
        return trendingDataResult;
    } catch (err) {
        return err.message;
    }
};
