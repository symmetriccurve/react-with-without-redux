import { INCREMENT_CLICK_COUNT_ON_TILE } from "../actionTypes/userActionTypes";

const tilesData = {};

for (let i = 0; i <= 100; i++) {
  tilesData[i] = {
    tileId: i,
    clickCount: 0,
  };
}

/**
 * This above for loop generates below default initial data
 tilesData = {
    1: {
        tileId: 1,
        clickCount: 0,
    },
    2: {
        tileId: 2,
        clickCount: 0,
    },
    .
    .
    .
    100: {
        tileId: 100,
        clickCount: 0,
    }
}

usually in real use case application this will be something like this for profileReducer

 userProfile = {
   firstName: 'John',
   lastName: 'Smith,
   isAdmin: false,
   isGuest: true,
   avatarURL: 'https://someURL/someImage.png'
}

 */

const initialState = tilesData;

const tilesReducer = (previousState = initialState, action) => {
  const actionType = action.type;
  const tileId = action.tileId;

  /**
   * Below is the one line of code all the magic happens in redux,
   * Take a copy(deep copy- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) of Previous State,
   * change the newState in a way you wanted your state to be in this case newState[payload] + 1;
   */

  const newState = Object.assign({}, previousState); //Object.assign makes a deep copy of the object

  switch (actionType) {
    case INCREMENT_CLICK_COUNT_ON_TILE:
      newState[tileId].clickCount = newState[tileId].clickCount + 1;
      break;
    default:
  }
  return newState;
};

export default tilesReducer;
