import {
    API_KEY,
    SEARCH_REQUEST_URL,
    UPLOAD_REQUEST_URL,
    USERNAME
} from "../common/requests-params.js"

const uploadedGifsByUser = localStorage.getItem('uploaded') || [];

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
    const result = await response.json();
    const resultURL = await getImageSource(result);
    
    uploadedGifsByUser.push(resultURL);
    localStorage.setItem('uploaded', uploadedGifsByUser);
}

const getImageSource = async (response) => {
    const key = response.data.id;
    const fetchURL = SEARCH_REQUEST_URL + key + '?' + API_KEY;
    try {
        const request = await fetch(fetchURL)
        const response = await request.json();
        const url = response.data.images.downsized_medium.url;
        return url;
    } catch (err) {
        alert(err);
    }
}

export const getUploadedGifs = () => {
    return uploadedGifsByUser;
}