import { API_KEY, LIMIT, RATING, TRENDING_REQUEST_URL } from '../common/requests-params.js';
/**
 * @description: generateTrendingGifs function will make a request to the Giphy API for the trending Gifs of the day.
 * @returns: It returns the response from the Giphy API. 
 */
export const generateTrendingGifs = async () => {
    const request = await fetch(TRENDING_REQUEST_URL + API_KEY + LIMIT + RATING);
    const response = await request.json();
    return response;
};