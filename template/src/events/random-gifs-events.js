import { MAIN_CONTAINER } from '../common/constants.js';
import { getRandomGifs } from '../data/random.js';
import { toHomeView } from '../views/home-view.js';
import { toggleLoading } from '../views/loading-view.js';
import { removeGrid } from '../views/main-view.js';
import { q } from './helpers.js';


export const renderHomePage = async () => {
    try {
        removeGrid();
        q('.nav-link').classList.add('active');
        const randomGifs = await getRandomGifs();
        toHomeView(randomGifs);
    } catch (err) {
        return err.message;
    }
};

export const appendToHomePage = async () => {
    
    try {
        const randomGifs = await getRandomGifs();
        let mainContainer = q(MAIN_CONTAINER).innerHTML;
        mainContainer += await toHomeView(randomGifs);
        toggleLoading();
        return mainContainer;
    } catch (err) {
        return err.message;
    }
};