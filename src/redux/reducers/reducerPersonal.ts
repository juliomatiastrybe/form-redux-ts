import { PUT_PERSONAL_DATA, PersonalAction } from '../../types';

export const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const reducerPersonal = (state = INITIAL_STATE, action: PersonalAction) => {
  switch (action.type) {
    case PUT_PERSONAL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducerPersonal;
