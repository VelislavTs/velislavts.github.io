import { API_KEY, RATING , RANDOM_REQUEST_URL } from '../common/requests-params.js';

// https://api.giphy.com/v1/gifs/random?api_key=m2h3bY3cGXyBHla3bhM7gIP64RY97yJg&tag=&rating=g

export const getSingleGif = async() => {
    try{
        let apiCall = await fetch(RANDOM_REQUEST_URL + API_KEY + RATING);
        let response = await apiCall.json();
        return response;
    }catch (err) {
        return err.message;
    }
};
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
        });
        
        return data;
    } catch (err) {
        return err.message;
    }
    
};

