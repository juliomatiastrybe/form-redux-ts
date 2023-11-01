import { PUT_PROFISSIONAL_DATA, ProfissionalAction } from '../../types';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const reducerProfissional = (state = INITIAL_STATE, action: ProfissionalAction) => {
  switch (action.type) {
    case PUT_PROFISSIONAL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};

export default reducerProfissional;
