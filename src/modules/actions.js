import CreateActionCreator  from '../helpers/createActionCreator';
import {
  DRIVERS,
} from './types';

const getDrivers = (offset = 0, limit = 10) => CreateActionCreator.read({
  path: `drivers.json?limit=${limit}&offset=${offset}`,
  type: DRIVERS,
});

export {
  getDrivers,
};
