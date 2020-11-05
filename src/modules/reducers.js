import createReducer from '../helpers/createReducer';
import { combineReducers } from 'redux';
import {
  DRIVERS,
} from './types';

const drivers = createReducer(DRIVERS);

const rootReducer = combineReducers({
  drivers,
});

export default rootReducer;
