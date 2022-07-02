import {
    ABOUT,
    FAVORITES,
    HOME,
    MAIN_CONTAINER,
    TRENDING,
    UPLOAD,
} from "../common/constants.js";
import { sendGifForUpload } from "../requests/request-services.js";
import {
    setUploadView
} from "../views/upload-view.js";
import {
    q,
    setActiveNav
} from "./helpers.js";

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
    q('#formFile').addEventListener('change', (event) => {
        q('#frame').src = URL.createObjectURL(event.target.files[0]);
    });

    q('#reset-button').addEventListener('click', () => {
        q('#frame').src = '';
        q('#formFile').value = null;
    });

    q('#upload-button').addEventListener('click', () => {
        console.log(q('#formFile').files[0])
        if (q('#formFile').files[0]) {
            sendGifForUpload(q('#formFile').files[0]);
        };
    });
};