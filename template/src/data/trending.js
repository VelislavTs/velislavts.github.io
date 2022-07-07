import { API_KEY, LIMIT, RATING, TRENDING_REQUEST_URL } from '../common/requests-params.js';

export const generateTrendingGifs = async () => {
    const request = await fetch(TRENDING_REQUEST_URL + API_KEY + LIMIT + RATING);
    const response = await request.json();
    return response;
};