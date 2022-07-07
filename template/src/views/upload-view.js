import { getUploadedGifs } from '../data/upload.js';
import { q } from '../events/helpers.js';
import { removeGrid } from './main-view.js';

export const setUploadView = () => {
    return `
    <div class="container col-md-6" id = "upload-controls">
        <div class="mb-5  text-center">
            <label for="Image" class="form-label"> <h3> Share your gif with the world! </h3> </label>
            <input class="form-control" type="file" id="formFile">
        </div>
        <div class = 'row'> 
            <div class = 'col-md-12' align="center"> 
                <button type = 'button' class = 'btn btn-dark' id = "reset-button"> Reset </button> 
                <button type = 'button' class = 'btn btn-dark' id = "upload-button"> Upload </button> 
            </div>
        </div>
        <h3 id = 'response'>  </h3>
        <img id="frame" src="" class="img-fluid" />
    </div> 
    
    <h2 style = "text-align:center"> Your uploaded GIFs </h2>
    <div class = 'container-fluid col-md-12 align="center"' id="image-grid">
        <div class = 'row' id = 'images'> 
            ${setUploadedGifs()}
        </div>
    </div> 
    `;
};


const setUploadedGifs = () => {
    removeGrid();
    const uploadedGifsByUser = getUploadedGifs();
    let result = '';
    uploadedGifsByUser.forEach(gif => {
        result += `\n <img src = '${gif}' class = 'grid-item'>`;
    });
    return result;
};

export const wrongFileError = () => {
    q('#response').innerHTML = 'Sorry, we accept only gifs';
    const emoji = document.createElement('img');
    emoji.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/65/face-massage_emoji-modifier-fitzpatrick-type-3_1f486-1f3fc_1f3fc.png';
    q('#response').appendChild(emoji);
};

export const noFileUploadedError = () => {
    setTimeout(() => {
        q('#response').innerHTML = 'You forgot to upload a gif';
        const emoji = document.createElement('img');
        emoji.src = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/65/crying-cat-face_1f63f.png';
        q('#response').appendChild(emoji);
    }, 200);
};