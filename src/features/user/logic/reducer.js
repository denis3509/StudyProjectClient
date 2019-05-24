import * as types from './constants'
import {createReducer} from "../../../utils";

const initialState = {
  userName: null,
  dashboardList: [],
  isLoading: false,
  error: null,
  openModal : false,
  modalMessage: "",
  modalRedirect: null,

};

const user = createReducer(initialState, {
  [types.GET_USER_REQUEST]: (state,action) => {
    return Object.assign({},state,{isLoading : true})
  },
  [types.GET_USER_SUCCESS]: (state, action) => {
    const {
      userName,
      dashboardList
    } = action.data;
    console.log(action.type,action);
    return Object.assign({}, state, {
      userName,
      dashboardList,
      isLoading : false,
    });
  },
  [types.GET_USER_FAILURE]: (state,action) =>{

    return Object.assign({},state,{  userName: null, isLoading: false})
  },
  [types.LOGIN_FAILURE]: (state, action) => {
    return Object.assign({}, state, {error: 'Login failed: ' + action.error});
  },
  [types.LOGIN_SUCCESS]: (state, action) => {
    const {userName, dashboardList} = action;
    return Object.assign({}, state, {userName, dashboardList, error: null})
  },
  [types.OPEN_MODAL] : (state,action)=> {
    const {modalMessage, modalRedirect} = action;
    console.log('open modal: ', [modalMessage, modalRedirect]);
    return Object.assign({},state,{modalMessage, modalRedirect, openModal: true});
  },
  [types.CLOSE_MODAL]: (state, action) =>{

    return Object.assign({},state,{modalMessage : "", modalRedirect: null, openModal: false})
  }


});


export default user