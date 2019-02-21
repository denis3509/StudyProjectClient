import * as types from '../constants/actionTypes'

export const setUser = (user) => {
  return {
    type : types.SET_USER,
    user
  }
};

export const setIsAuth = (isAuth) =>  {
  return {
    type : types.SET_IS_AUTH,
    isAuth,
  }
};

export const removeUser = () =>{
  return {
    type: types.REMOVE_USER
  }
};