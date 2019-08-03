import {createReducer} from "../../../../utils";
import * as types from '../constants'

const initialState = {
  cardName: 'default name',
  content: '',
  isLoading: false,
  error: null,
};

const cardFullReducer = createReducer(initialState, {
  [types.GET_CARD_REQUEST]: (state, action) => {
    console.log('get card request reducer CF');
    return Object.assign({}, state, {isLoading: true})
  },
  [types.GET_CARD_SUCCESS]: (state, action) => {
    const {cardName, content} = action;
    return Object.assign({}, state, {cardName, content, isLoading: false, error: null});
  },
  [types.GET_CARD_FAILURE]: (state, action) => {
    const error = {action};
    return Object.assign({}, state, {isLoading: false, error})
  },

  [types.NEW_CARD_REQUEST]: (state, action) => {
    return state
  },
  [types.NEW_CARD_SUCCESS]: (state, action) => {
    return state
  },
  [types.NEW_CARD_FAILURE]: (state, action) => {
    return state
  },


//  [types.UPDATE_CARD_REQUEST] : (state,action) => { return state},
  [types.UPDATE_CARD_SUCCESS]: (state, action) => {
    const {updatedCard} = action;
    const {cardName, content} = updatedCard;
    console.log('update card success card full');
    return Object.assign({}, state, {cardName, content});
  },
  [types.UPDATE_CARD_FAILURE]: (state, action) => {
    return state
  },

  [types.REMOVE_CARD_REQUEST]: (state, action) => {
    return state
  },
  [types.REMOVE_CARD_SUCCESS]: (state, action) => {
    return state
  },
  [types.REMOVE_CARD_FAILURE]: (state, action) => {
    return state
  },


});

export default cardFullReducer;