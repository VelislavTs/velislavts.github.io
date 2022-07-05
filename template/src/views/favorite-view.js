import { qs } from "../events/helpers.js";
import { addImageToGrid, removeGrid, setMasonryView } from "./main-view.js"
export const toFavoriteView = async (favorite) => {
    removeGrid();
    const results = await favorite;
    results.data.forEach(gifData => {
        addImageToGrid(gifData);
    });
    setMasonryView(500);
};
