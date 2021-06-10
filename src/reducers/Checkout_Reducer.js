import { GET_CHANGE, HANDLE_SUBMIT } from "../actions";

const reducer = (state, action) => {
  if (action.type === GET_CHANGE) {
    console.log(action.name, action.payload);
    return { ...state, [action.name]: action.payload };
  }
    if (action.type === HANDLE_SUBMIT) {
        if (state.name) {
            const newPerson = { ...state, id: new Date().getTime().toString() };
            return {...state, newPerson}
        }
        return {...state}
    }
    
    throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;