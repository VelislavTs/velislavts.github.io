import { getFavorites } from '../data/favorite.js';
import { getSingleGif } from '../data/random.js';

import { qs } from '../events/helpers.js';
import { addImageToGrid, removeGrid, setMasonryView } from './main-view.js';

export const toFavoriteView = async (favorite) => {

    removeGrid();

    const favoriteLength = getFavorites();
    if (favoriteLength.length === 0) {
        const randomSingleGif = await getSingleGif();
        addImageToGrid(randomSingleGif.data);
        setMasonryView(1500);

    } else {

        const results = await favorite;
        results.data.forEach(gifData => {
            addImageToGrid(gifData);
        });
        setMasonryView(1500);
    }
};
