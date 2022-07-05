import { addImageToGrid, setMasonry } from "./main-view.js"
import { removeGrid } from "./search-view.js";


export const toTrendingView = async (trendingResults) => {
    removeGrid();
    const results = await trendingResults;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
};
