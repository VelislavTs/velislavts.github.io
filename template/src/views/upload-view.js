import { renderSearchData } from "../events/search-events.js"

export const setUploadView = () => {
    return `
    <div class="container col-md-6">
        <div class="mb-5  text-center">
            <label for="Image" class="form-label" > Share your gif with the world! </label>
            <input class="form-control" type="file" id="formFile" ">
        </div>
        <img id="frame" src="" class="img-fluid" />
    </div>  
    `
}

{/* <button onclick="clearImage()" class="btn btn-primary mt-3">Click me</button> 
    <script>
        function preview() {
            frame.src = URL.createObjectURL(event.target.files[0]);
        }
        function clearImage() {
            document.getElementById('formFile').value = null;
            frame.src = "";
        }
    </script> */}