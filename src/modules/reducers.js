import createReducer from '../helpers/createReducer';
import { combineReducers } from 'redux';
import {
  DRIVERS,
  SELECTEDDRIVER,
} from './types';

const drivers = createReducer(DRIVERS);
const selectedDriver = createReducer(SELECTEDDRIVER);

const rootReducer = combineReducers({
  drivers,
  selectedDriver,
});

export default rootReducer;
