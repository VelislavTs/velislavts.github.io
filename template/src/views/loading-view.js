import { q } from '../events/helpers.js';

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