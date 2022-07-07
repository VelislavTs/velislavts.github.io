import { MAIN_CONTAINER } from "../common/constants.js";
import { loadSearchData } from "../requests/request-services.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js"
/**
 * description: renderSearchData function will render the search results in a new page. 
 * @param {String} searchQuery 
 */
export const renderSearchData = async (searchQuery) => {
    try {
        const searchResults = await loadSearchData(searchQuery)
        let mainContainer = q(MAIN_CONTAINER).innerHTML;
        mainContainer = await toSearchView(searchResults, searchQuery);
        return mainContainer;
    } catch (err) {
        return err.message;
    }
}; 
