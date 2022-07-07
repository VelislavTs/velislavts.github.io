import { API_KEY, GET_GIF_BY_IDS } from "../common/requests-params.js";
/** The favorites variable keeps all gif items stored in the local storage*/
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
/**
 * @description: addFavorite function will add a gif to the local storage.
 * @param {string} gifId 
 * @returns: It returns no value.  
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    return;
  }
  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
/**
 * @description: removeFavorite function will remove a gif from the local storage.
 * @param {string} gifId 
 * @returns: It returns no value.  
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
/**
 * @description: getFavorites function return a copy of all gifs stored in the local storage.
 * @returns: It returns a copy of all gifs stored in the local storage. 
 */
export const getFavorites = () => [...favorites];
/**
 * @description: getFavoriteGifsById function will make a fetch request for specific gifs using their IDs.
 * @param {string} ids 
 * @returns: It returns the response from the Giphy API. 
 */
export const getFavoriteGifsById = async (ids) => {
  if (ids === "") {
    return;
  } else {
    const request = await fetch(GET_GIF_BY_IDS + API_KEY + '&ids=' + ids);
    const response = await request.json();
    return response;
  }
};