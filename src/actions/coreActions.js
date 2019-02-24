import * as types from '../constants/actionTypes'
import {user} from '../constants/mainPage'

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

export const signIn = ({ login, pass }) => async (dispatch) => {
  const logUser =  {
    userName : user.userName,
  };
  dispatch(setUser(logUser));
};

export const logOut = () => async (dispatch) => {
  dispatch(removeUser());
  dispatch(setIsAuth(false));
};

export const fetchDashboardsRequest = () => {

}
