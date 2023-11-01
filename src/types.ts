export const PUT_PERSONAL_DATA = 'PUT_PERSONAL_DATA';
export const PUT_PROFISSIONAL_DATA = 'PUT_PROFISSIONAL_DATA';

export type PersonalType = {
  name: string,
  email: string,
  cpf: string,
  address: string,
  city: string,
  uf: string,
};

export type ProfessionalType = {
  resume: string,
  role: string,
  description: string,
};

export type GlobalStateType = {
  personalData: PersonalType,
  professionalData: ProfessionalType,
};

export type PersonalAction = {
  type: typeof PUT_PERSONAL_DATA
  payload: PersonalType
};

export type ProfissionalAction = {
  type: typeof PUT_PROFISSIONAL_DATA
  payload: ProfessionalType
};
