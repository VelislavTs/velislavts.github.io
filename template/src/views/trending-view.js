import { qs } from "../events/helpers.js";
import { addImageToGrid, setMasonryView } from "./main-view.js"
import { removeGrid } from "./search-view.js";


export const toTrendingView = async (trendingResults) => {
    removeGrid();
    const results = await trendingResults;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
   
    setMasonryView(1000);
};
