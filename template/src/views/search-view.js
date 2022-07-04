import {
    addImageToGrid,
    setMasonry,
    addTextToGrid
} from "./main-view.js"

export const toSearchView = async (searchResults, searchQuery) => {
    
    const results = await searchResults;
    removeGrid();
    const query = await searchQuery;

    addTextToGrid(query)
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
