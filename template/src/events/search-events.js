import { MAIN_CONTAINER } from "../common/constants.js";
import { loadSearchData } from "../requests/request-services.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js"

export const renderSearchData = async(searchQuery) => {
    const searchResults = await loadSearchData(searchQuery) // array with gifs matching search n = 25
    // container -> set innerHTML => SearchView(searchResults) -> forEach -> Masonry
    q(MAIN_CONTAINER).innerHTML = toSearchView(searchResults, searchQuery);
    // forEach => gridElements => masonry
}; 
