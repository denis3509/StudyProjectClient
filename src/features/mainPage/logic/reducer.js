import * as types from './constants'
import {createReducer} from "../../../utils";

const initialState = {
  userName: null,
  user_id: null,
  dashboardList: [],
};

const mainPage = createReducer(initialState, {
  [types.GET_USER_SUCCESS] : (state,action) => {
    const {
      userName,
      _id,
      dashboardList
    } = action.data;

    return Object.assign({}, state, {
      userName,
      user_id: _id,
      dashboardList,
    });
  },
  [types.GET_USER_FAILURE]: (state,action) =>{
    console.log(action.type,action.error);
    return state;
  }
});


export default mainPage