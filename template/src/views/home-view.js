import { q, qs } from "../events/helpers.js";
import {
    addImageToGrid,
    removeGrid,
    setMasonry,
    setMasonryView
} from "./main-view.js"

export const toHomeView = async (randomGifs) => {
    
    const results = await randomGifs;
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });

    q('#grid').style.visibility = 'hidden';
    setMasonryView();
}
