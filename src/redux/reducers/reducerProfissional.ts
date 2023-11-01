import { ProfissionalAction } from '../../types';

const INITIAL_STATE = {
  resume: '',
  role: '',
  description: '',
};

const reducerProfissional = (state = INITIAL_STATE, action: ProfissionalAction) => state;

export default reducerProfissional;
