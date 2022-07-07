import {
    API_KEY,
    SEARCH_REQUEST_BY_ID_URL,
    UPLOAD_REQUEST_URL,
    USERNAME
} from '../common/requests-params.js';
/** uploadedGifs keeps all upladed gifs stored in the local storage. */
let uploadedGifs = JSON.parse(localStorage.getItem('uploaded')) || [];
/**
 * @description: uploadGif function will make a POST request to the Giphy API. 
 * @param {Object} file 
 * @returns: It returns a notification message with the information if the request was fulfilled or not. 
 */
export const uploadGif = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);
        const fetchURL = UPLOAD_REQUEST_URL + API_KEY + USERNAME;
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };
        const response = await fetch(fetchURL, requestOptions);
        const result = await response.json();
        const resultURL = await getImageSource(result);
        uploadedGifs.push(resultURL);
        localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
        return 'Gif successfully uploaded';
    } catch (err) {
        return 'Failed to upload the gif';
    }

};
/**
 * @description: getImageSource function will make a GET request for specific Gif using its ID.
 * @param {Object} response 
 * @returns: It returns the URL of the specific Gif
 */
const getImageSource = async (response) => {
    const key = response.data.id;
    const fetchURL = SEARCH_REQUEST_BY_ID_URL + key + '?' + API_KEY;
    try {
        const request = await fetch(fetchURL);
        const response = await request.json();
        const url = response.data.images.downsized_medium.url;
        return url;
    } catch (err) {
        return err;
    }
};
/**
 * @description: getUploadedGifs function will return an array with all uploaded Gifs.
 * @returns: It returns an array with all uploaded Gifs.
 */
export const getUploadedGifs = () => {
    return [...uploadedGifs];
};