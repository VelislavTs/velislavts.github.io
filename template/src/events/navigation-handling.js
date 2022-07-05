import {
    ABOUT, FAVORITES, HOME, MAIN_CONTAINER, TRENDING, UPLOAD,
} from "../common/constants.js";
import { getFavorites } from "../data/favorite.js";
import { loadTrendingData, sendGifForUpload } from "../requests/request-services.js";
import { toTrendingView } from "../views/trending-view.js";
import { setUploadView } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";
import { renderHomePage } from "./random-gifs-events.js";

export const loadPage = (page = '') => {
    if (page === HOME) {
        setActiveNav(HOME);
        renderHomePage();
    } else if (page === TRENDING) {
        setActiveNav(TRENDING);
        renderTrendingData();
    } else if (page === FAVORITES) {
        setActiveNav(FAVORITES);
        // redner fn for favorite
        renderFavorites();

    } else if (page === UPLOAD) {
        q('#grid').style.height = "50px";
        setActiveNav(UPLOAD);
        renderUpload();
    }
};

export const renderUpload = () => {
    q(MAIN_CONTAINER).innerHTML = setUploadView();
    q('#formFile').addEventListener('change', (event) => {
        q('#frame').src = URL.createObjectURL(event.target.files[0]);
    });

    q('#reset-button').addEventListener('click', () => {
        clearPreview();
    });
    q('#upload-button').addEventListener('click', () => {
        if (q('#formFile').files[0]) {
            sendGifForUpload(q('#formFile').files[0]);
            clearPreview();
        };
    });
};

export const renderTrendingData = async () => {
    const trendingResults = await loadTrendingData();
    let mainContainer = q(MAIN_CONTAINER).innerHTML
    const trendingView = await toTrendingView(trendingResults);
    mainContainer = trendingView;
};

const clearPreview = () => {
    q('#frame').src = '';
    q('#formFile').value = null;
}

export const renderFavorites = async () => {
    // q(MAIN_CONTAINER).innerHTML = toFavoriteView(getFavorites());
    try {
        await toFavoriteView(getFavorites())
    } catch (error) {
        alert(error)
    }
};