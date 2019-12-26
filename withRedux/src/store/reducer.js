import { CLICK_ON_TILE } from "../actionTypes/tileActionTypes";

const childStates = []

for(let i=0;i<100;i++){
   childStates.push(0)
}

const initialState = childStates // [0,0,0,0,0,1,2,3,4,5,0, . . .]

const reducer = (state=initialState, action) => {

    const actionType = action.type
    const payload = action.tileNumber
    //Slice on a array makes a deep copy of the object
    const newState = state.slice();

    switch(actionType){
        case CLICK_ON_TILE: 
                newState[payload] = newState[payload] + 1;
            break;
        default :
    }
    return newState;
};

export default reducer;