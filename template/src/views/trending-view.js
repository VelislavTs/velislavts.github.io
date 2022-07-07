import { addImageToGrid, removeGrid, setMasonryView } from './main-view.js';
/**
 * @description: toTrendingView function is responsible for the trending view page. 
 * @param {Object} trendingResults 
 */
export const toTrendingView = async (trendingResults) => {
    removeGrid();
    const results = await trendingResults;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
    setMasonryView(4000);
};
