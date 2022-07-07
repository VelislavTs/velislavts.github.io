import { q } from '../events/helpers.js';
/**
 * @description: toggleLoading function will toggle the loading view.
 */
export const toggleLoading = () => {
    let loadingScreen = q('#loading-screen');
    if (loadingScreen.style.display === 'none') {
        loadingScreen.style.display = 'flex';
        document.body.style.pointerEvents = 'none';
    } else {
        loadingScreen.style.display = 'none';
        document.body.style.pointerEvents = 'auto';
    }
};