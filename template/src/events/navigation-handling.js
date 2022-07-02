import {
    ABOUT,
    FAVORITES,
    HOME,
    MAIN_CONTAINER,
    TRENDING,
    UPLOAD,
} from "../common/constants.js";
import {
    setUploadView
} from "../views/upload-view.js";
import {
    q,
    setActiveNav
} from "./helpers.js";
import {
    renderSearchData
} from "./search-events.js";


export const loadPage = (page = '') => {
    if (page === HOME) {
        setActiveNav(HOME);
    } else if (page === TRENDING) {
        setActiveNav(TRENDING);
    } else if (page === FAVORITES) {
        setActiveNav(FAVORITES);
    } else if (page === UPLOAD) {
        setActiveNav(UPLOAD);
        renderUpload();
    }
};

export const renderUpload = () => {
    q(MAIN_CONTAINER).innerHTML = setUploadView();
};