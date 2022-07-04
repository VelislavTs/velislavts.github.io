import { MAIN_CONTAINER } from "../common/constants.js";
import { getRandomGifs } from "../data/random.js";
import { toHomeView } from "../views/home-view.js";
import { q } from "./helpers.js"

export const renderHomePage2 = async () => {
    const randomGifs = await getRandomGifs();
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    const homeView = await toHomeView(randomGifs);
    mainContainer = homeView;
}

export const appendToHomePage2 = async () => {
    const randomGifs = await getRandomGifs();
    // tuk moje da izmislim nyakoi po-adekvaten nachin... 
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    const homeView = await toHomeView(randomGifs);
    mainContainer += homeView;
}