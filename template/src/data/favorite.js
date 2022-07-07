import { API_KEY, GET_GIF_BY_IDS } from "../common/requests-params.js";

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    // Gif has already been added to favorites
    return;
  }
  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavorites = () => [...favorites];

export const getFavoriteGifsById = async (ids) => {
  if (ids === "") {
    return;
  } else {
    const request = await fetch(GET_GIF_BY_IDS + API_KEY + '&ids=' + ids);
    const response = await request.json();
    return response;
  }
};