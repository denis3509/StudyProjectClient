import {combineReducers} from 'redux'
import * as types from '../constants/actionTypes'
import {mainPage} from './mainPage'

const initialState = {
  user: null,
  isAuth: false,
};

function core(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER: {
      if (!action.user) return null;

      return {
        ...state,
        user: action.user
      };
    }

    case types.SET_IS_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth
      }
    }

    case types.REMOVE_USER: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  core,
  mainPage
});

export default rootReducer;