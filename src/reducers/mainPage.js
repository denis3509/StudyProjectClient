import * as types from '../constants/actionTypes'

const initialState = {

  dashboardList: {
    isFetching : false,
    didInvalidate: false,
    items:[]
  },
  notifications: {
    isFetching : false,
    didInvalidate: false,
    items:[]
  },
  profileData:{
    isFetching : false,
    didInvalidate: false,
    item: {},
  },
};

const dashboardList = (state,action) =>{
  switch (action.type) {
    case types.REQUEST_DASHBOARD_LIST :
      return Object.assign({},state, {isFetching : true , didInvalidate : false});
    case types.INVALIDATE_DASHBOARD_LIST :
      return Object.assign({}, state, {isFetching : false, didInvalidate : true});
    case types.RECEIVE_DASHBOARD_LIST :
      return Object.assign({}, state, {isFetching : false, items : action.items});
    default :
    return state;
  }

};

export function mainPage(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_DASHBOARD_LIST :
    case types.INVALIDATE_DASHBOARD_LIST :
    case types.RECEIVE_DASHBOARD_LIST :
      return Object.assign({}, state, {dashboardList : dashboardList(state.dashboardList, action) });

    default:
      return state
  }
}