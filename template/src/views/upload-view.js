import { getUploadedGifs } from "../data/upload.js"
import { q } from "../events/helpers.js";
import { setMasonry, setMasonryView } from "./main-view.js";

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
        <img id="frame" src="" class="img-fluid" />
    </div> 
    
    <h2 style = "text-align:center"> Your uploaded GIFs </h2>
    <div class = 'container-fluid col-md-12 align="center"' id="grid">
        <div class = 'row'  data-masonry='{}> 
        ${setUploadedGifs()}
        </div>
    </div> 
    `
}


const setUploadedGifs = () => {
    const uploadedGifsByUser = getUploadedGifs();
    let result = '';
    uploadedGifsByUser.forEach(gif => {
        result += `\n <img src = ${gif} class = 'grid-item'> </img>`
    });
    setMasonryView();
    return result;
}
