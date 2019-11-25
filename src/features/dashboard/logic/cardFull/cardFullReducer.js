import {createReducer} from "../../../../utils";
import * as types from '../constants'

const initialState = {
  cardName: '',
  content: '',
  checkListArray: [
    {
      checkListName : 'check list',
      tasks: [{
        taskContent: 'task text some'
      }] ,
    }
  ],
  isLoading: false,
  error: null,
};

const cardFull = createReducer(initialState, {
    [types.GET_CARD_REQUEST]: (state, action) => {
      console.log('get card request reducer CF');
      return Object.assign({}, state, {isLoading: true})
    },
    [types.GET_CARD_SUCCESS]: (state, action) => {

      return Object.assign({}, state, {...action.data, isLoading: false, error: null});
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

    [types.UPDATE_CARD_REQUEST]: (state, action) => {
      return state
    },
    [types.UPDATE_CARD_SUCCESS]: (state, action) => {
      console.log(action);
      const {cardName,content} = action.data;

      console.log('update card success card full');
      return Object.assign({}, state, {cardName, content});
    },
    [types.UPDATE_CARD_FAILURE]: (state, action) => {
      return state
    },

    [types.REMOVE_CARD_REQUEST]: (state, action) => {
      return state;
    },
    [types.REMOVE_CARD_SUCCESS]: (state, action) => {
      return state;
    },
    [types.REMOVE_CARD_FAILURE]: (state, action) => {
      return state;
    },
    [types.ADD_CHECK_LIST]: (state, action) => {
      const {checkListName} = action;

      const newCheckListArray = [...state.checkListArray, {
        checkListName,
        tasks: [],
      }];
      return Object.assign({}, state, {checkListArray: newCheckListArray})
    },
    [types.REMOVE_CHECK_LIST]: (state, action) => {
      const {checkList_ind} = action;
      const {checkListArray} = state;

      const newCheckListArray = [
        ...checkListArray.slice(0, checkList_ind),
        ...checkListArray.slice(checkList_ind + 1)
      ];
      return Object.assign({}, state, {checkListArray: newCheckListArray})

    },
    [types.ADD_TASK]: (state, action) => {
      const {checkList_ind, taskContent} = action;
      const {checkListArray} = state;

      const newCheckList = [...state.checkListArray[checkList_ind]];
      newCheckList.tasks.push({taskContent, checked: false});

      const newCheckListArray = [
        ...checkListArray.slice(0, checkList_ind),
        newCheckList,
        ...checkListArray.slice(checkList_ind + 1)
      ];

      return Object.assign({}, state, {checkListArray: newCheckListArray});

    },
    [types.REMOVE_TASK]: (state, action) => {
      const {checkList_ind, task_ind} = action;
      const {checkListArray} = state;

      const newCheckList = [
        ...checkListArray[checkList_ind].slice(0, task_ind),
        ...checkListArray[checkList_ind].slice(0, task_ind),
      ];

      const newCheckListArray = [
        ...checkListArray.slice(0, checkList_ind),
        newCheckList,
        ...checkListArray.slice(checkList_ind + 1)
      ];

      return Object.assign({}, state, {checkListArray: newCheckListArray});
    },
  [types.TOGGLE_TASK]: (state, action) => {
    const {checkList_ind, task_ind} = action;
    const {checkListArray} = state;

    const newCheckList = [...state.checkListArray[checkList_ind]];
    const newTask = {...newCheckList[task_ind]};
    newTask.checked = !newTask.checked;

    const newCheckListArray = [
      ...checkListArray.slice(0, checkList_ind),
      newCheckList,
      ...checkListArray.slice(checkList_ind + 1)
    ];

    return Object.assign({}, state, {checkListArray: newCheckListArray});
  },

  }
);

export default cardFull ;