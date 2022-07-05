import { addImageToGrid, setMasonry } from "./main-view.js"
import { removeGrid } from "./search-view.js";

export const toFavoriteView = async (favorite) => {
    removeGrid();
    const results = await favorite;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
    setTimeout(() => {
        setMasonry()
    }, 50);
};
