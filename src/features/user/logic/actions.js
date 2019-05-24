import * as types from './constants'
import user from './api'
import {LOGIN_FAILURE} from "./constants";

export const getUser = (user_id = '5ccc292aacf40b1114bd7d6c') => async dispatch => {
  dispatch({
    type: types.GET_USER_REQUEST,
  });
  user.getUser(user_id)
    .then((res) => {
      dispatch({
        type: types.GET_USER_SUCCESS,
        data: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: types.GET_USER_FAILURE,
        error: error,
      })
    });
};

export const signUp = (userName, login, password, email) => {
  user.signUp(userName, login, password, email)
    .then((res) => {
      console.log('signUp res:', res)
    })
    .catch((error) => {
      console.log('signUp error', error);
    })
};
export const login = (login, password) => async dispatch => {
  user.login(login, password)
    .then((response) => {
      const {userName, dashboardList} = response.data;
      dispatch({
        type: types.LOGIN_SUCCESS,
        userName,
        dashboardList,
      });
      console.log('login res:', response)
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        error: error.response? error.response.data.message : 'connection error'
      });

    })
};

export const openModal=(modalMessage, modalRedirect)=>{
  return {
    type : types.OPEN_MODAL,
    modalMessage,
    modalRedirect,
  }
};

export const closeModal=()=>{
  return {
    type : types.CLOSE_MODAL,
  }
};