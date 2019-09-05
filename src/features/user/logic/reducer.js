import * as types from './constants'
import {createReducer} from "../../../utils";

const initialState = {
  user_id: null,
  userName: null,
  dashboardList: [],
  isLoading: false,
  error: null,
  openModal: false,
  modalMessage: "",
  modalRedirect: null,

};

const user = createReducer(initialState, {
  [types.GET_USER_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoading: true})
  },
  [types.GET_USER_SUCCESS]: (state, action) => {
    const {
      userName,
      _id,
      dashboardList
    } = action.data;
    console.log(action);
    return Object.assign({}, state, {
      user_id: _id,
      userName,
      dashboardList,
      isLoading: false,
    });
  },
  [types.GET_USER_FAILURE]: (state, action) => {

    return Object.assign({}, state, {userName: null, isLoading: false})
  },
  [types.LOGIN_FAILURE]: (state, action) => {
    return Object.assign({}, state, {error: 'Login failed: ' + action.error});
  },
  [types.LOGIN_SUCCESS]: (state, action) => {
    const {userName, dashboardList, _id} = action.data;
    return Object.assign({}, state, {userName, dashboardList, user_id : _id, error: null})
  },
  [types.OPEN_MODAL]: (state, action) => {
    const {modalMessage, modalRedirect} = action;
    console.log('open modal: ', [modalMessage, modalRedirect]);
    return Object.assign({}, state, {modalMessage, modalRedirect, openModal: true});
  },
  [types.CLOSE_MODAL]: (state, action) => {

    return Object.assign({}, state, {modalMessage: "", modalRedirect: null, openModal: false})
  },
  [types.SIGN_UP_SUCCESS]: (state,action) => {
    const {userName, dashboardList, _id} = action.data;
    return Object.assign({}, state, {userName, dashboardList, user_id : _id, error: null});
  },
  [types.SIGN_UP_FAILURE] : (state,action) =>  {

    const {error} = action;

    return Object.assign({}, state , {error});
  },
  [types.LOG_OUT_SUCCESS] : (state,action) => {
    return initialState;
  }


});


export default user