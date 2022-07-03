import { addImageToGrid, setMasonry } from "./main-view.js"


export const toTrendingView = async (trendingResults) => {

    const results = await trendingResults;
    results.forEach(imageUrl => {
        addImageToGrid(imageUrl);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
};
