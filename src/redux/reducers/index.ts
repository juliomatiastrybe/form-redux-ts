import { combineReducers } from 'redux';
import personalData from './reducerPersonal';
import professionalData from './reducerProfissional';

const rootReducer = combineReducers({
  personalData,
  professionalData,
});

export default rootReducer;
