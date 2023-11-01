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
  type: string
  payload: PersonalType
};

export type ProfissionalAction = {
  type: string
  payload: ProfessionalType
};
