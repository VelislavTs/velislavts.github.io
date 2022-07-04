import { MAIN_CONTAINER } from "../common/constants.js";
import { getRandomGifs } from "../data/random.js";
import { loadSearchData } from "../requests/request-services.js";
import { toHomeView } from "../views/home-view.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js"

export const renderHomePage = async(searchQuery) => {
    const searchResults = await loadSearchData(searchQuery) // array with gifs matching search n = 25
    // container -> set innerHTML => SearchView(searchResults) -> forEach -> Masonry
    q(MAIN_CONTAINER).innerHTML = toSearchView(searchResults, searchQuery);
    // forEach => gridElements => masonry
}; 

export const renderHomePage2 = async () => {
    const randomGifs = await getRandomGifs();
    
   let mainContainer = q(MAIN_CONTAINER).innerHTML;
   mainContainer = await toHomeView(randomGifs);
}

export const appendToHomePage2 = async () => {
    const randomGifs = await getRandomGifs();
    // tuk moje da izmislim nyakoi po-adekvaten nachin... 
    q(MAIN_CONTAINER).innerHTML += toHomeView(randomGifs);
}