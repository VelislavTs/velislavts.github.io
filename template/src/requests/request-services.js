import { searchGifs } from "../data/search.js";
import { generateTrendingGifs } from "../data/trending.js";
import { uploadGif } from "../data/upload.js";

export const loadSearchData = async (searchQuery = '') => {
    try {
        const searchDataResult = await searchGifs(searchQuery); 
        return searchDataResult;
    } catch (err) {
        return err.message;
    }
};

export const sendGifForUpload = async (file) => {
    try {
        const gifId = await uploadGif(file);
        return gifId;
    } catch (err) {
        return err.message
    }
    }

export const loadRandomGifs = async() => {
    try {
        const randomGifsResponse = await getRandomGifs();
        return randomGifsResponse;
    } catch (err) {
        return err.message;
    }
}
export const loadTrendingData = async () => {
    try {
        const trendingDataResult = await generateTrendingGifs(); 
        return trendingDataResult;
    } catch (err) {
        return err.message;
    }
};
