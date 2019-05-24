import * as types from '../constants/actionTypes'
import {user} from '../constants/mainPage'


export const requestDashboardList = () => {
  return {
    type: types.REQUEST_DASHBOARD_LIST,
  }
};

export const invalidateDashboardList = () => {
  return {
    type: types.INVALIDATE_DASHBOARD_LIST
  }
};
export const receiveDashboardList = (items) => {
  return {
    type: types.RECEIVE_DASHBOARD_LIST,
    items
  }
};
export const fetchDashboardList = () => {
  return (dispatch) => {
    dispatch(requestDashboardList());
      dispatch(receiveDashboardList(user.dashboardList));

  }
};


export const requestNotificationList = () => {
  return {
    type: types.REQUEST_NOTIFICATION_LIST
  }
};

export const requestProfileData = () => {
  return {
    type: types.REQUEST_PROFILE_DATA
  }
};
