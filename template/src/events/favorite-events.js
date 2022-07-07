import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorite.js';
import { q, qs } from './helpers.js';
/**
 * @description: toggleFavoriteStatus function will add or remove gif from favorites and also change the heart icon.  
 * @param {String} id 
 */
export const toggleFavoriteStatus = (id) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${id}"]`);
  if (favorites.includes(id)) {
    removeFavorite(id);
    heartSpan.classList.remove('active')
    heartSpan.innerHTML = EMPTY_HEART;
    renderFavoritesMessage(id);
  } else {
    addFavorite(id);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
    renderFavoritesMessage(id);
  }
};
/**
 * @description: renderFavoriteStatus function will render the heart icon to specific Gif.  
 * @param {String} gifId 
 * @returns: It returns a template with the respective heart icon. 
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
/**
 * @description: renderFavoritesMessage function will add a message when adding and removing Gifs from favorites. 
 * @param {String} id 
 */
  export const renderFavoritesMessage = (id) => { 
    const favorites = getFavorites();
    if(favorites.includes(id)) {
      const div = q('#main-div');
      const message = document.createElement('h5');
      message.innerText = 'Gif addded to favorites successfully!'
      message.classList.add('favorite-gif-message');
      div.appendChild(message);
      setTimeout(function() {
        div.removeChild(message);
      },2000)
   } else {
      const div = q('#main-div');
      const message = document.createElement('h5');
      message.innerText = 'Gif removed from favorites successfully!'
      message.classList.add('favorite-gif-message');
      div.appendChild(message);
      setTimeout(function() {
        div.removeChild(message);
      },2000)
    }
  }
