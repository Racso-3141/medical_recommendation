export const initialState = {
    diagnosis: [" "],
    procedure: [" "],
    drug: []
};

export const actionTypes = {
    SET_DIAG: "diagnosis",
    SET_PRO: "procedure",
    SET_DRUG: "drug",
    SET_RESET: "reset"
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DIAG:
            return {
                ...state,
                diagnosis: action.data
            };
        case actionTypes.SET_PRO:
            return {
                ...state,
                procedure: action.data
            };
        case actionTypes.SET_DRUG:
            return {
                ...state,
                drug: action.data
            };
        case actionTypes.SET_RESET:
            return {
                diagnosis: [" "],
                procedure: [" "],
                drug: []
            };
        default: 
            return state;
    }
};

export default reducer;