import {
    API_KEY,
    UPLOAD_REQUEST_URL,
    USERNAME
} from "../common/requests-params.js"

export const uploadGif = async (file) => {
    const objectToSend = createJSONObject(file);
    const fetchURL = UPLOAD_REQUEST_URL + API_KEY + USERNAME
    let xhr = new XMLHttpRequest()
     
    xhr.open('POST', fetchURL, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(post);
     
    xhr.onload = function () {
        if(xhr.status === 201) {
            console.log("Post successfully created!") 
        }
    }
}

const createJSONObject = (file) => {
    let obj = {
        "file": file,
    };
    return JSON.stringify(obj);
}

// const fetchURL = UPLOAD_REQUEST_URL + API_KEY + USERNAME
// let response = await fetch(fetchURL, {
//     method: 'POST',
//     body: objectToSend,
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//     }
// })

// response = await response.json();
// const data = response.json();
// const status = data.status;
// alert(status)