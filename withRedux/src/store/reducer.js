const childStates = []

for(let i=0;i<100;i++){
   childStates.push(0)
}

const initialState = childStates

const reducer = (state=initialState, action) => {
    const newState = state.slice();

    switch(action.type){
        case 'CLICK_ON_CHILD': 
            newState[action.value] = newState[action.value] + 1;
            break;
    }
    return newState;
};

export default reducer;