import { INCREMENT_CLICK_COUNT_ON_TILE } from "../actionTypes/userActionTypes";

export function increaseClickCountOnTileById(tileId) {
  return { type: INCREMENT_CLICK_COUNT_ON_TILE, tileId: tileId };
}

/* the above function can be writter with ES6 as

export const increaseClickCountOnTileById = tileId => ({
  type: INCREMENT_CLICK_COUNT_ON_TILE,
  tileId,
});

*/
