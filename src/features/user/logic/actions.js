import * as types from './constants'
import api from './api'
import {LOGIN_FAILURE} from "./constants";

export const getUser = (user_id = '5ccc292aacf40b1114bd7d6c') => async dispatch => {
  dispatch({
    type: types.GET_USER_REQUEST,
  });
  api.getUser(user_id)
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

export const signUp = (userName, login, password, passwordConfirm, email) => async dispatch => {
  api.signUp(userName, login, password, passwordConfirm, email)
    .then((response) => {
      dispatch({
        type: types.SIGN_UP_SUCCESS,
        data: response.data
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.SIGN_UP_FAILURE,
        error: error.response.data.message,
      })
    })
};
export const login = (login, password) => async dispatch => {
  api.login(login, password)
    .then((response) => {

      dispatch({
        type: types.LOGIN_SUCCESS,
        data: response.data
      });
      console.log('login res:', response)
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAILURE,
        error: error.response ? error.response.data.message : 'connection error'
      });

    })
};

export const logout = () => async dispatch => {
  api.logout()
    .then(res => (
      dispatch({
        type: types.LOGIN_SUCCESS
      })
    ))
    .catch((error) => {
      dispatch({
        type: types.LOG_OUT_FAILURE,
      })
    })
}


export const openModal = (modalMessage, modalRedirect) => {
  return {
    type: types.OPEN_MODAL,
    modalMessage,
    modalRedirect,
  }
};

export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL,
  }
};