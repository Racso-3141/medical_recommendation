export const initialState = {
    "diagnosis": [],
    "procedure": [],
    "drug": [],
    "notify":<h3>Click left button to get Drugs</h3>,
};

export const actionTypes = {
    SET_DIAG: "diagnosis",
    SET_PRO: "procedure",
    SET_DRUG: "drug",
    SET_RESET: "reset",
    SET_NOTIF_ORIGINAL: "original",
    SET_NOTIF_LOADING: "loading",
    SET_NOTIF_EMPTY: "empty",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DIAG:
            return {
                ...state,
                "diagnosis": action.data
            };
        case actionTypes.SET_PRO:
            return {
                ...state,
                "procedure": action.data
            };
        case actionTypes.SET_DRUG:
            return {
                ...state,
                "drug": action.data
            };
        case actionTypes.SET_RESET:
            return {
                ...state,
                "diagnosis": [],
                "procedure": [],
                "drug": []
            };
        case actionTypes.SET_NOTIF_LOADING:
            return {
                ...state,
                "notify": <h3>Loading Drugs ... Wait for 5-30s </h3>
            };
        case actionTypes.SET_NOTIF_ORIGINAL:
                return {
                    ...state,
                    "notify": <h3>Click left button to get Drugs</h3>
                };
        case actionTypes.SET_NOTIF_EMPTY:
            return {
                ...state,
                "notify": null
            };
        default: 
            return state;
    }
};

export default reducer;