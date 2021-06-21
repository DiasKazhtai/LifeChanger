const defaultState = {
    test: 1
};


export const cashReducer = (state = defaultState, action: any) => {
    switch(action.payload) {
        default:
            return state;
    };
};