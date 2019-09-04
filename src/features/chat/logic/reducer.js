import {createReducer} from "../../../utils";
import * as types from './constants'

const initialState = {
  messages: [],

  error: null,
};

const chat = createReducer(initialState, {
  [types.ADD_NEW_MESSAGE]: (state, action) => {
    const {message} = action;
    const newMessages = [...state.messages];
    newMessages.push(message);
    return Object.assign({}, state, {messages: newMessages});
  },
  [types.GET_MESSAGES]: (state, action) => {
    const {messages} = action;
    return Object.assign({}, state, {messages})
  },

});

export default chat