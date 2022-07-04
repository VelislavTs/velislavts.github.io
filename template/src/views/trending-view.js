import { addImageToGrid, setMasonry } from "./main-view.js"
import { removeGrid } from "./search-view.js";


export const toTrendingView = async (trendingResults) => {
    removeGrid();
    const results = await trendingResults;
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
};
