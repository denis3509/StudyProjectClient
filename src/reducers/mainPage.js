import * as types from '../constants/actionTypes'

const initialState = {
  user: {},
  dashboardList: [],
  notifications: [],
  profileData:[],
};

export function mainPage(state = initialState, action) {
  switch (action.type) {
    case types.SET_DASHBOARD_LIST : {
      return Object.assign({}, state, action.dashboardList);
    }
    case types.SET_NOTIFICATIONS_LIST : {
      return Object.assign({}, state, action.notificationsList)
    }
    case types.SET_PROFILE_DATA : {
      return Object.assign({}, state , action.profileData)
    }
    default:
      return state
  }
}