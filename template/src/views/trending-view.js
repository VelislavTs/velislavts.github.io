import { qs } from "../events/helpers.js";
import { addImageToGrid, removeGrid, setMasonryView } from "./main-view.js"


export const toTrendingView = async (trendingResults) => {
    removeGrid();
    const results = await trendingResults;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
   
    setMasonryView(1000);
};
