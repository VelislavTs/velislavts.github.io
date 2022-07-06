import {
    ABOUT, FAVORITES, HOME, MAIN_CONTAINER, TRENDING, UPLOAD,
} from "../common/constants.js";
import { getFavoriteGifsById, getFavorites } from "../data/favorite.js";
import { loadTrendingData, sendGifForUpload } from "../requests/request-services.js";
import { toFavoriteView } from "../views/favorite-view.js";
import { toggleLoading } from "../views/loading-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { noFileUploadedError, setUploadView, wrongFileError } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";
import { renderHomePage } from "./random-gifs-events.js";

export const loadPage = async (page = '') => {
    if (page === HOME) {
        setActiveNav(HOME);
        toggleLoading();
        await renderHomePage();
    } else if (page === TRENDING) {
        setActiveNav(TRENDING);
        toggleLoading();
        await renderTrendingData();
    } else if (page === FAVORITES) {
        setActiveNav(FAVORITES);
        toggleLoading();
        await renderFavorites();
    } else if (page === UPLOAD) {
        q('#grid').style.height = "50px";
        setActiveNav(UPLOAD);
        renderUpload();
    }
};

export const renderUpload = () => {
    q(MAIN_CONTAINER).innerHTML = setUploadView();
    q('#formFile').addEventListener('change', (event) => {
        if (event.target.files[0].type !== 'image/gif') {
            wrongFileError();
            clearPreview();
        }
        q('#frame').src = URL.createObjectURL(event.target.files[0]);
    });

    q('#reset-button').addEventListener('click', () => {
        clearPreview();
    });
    q('#upload-button').addEventListener('click', async () => {
        if (q('#formFile').files[0]) {
            try {
                const uploadResult = await sendGifForUpload(q('#formFile').files[0]);
                q('#response').innerHTML = uploadResult;
                clearPreview();
            } catch (err) {
                q('#response').innerHTML = uploadResult;
            }
        } else {
            noFileUploadedError()
        };
    });
};

export const renderTrendingData = async () => {
    const trendingResults = await loadTrendingData();
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    mainContainer = await toTrendingView(trendingResults);
    return mainContainer;
};

const clearPreview = () => {
    q('#frame').src = '';
    q('#formFile').value = null;
}

export const renderFavorites = async () => {
    const favoriteGifsIds = getFavorites().join(',');
    const result = await getFavoriteGifsById(favoriteGifsIds);
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    mainContainer = await toFavoriteView(result);
    return mainContainer;
};