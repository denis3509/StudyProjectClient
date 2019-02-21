import * as types from '../constants/actionTypes'

export const setColumnList = (columnList) => {
 return {
   type: types.SET_COLUMN_LIST,
   columnList
 }
};
export const setNotificationsList =(notificationsList)=> {
  return {
    type : types.SET_NOTIFICATIONS_LIST,
    notificationsList
  }
};
export const setProfileData = (profileData) => {
  return {
    type : types.SET_PROFILE_DATA,
    profileData
  }

};

