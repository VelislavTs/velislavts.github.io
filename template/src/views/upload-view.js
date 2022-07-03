import { getUploadedGifs } from "../data/upload.js"

export const setUploadView = () => {
    return `
    <div class="container col-md-6" id = "upload-controls">
        <div class="mb-5  text-center">
            <label for="Image" class="form-label"> Share your gif with the world! </label>
            <input class="form-control" type="file" id="formFile">
        </div>
        <div class = 'row'> 
            <div class = 'col-md-12' align="center"> 
                <button type = 'button' class = 'btn btn-dark' id = "reset-button"> Reset </button> 
                <button type = 'button' class = 'btn btn-dark' id = "upload-button"> Upload </button> 
            </div>
        </div>
        <img id="frame" src="" class="img-fluid" />
    </div> 
    
    <div class = 'container-fluid col-md-12 align="center"' id = "uploaded-grid">
        ${setUploadedGifs()}
    </div> 
    `
}


const setUploadedGifs = () => {
    const uploadedGifsByUser = getUploadedGifs();
    let result = '';
    uploadedGifsByUser.forEach(gif => {
        result += `\n <img src = ${gif} class = 'uploaded-images'> </img>`
    });
    setMasonryUploaded();
    return result;
}

const uploadedImages = document.getElementById('uploaded-grid');
const setMasonryUploaded = () => {
    new Masonry(uploadedImages, {
        itemSelector: '.uploaded-images',
        gutter: 10,
        originLeft: false,
        originRight: false,
        fitWidth: true,
    });
};