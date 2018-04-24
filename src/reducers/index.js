import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import weatherReducer from './weather';

export default combineReducers({
  weather: weatherReducer,
  loading: loadingBarReducer,
});
