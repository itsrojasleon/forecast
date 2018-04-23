import { FETCH_WEATHER } from '../actions/index';

export default function weatherReducer(state = null, action) {
  console.log('Action received', action);
  return state;
}
