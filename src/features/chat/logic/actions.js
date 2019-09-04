import * as types from './constants'
import api from './api'


export const addNewMessage = (message) =>  {
  return ({
    type: types.ADD_NEW_MESSAGE,
    message
  })
};
export const getMessages = (dashboard_id) => async dispatch=> {
  api.getMessages(dashboard_id)
    .then(res=>{
      dispatch({
        type : types.GET_MESSAGES,
        messages : res.data,
      })
    })
    .catch(error => {
      console.log('set messages error', error.response);
    })
};