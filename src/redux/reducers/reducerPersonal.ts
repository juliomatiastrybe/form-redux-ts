import { PersonalAction } from '../../types';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const reducerPersonal = (state = INITIAL_STATE, action: PersonalAction) => state;

export default reducerPersonal;
