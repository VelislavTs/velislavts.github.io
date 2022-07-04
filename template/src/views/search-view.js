import {
    addImageToGrid,
    setMasonry
} from "./main-view.js"

export const toSearchView = async (searchResults) => {
    
    const results = await searchResults;
    removeGrid();
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
}

export const removeGrid = () => {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(item => {
        document.getElementById('grid').removeChild(item);
    })
}
