import api from './api'
import * as types from './constants'


export const getDashboard = (dashboard_id) => async dispatch => {
  dispatch({type: types.GET_DASHBOARD_REQUEST});
  api.getDashboard(dashboard_id)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.GET_DASHBOARD_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.GET_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const newDashboard = (dashboard)=> async dispatch => {
  dispatch({type: types.NEW_DASHBOARD_REQUEST});
  api.newDashboard(dashboard)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.NEW_DASHBOARD_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.NEW_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateDashboard = (dashboard_id, update)=> async dispatch => {
  dispatch({type: types.UPDATE_DASHBOARD_REQUEST});
  api.updateDashboard(dashboard_id, update)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.UPDATE_DASHBOARD_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.UPDATE_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const removeDashboard = (dashboard_id)=> async dispatch => {
  dispatch({type: types.REMOVE_DASHBOARD_REQUEST});
  api.removeDashboard(dashboard_id )
    .then((response) => {
      dispatch({
        type: types.REMOVE_DASHBOARD_SUCCESS,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.REMOVE_DASHBOARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};


export const newColumn = (dashboard_id, column)=> async dispatch => {
  dispatch({type: types.NEW_COLUMN_REQUEST});
  api.newColumn(dashboard_id,column)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.NEW_COLUMN_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.NEW_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateColumn = (dashboard_id, column_id, update)=> async dispatch => {
  dispatch({type: types.UPDATE_COLUMN_REQUEST});
  api.updateColumn(dashboard_id,column_id, update)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.UPDATE_COLUMN_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.UPDATE_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const removeColumn = (dashboard_id, column_id)=> async dispatch => {
  dispatch({type: types.REMOVE_COLUMN_REQUEST});
  api.removeColumn(dashboard_id, column_id)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;

      dispatch({
        type: types.REMOVE_COLUMN_SUCCESS,
        dashboardName,
        description,
        columns
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.REMOVE_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};

export const newCard = (dashboard_id,column_id,card_id,card)=> async dispatch => {
  dispatch({type: types.NEW_COLUMN_REQUEST});
  api.newCard(dashboard_id,column_id,card_id,card)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.NEW_COLUMN_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.NEW_COLUMN_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateCard = (dashboard_id, column_id, card_id,update)=> async dispatch => {
  dispatch({type: types.UPDATE_CARD_REQUEST});
  api.updateCard(dashboard_id,column_id, card_id,update)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;


      dispatch({
        type: types.UPDATE_CARD_SUCCESS,
        dashboardName,
        description,
        columns,
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.UPDATE_CARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const removeCard = (dashboard_id, column_id, card_id)=> async dispatch => {
  dispatch({type: types.REMOVE_CARD_REQUEST});
  api.removeCard(dashboard_id, column_id, card_id)
    .then((response) => {
      const {
        dashboardName,
        description,
        columns
      } = response.data;

      dispatch({
        type: types.REMOVE_CARD_SUCCESS,
        dashboardName,
        description,
        columns
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch ({
        type: types.REMOVE_CARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
