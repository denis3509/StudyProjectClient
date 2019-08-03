import {createReducer, createDnD} from "../../../utils";
import * as types from './constants'
import cardFullReducer from './cardFull/cardFullReducer'

const initialState = {
  dashboardName: null,
  dashboard_id : null,
  columns: [],
  columnsDnD: [],
  description: null,
  isLoading: false,
  error: null,
  cardOpen: null,
  card: {},
  cardHeightDnD: 54,
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

  [types.UPDATE_CARD_REQUEST]: (state, action) => {

    return Object.assign({}, state, {

      isLoading: false,
      error: null,
      card: cardFullReducer(state.card, action),
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

  [types.GET_CARD_REQUEST]: (state, action) => {
    console.log('get card request reducer')
    return Object.assign({}, state, {card: cardFullReducer(state.card, action)});
  },
  [types.GET_CARD_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {card: cardFullReducer(state.card, action)});
  },
  [types.GET_CARD_FAILURE]: (state, action) => {
    return Object.assign({}, state, {card: cardFullReducer(state.card, action)});
  },

  [types.SET_CARD_OPEN]: (state, action) => {
    const {dashboard_id, column_id, card_id} = action;
    return Object.assign({}, state, {cardOpen: {dashboard_id, column_id, card_id}});
  },
  [types.CLOSE_CARD_OPEN]: (state, action) => {
    return Object.assign({}, state, {cardOpen: null, card: {}})
  },
  [types.SET_CARD_HEIGHT_DND]: (state, action) => {
    const {cardHeightDnD} = action;
    return Object.assign({}, state,{cardHeightDnD});
  }

});
export default dashboard