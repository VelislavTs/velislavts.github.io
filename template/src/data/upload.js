import { USER_NAME } from "../common/constants.js"
import { API_KEY, UPLOAD_REQUEST_URL } from "../common/requests-params.js"

export const uploadGif = async (file) => {
    const objectToSend = createJSONObject(file);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', UPLOAD_REQUEST_URL, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset = UTF-8');
    xhr.send(objectToSend);

    xhr.onload = () => {
        if (xhr.status === 201) {
            console.log(xhr.status)
        }
    }
}

const createJSONObject = (file) => {
    let obj = {
        "api_key": API_KEY,
        "username": USER_NAME,
        "file": file,
    };
    console.log(obj);
    return JSON.stringify(obj);
}