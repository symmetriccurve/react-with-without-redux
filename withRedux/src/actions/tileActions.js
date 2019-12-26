import { CLICK_ON_TILE } from "../actionTypes/tileActionTypes";

export function clickOnTile(tileNumber){
    return { type: CLICK_ON_TILE, tileNumber: tileNumber }
}