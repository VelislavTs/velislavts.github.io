import { q } from '../events/helpers.js';
import {
    addImageToGrid,
    setMasonryView
} from './main-view.js';
/**
 * @description: toHomeView function will render the view for the home page. 
 * @param {Array} randomGifs
 */
export const toHomeView = async (randomGifs) => {
    try {
        const results = await randomGifs;
        results.forEach(imageUrl => {
            addImageToGrid(imageUrl);
        });
        q('#grid').style.visibility = 'hidden';
        setMasonryView();
    } catch (err) {
        return err.message;
    }
};
