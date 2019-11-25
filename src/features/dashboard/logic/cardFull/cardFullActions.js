import api from '../api'
import * as types from '../constants'

export const newCard = (dashboard_id, column_id, card) => async dispatch => {
  dispatch({type: types.NEW_CARD_REQUEST});
  console.log('card full new card', card);
  api.newCard(dashboard_id, column_id, card)
    .then((response) => {


      dispatch({
        type: types.NEW_CARD_SUCCESS,
        data: {...response.data},
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.NEW_CARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const updateCard = (dashboard_id, column_id, card_id, update) => async dispatch => {
  dispatch({type: types.UPDATE_CARD_REQUEST});
  return new Promise((resolve, reject) => {
    api.updateCard(dashboard_id, column_id, card_id, update)
      .then((response) => {
        console.log('res update card: ', response);

        dispatch({
          type: types.UPDATE_CARD_SUCCESS,
          data: {...response.data},
        });
        resolve('updated')


      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: types.UPDATE_CARD_FAILURE,
          error: error.response ? error.response.data.message : "error"
        });
        reject(error);

      })
  })
};
export const removeCard = (dashboard_id, column_id, card_id) => async dispatch => {
  dispatch({type: types.REMOVE_CARD_REQUEST});
  api.removeCard(dashboard_id, column_id, card_id)
    .then((response) => {


      dispatch({
        type: types.REMOVE_CARD_SUCCESS,
        data: {...response.data},
      })
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({
        type: types.REMOVE_CARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};
export const getCard = (dashboard_id, column_id, card_id) => async dispatch => {
  dispatch({type: types.GET_CARD_REQUEST});
  console.log('get card request');
  api.getCard(dashboard_id, column_id, card_id)
    .then((response) => {


      dispatch({
        type: types.GET_CARD_SUCCESS,
        data: {...response.data},
      });
      console.log('get card success')
    })
    .catch((error) => {
      console.log('get card failure');
      dispatch({
        type: types.GET_CARD_FAILURE,
        error: error.response ? error.response.data.message : "error"
      });

    })
};

export const addCheckList = (checkListName = 'чек лист') => {
  return {
    type : types.ADD_CHECK_LIST,
    checkListName,
  }
};

export const removeCheckList = (checkList_ind)=> {
  return {
    type : types.REMOVE_CHECK_LIST,
    checkList_ind,
  }
};

export const addTask= (checkList_ind,taskContent) => {
  return {
    type : types.ADD_TASK,
    checkList_ind,
    taskContent,
  }
};
export const removeTask = (checkList_ind, task_ind) => {
  return {
    type : types.REMOVE_TASK,
    checkList_ind,
    task_ind
  }
};

export const toggleTask= (checkList_ind, task_ind) => {
  return {
    type : types.TOGGLE_TASK,
    checkList_ind,
    task_ind,
  }
};