import { searchGifs } from "../data/search.js";
import { generateTrendingGifs } from "../data/trending.js";
import { uploadGif } from "../data/upload.js";

export const loadSearchData = async (searchQuery = '') => {
    const searchDataResult = await searchGifs(searchQuery); 
    return searchDataResult;
};

export const sendGifForUpload = async (file) => {
    const gifId = await uploadGif(file);
    return gifId;
}

export const loadRandomGifs = async() => {
    const randomGifsResponse = await getRandomGifs();
    return randomGifsResponse;
}
export const loadTrendingData = async () => {
    const trendingDataResult = await generateTrendingGifs(); 
    return trendingDataResult;
};
