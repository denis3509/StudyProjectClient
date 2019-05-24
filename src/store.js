import thunkMiddleware from 'redux-thunk'
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import user from './features/user/logic/reducer'
import dashboard from './features/dashboard/logic/reducer'


const rootReducer = combineReducers({
  user,
  dashboard
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
export default store;