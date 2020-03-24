import * as actionTypes from './displayDemo.actionTypes'
export const apiDataItem = data => {
  console.log(data, 'action')
  debugger
  return {
    type: actionTypes.API_DATA,
    payload: data
  }
}
export const userEdit = data => {
  return {
    type: actionTypes.EDIT_DATA,
    payload: data
  }
}