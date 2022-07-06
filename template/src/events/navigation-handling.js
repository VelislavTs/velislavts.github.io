import {
    ABOUT, FAVORITES, HOME, MAIN_CONTAINER, TRENDING, UPLOAD,
} from "../common/constants.js";
import { getFavoriteGifsById, getFavorites } from "../data/favorite.js";
import { loadTrendingData, sendGifForUpload } from "../requests/request-services.js";
import { toFavoriteView } from "../views/favorite-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { setUploadView, wrongFileError } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";
import { renderHomePage } from "./random-gifs-events.js";

export const loadPage = (page = '') => {
    if (page === HOME) {
        setActiveNav(HOME);
        q('#loading-screen').style.display = 'flex';
        renderHomePage();
    } else if (page === TRENDING) {
        setActiveNav(TRENDING);
        q('#loading-screen').style.display = 'flex';
        renderTrendingData();
    } else if (page === FAVORITES) {
        setActiveNav(FAVORITES);
        q('#loading-screen').style.display = 'flex';
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
            } catch(err) {
                q('#response').innerHTML = uploadResult;
            }
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
    const favoriteGifsIds = getFavorites().join(',');
    const result = await getFavoriteGifsById(favoriteGifsIds);
    let mainContainer = q(MAIN_CONTAINER).innerHTML;
    const favorites = await toFavoriteView(result);
    mainContainer = favorites;
    // view all liked gif-s / or one random 
};