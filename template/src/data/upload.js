import {
    API_KEY,
    UPLOAD_REQUEST_URL,
    USERNAME
} from "../common/requests-params.js"

export const uploadGif = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const fetchURL = UPLOAD_REQUEST_URL + API_KEY + USERNAME
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };

    const response = await fetch(fetchURL, requestOptions)
    const result = await response.text();
}