import { API_KEY, RATING , RANDOM_REQUEST_URL } from "../common/requests-params.js"

// https://api.giphy.com/v1/gifs/random?api_key=m2h3bY3cGXyBHla3bhM7gIP64RY97yJg&tag=&rating=g

const getSingleGif = async() => {
    let apiCall = await fetch(RANDOM_REQUEST_URL + API_KEY + RATING);
    let response = await apiCall.json();
    return response;
}
export const getRandomGifs = async() => {
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
        const url = el.value.data.images.downsized.url || el.value.data.images.medium.url || el.value.data.images.large.url
        result.push(url);
    })
    
    return result;
}

