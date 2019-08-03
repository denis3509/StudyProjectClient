import api from './api'
import * as types from './constants'


export const getDashboard = (dashboard_id) => async dispatch => {
  dispatch({type: types.GET_DASHBOARD_REQUEST});
  api.getDashboard(dashboard_id)
    .then((response) => {
      dispatch({
        type: types.GET_DASHBOARD_SUCCESS,
        ...response.data,
      });

    })
    .catch((error) => {
      console.log('catch error getdash', error);
      dispatch({
        type: types.GET_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const refreshDashboard = (dashboard_id) => async dispatch => {
  api.getDashboard(dashboard_id)
    .then((response) => {


      dispatch({
        type: types.GET_DASHBOARD_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {


    })
}

export const newDashboard = (dashboard) => async dispatch => {
  dispatch({type: types.NEW_DASHBOARD_REQUEST});
  api.newDashboard(dashboard)
    .then((response) => {


      dispatch({
        type: types.NEW_DASHBOARD_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.NEW_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateDashboard = (dashboard_id, update) => async dispatch => {
  dispatch({type: types.UPDATE_DASHBOARD_REQUEST});
  api.updateDashboard(dashboard_id, update)
    .then((response) => {


      dispatch({
        type: types.UPDATE_DASHBOARD_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.UPDATE_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const removeDashboard = (dashboard_id) => async dispatch => {
  dispatch({type: types.REMOVE_DASHBOARD_REQUEST});
  api.removeDashboard(dashboard_id)
    .then((response) => {
      dispatch({
        type: types.REMOVE_DASHBOARD_SUCCESS,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.REMOVE_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};


export const newColumn = (dashboard_id, column) => async dispatch => {
  dispatch({type: types.NEW_COLUMN_REQUEST});
  api.newColumn(dashboard_id, column)
    .then((response) => {



      dispatch({
        type: types.NEW_COLUMN_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.NEW_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateColumn = (dashboard_id, column_id, update) => async dispatch => {
  dispatch({type: types.UPDATE_COLUMN_REQUEST});
  api.updateColumn(dashboard_id, column_id, update)
    .then((response) => {



      dispatch({
        type: types.UPDATE_COLUMN_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.UPDATE_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const removeColumn = (dashboard_id, column_id) => async dispatch => {
  dispatch({type: types.REMOVE_COLUMN_REQUEST});
  api.removeColumn(dashboard_id, column_id)
    .then((response) => {


      dispatch({
        type: types.REMOVE_COLUMN_SUCCESS,
        ...response.data,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.REMOVE_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};

export const setCardOpen = (dashboard_id, column_id, card_id) => {
  return {
    type: types.SET_CARD_OPEN,
    dashboard_id,
    column_id,
    card_id,
  }
};
export const closeCardOpen = () => {
  return {
    type: types.CLOSE_CARD_OPEN,
  }
};


export const setCardHeightDnD = (cardHeightDnD) => {
  return {
    type: types.SET_CARD_HEIGHT_DND,
    cardHeightDnD
  }
};