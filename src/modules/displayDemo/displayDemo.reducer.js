import * as actionTypes from './displayDemo.actionTypes'


const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case actionTypes.API_DATA:
      debugger
      return { ...state, data: action.payload }

case actionTypes.EDIT_DATA:
  debugger
  const userdata = state.map(each => {
    if (each.id === action.payload.user_id) {
      each.user_name = action.payload.user_name;
      each.user_username = action.payload.user_username;
      each.user_email = action.payload.user_email;
      each.user_address=action.payload.user_address;
    }
    return each;
  });
  return userdata;
      default:
        return state
    }
  
  } 
  
export default reducer
