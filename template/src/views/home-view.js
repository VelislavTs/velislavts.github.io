import {
    addImageToGrid,
    setMasonry
} from "./main-view.js"

export const toHomeView = async (randomGifs) => {
    
    const results = await randomGifs;
    removeGrid();
    //addImageToGrid(results)
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
}

const removeGrid = () => {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        document.getElementById('grid').removeChild(item);
    })
}