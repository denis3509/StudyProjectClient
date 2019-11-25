import {createReducer, createDnD} from "../../../utils";
import * as types from './constants'

const initialState = {
  dashboardName: null,
  _id: null,
  columns: [],
  columnsDnD: [],
  description: null,
  isLoading: false,
  error: null,
  cardOpen: null,
  card: {},
  cardDnD: {},
  columnDnD: {},


};

const dashboard = createReducer(initialState, {


  [types.GET_DASHBOARD_REQUEST]: (state, action) => {
    return Object.assign({}, state, {isLoading: true});
  },
  [types.GET_DASHBOARD_SUCCESS]: (state, action) => {


    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,

    })
  },
  [types.GET_DASHBOARD_FAILURE]: (state, action) => {
    const {error} = action;
    return Object.assign({}, state, {error: error, isLoading: false})
  },

  [types.NEW_DASHBOARD_SUCCESS]: (state, action) => {


    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,

    })
  },


  [types.UPDATE_DASHBOARD_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_DASHBOARD_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },

  [types.NEW_CARD_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_CARD_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },


  [types.NEW_COLUMN_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },


  [types.GET_COLUMN_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },


  [types.REMOVE_COLUMN_SUCCESS]: (state, action) => {

    return Object.assign({}, state, {
      ...action.data,
      isLoading: false,
      error: null,
    })
  },



  [types.SET_CARD_OPEN]: (state, action) => {
    const {dashboard_id, column_id, card_id} = action;
    return Object.assign({}, state, {cardOpen: {dashboard_id, column_id, card_id}});
  },
  [types.CLOSE_CARD_OPEN]: (state, action) => {
    return Object.assign({}, state, {cardOpen: null, card: {}})
  },
  [types.SET_CARD_DRAG_SOURCE]: (state, action) => {
    return Object.assign({}, state, {cardDnD: {...action.data}});
  },
  [types.REPLACE_CARD_REQUEST]: (state, action) => {
    const {
      columnSourceInd,
      columnTargetInd,
      cardSourceInd,
      cardTargetInd,
    } = action.data;
    if (
      columnSourceInd === columnTargetInd
      &&
      (cardSourceInd === cardTargetInd || cardSourceInd - 1 === cardTargetInd)
    )
      return state;

    const newColumnSource = {...state.columns[columnSourceInd]};
    const card = newColumnSource.cards[cardSourceInd];
    newColumnSource.cards = [
      ...newColumnSource.cards.slice(0, cardSourceInd),
      ...newColumnSource.cards.slice(cardSourceInd + 1, newColumnSource.cards.length)
    ];
    //debugger;
    let newColumnTarget;
    (columnSourceInd === columnTargetInd)
      ? newColumnTarget = newColumnSource
      : newColumnTarget = {...state.columns[columnTargetInd]};
    //debugger;
    let shift = 0;
    (columnSourceInd === columnTargetInd && cardSourceInd < cardTargetInd)
      ? shift = 0
      : shift = 1;
    newColumnTarget.cards = [
      ...newColumnTarget.cards.slice(0, cardTargetInd + shift),
      card,
      ...newColumnTarget.cards.slice(cardTargetInd + shift, newColumnTarget.cards.length)
    ];
    //debugger;
    const newColumns = [...state.columns];
    newColumns[columnSourceInd] = newColumnSource;
    newColumns[columnTargetInd] = newColumnTarget;

    return Object.assign({}, state, {columns: newColumns});
  },
  [types.SET_COLUMN_DRAG_SOURCE]: (state, action) => {
    return Object.assign({}, state, {columnDnD: {...action.data}})
  },

  [types.REPLACE_COLUMN_REQUEST]: (state, action) => {
    const {
      columnSourceInd,
      columnTargetInd,
    } = action.data;

    if (columnSourceInd === columnTargetInd || columnSourceInd - 1 === columnTargetInd) {
      return state;
    }
    const column = state.columns[columnSourceInd];
    let newColumns = [
      ...state.columns.slice(0, columnSourceInd),
      ...state.columns.slice(columnSourceInd + 1, state.columns.length)
    ];
    let shift;
    (columnSourceInd < columnTargetInd)
      ? shift = 0
      : shift = 1;
    newColumns = [
      ...newColumns.slice(0, columnTargetInd + shift),
      column,
      ...newColumns.slice(columnTargetInd + shift, newColumns.length),
    ];
    return Object.assign({}, state, {columns: newColumns});

  }

});
export default dashboard