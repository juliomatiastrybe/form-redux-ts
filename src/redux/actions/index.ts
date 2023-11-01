import { PUT_PERSONAL_DATA,
  PUT_PROFISSIONAL_DATA, PersonalType, ProfessionalType } from '../../types';

export const putPersonalData = (personalData: PersonalType) => ({
  type: PUT_PERSONAL_DATA,
  payload: personalData,
});

export const putProfissionalData = (personalData: ProfessionalType) => ({
  type: PUT_PROFISSIONAL_DATA,
  payload: personalData,
});
