import {
    addImageToGrid,
    setMasonry
} from "./main-view.js"

export const toHomeView = async (randomGifs) => {
    
    const results = await randomGifs;
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
}
