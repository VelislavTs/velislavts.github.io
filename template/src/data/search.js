import { API_KEY, LIMIT, RATING, SEARCH_REQUEST_URL } from "../common/requests-params.js"

export const searchGifs = async(query = '') => {
    const request = await fetch(SEARCH_REQUEST_URL + API_KEY + query + LIMIT + RATING);
    const response = await request.json();
    const data = response.data.map(image => image.images.downsized.url);
    return data; // arr[15]
}