import thunkMiddleware from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './features/user/logic/reducer'
import dashboard from './features/dashboard/logic/reducer'
import chat from './features/chat/logic/reducer'

const rootReducer = combineReducers({
  user,
  dashboard,
  chat
});

const store = createStore(
  rootReducer,composeWithDevTools(
  applyMiddleware(thunkMiddleware)
  )
);

export default store;