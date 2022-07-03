import {
    ABOUT, FAVORITES, HOME, MAIN_CONTAINER, TRENDING, UPLOAD,
} from "../common/constants.js";
import { loadTrendingData, sendGifForUpload } from "../requests/request-services.js";
import { toTrendingView } from "../views/trending-view.js";
import { setUploadView } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";

export const loadPage = (page = '') => {
    if (page === HOME) {
        setActiveNav(HOME);
        renderHomePage2();
    } else if (page === TRENDING) {
        setActiveNav(TRENDING);
        renderTrendingData();
    } else if (page === FAVORITES) {
        setActiveNav(FAVORITES);
    } else if (page === UPLOAD) {
        setActiveNav(UPLOAD);
        renderUpload();
    }
};

export const renderUpload = () => {
    q(MAIN_CONTAINER).innerHTML = setUploadView();
    q('#formFile').addEventListener('change', (event) => {
        q('#frame').src = URL.createObjectURL(event.target.files[0]);
    });

    q('#reset-button').addEventListener('click', clearPreview());
    q('#upload-button').addEventListener('click', () => {
        if (q('#formFile').files[0]) {
            sendGifForUpload(q('#formFile').files[0]);
            clearPreview();
        };
    });
};

export const renderTrendingData = async () => {
    const trendingResults = await loadTrendingData();
    q(MAIN_CONTAINER).innerHTML = toTrendingView(trendingResults);
}; 

const clearPreview = () => {
    q('#frame').src = '';
    q('#formFile').value = null;
}