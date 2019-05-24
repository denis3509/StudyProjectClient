import {createReducer} from "../../../utils";
import * as types from './constants'

const initialState = {
  dashboardName: null,
  columns: [],
  description: null,
  isLoading: false,
  error: null,
};

const dashboard = createReducer(initialState, {
  [types.GET_DASHBOARD_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoading: true});
  },
  [types.GET_DASHBOARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },
  [types.GET_DASHBOARD_FAILURE]: (state, action) => {
    const {error} = action;
    return Object.assign({}, state, {error: error, isLoading: false})
  },

  [types.NEW_DASHBOARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.UPDATE_DASHBOARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_DASHBOARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.NEW_CARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.GET_CARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.UPDATE_CARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_CARD_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.NEW_COLUMN_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.GET_COLUMN_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_COLUMN_SUCCESS]: (state, action) => {
    const {dashboardName, description, columns} = action;
    return Object.assign({}, state, {
      dashboardName,
      description,
      columns,
      isLoading: false,
      error: null,
    })
  },


});
export default dashboard