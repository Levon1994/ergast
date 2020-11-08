import CreateActionCreator  from '../helpers/createActionCreator';
import {
  DRIVERS,
  SELECTEDDRIVER,
} from './types';

const getDrivers = (offset = 0, limit = 10) => CreateActionCreator.read({
  path: `drivers.json?limit=${limit}&offset=${offset}`,
  type: DRIVERS,
});

const getSelectedDriver = driverId => CreateActionCreator.read({
  path: `drivers/${driverId}.json`,
  type: SELECTEDDRIVER,
});

export {
  getDrivers,
  getSelectedDriver,
};
