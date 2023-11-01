import { PersonalType, ProfessionalType } from '../../types';

export const PUT_PERSONAL_DATA = 'PUT_PERSONAL_DATA';
export const PUT_PROFISSIONAL_DATA = 'PUT_PROFISSIONAL_DATA';

export const putPersonalData = (personalData: PersonalType) => ({
  type: PUT_PERSONAL_DATA,
  payload: personalData,
});

export const putProfissionalData = (personalData: ProfessionalType) => ({
  type: PUT_PROFISSIONAL_DATA,
  payload: personalData,
});
