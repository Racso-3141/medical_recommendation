export const initialState = {
    diagnoses: [],
    procedures: [],
    drugs: []
};

export const actionTypes = {
    SET_DIAG: "diagnosis",
    SET_PRO: "procedure",
    SET_DRUG: "drug"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_DIAG:
            return {
                ...state,
                diagnoses: action.data
            };
        case actionTypes.SET_PRO:
            return {
                ...state,
                procedures: action.data
            };
        case actionTypes.SET_DRUG:
            return {
                ...state,
                diagnoses: action.data
            };
        default: 
            return state;
    }
};

export default reducer;