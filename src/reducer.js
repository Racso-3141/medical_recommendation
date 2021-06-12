export const initialState = {
    diagnoses: [],
    procedures: []
};

const reducer = (state, action) => {
    console.log(action);
    return {
        ...state,
        diagnoses: action.diagnoses,
        procedures: action.procedures
    };
};

export default reducer;