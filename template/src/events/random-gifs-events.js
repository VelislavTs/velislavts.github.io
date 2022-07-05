import { MAIN_CONTAINER } from "../common/constants.js";
import { getRandomGifs, getSingleGif } from "../data/random.js";
import { toHomeView } from "../views/home-view.js";
import { removeGrid } from "../views/main-view.js";
import { q, qs } from "./helpers.js"


export const renderHomePage = async () => {
    
    removeGrid();
    q('.nav-link').classList.add('active');
    const randomGifs = await getRandomGifs(); 
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    const homeView = await toHomeView(randomGifs);
    mainContainer = homeView;
}

export const appendToHomePage = async () => {
    const randomGifs = await getRandomGifs();
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    const homeView = await toHomeView(randomGifs);
    mainContainer += homeView;
}