import * as types from './constants'
import user from './api'

export const getUser =  (user_id = '5ccc292aacf40b1114bd7d6c') => async dispatch => {
  user.getUser(user_id)
    .then((res)=>{
      dispatch({
        type: types.GET_USER_SUCCESS,
        data: res.data
      })
    })
    .catch((error)=>{
      dispatch({
        type: types.GET_USER_FAILURE,
        error: error,
      })
    });

};