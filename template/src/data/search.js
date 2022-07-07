import { API_KEY, LIMIT, RATING, SEARCH_REQUEST_URL } from "../common/requests-params.js"
/**
 * description: searchGifs function will make a request to the Giphy API using query as a search criteria.
 * @param {String} query 
 * @returns: It returns the response from the API. 
 */
export const searchGifs = async (query = '') => {
    try {
        const request = await fetch(SEARCH_REQUEST_URL + API_KEY + query + LIMIT + RATING);
        const response = await request.json();
        return response;
    } catch (err) {
        return err.message; 
    }
}