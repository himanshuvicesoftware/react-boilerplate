import * as actionTypes from './displayTable.actions'

const initialState = {
    data:[]
}

const reducer = (state=initialState,action) => {
    debugger
    switch(action.type){
        case actionTypes.ADD_DATA_TO_TABLE:
            return {
                data: action.payload.data
            }
        default: return state;
    }
}

export default reducer;