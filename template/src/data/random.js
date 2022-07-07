import { API_KEY, RATING , RANDOM_REQUEST_URL } from "../common/requests-params.js"
/**
 * @description: getSingleGif function will make a fetch request for random single Gif.
 * @returns: It returns the response from the Giphy API. 
 */
export const getSingleGif = async() => {
    try{
        let apiCall = await fetch(RANDOM_REQUEST_URL + API_KEY + RATING);
        let response = await apiCall.json();
        return response;
    }catch (err) {
        return err.message;
    }
}
/**
 * @description: getRandomGifs function will make a fetch request for multiple random Gif.
 * @returns:It returns the response from the Giphy API as an array.  
 */
export const getRandomGifs = async() => {
    try{
        let response;
        let promises = [];
        let result = [];
        let currPage = 1;
        while(currPage <= 15) {
            response = await getSingleGif();
            promises.push(response);
            currPage++;
        }
        const data = await Promise.allSettled(promises);       
        data.forEach((el) => {
            result.push(el);
        })
        return data;
    } catch (err) {
        return err.message;
    }
    
}

