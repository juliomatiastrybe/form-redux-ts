import { useSelector } from 'react-redux';
import { GlobalStateType } from '../types';

function FormDisplay() {
  const { name, address, city, cpf, email, uf } = useSelector(
    (state: GlobalStateType) => state.personalData,
  );

  const { description, resume, role } = useSelector(
    (state: GlobalStateType) => state.professionalData,
  );

  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        Nome:
        {' '}
        { name }
      </div>
      <div>
        Email:
        {' '}
        { email }
      </div>
      <div>
        CPF:
        {' '}
        { cpf }
      </div>
      <div>
        Endereço:
        {' '}
        { address }
      </div>
      <div>
        Cidade:
        {' '}
        { city }
      </div>
      <div>
        Estado:
        {' '}
        { uf }
      </div>
      <div>
        Currículo:
        {' '}
        { resume }
      </div>
      <div>
        Cargo:
        {' '}
        { role }
      </div>
      <div>
        Descrição do cargo:
        {' '}
        { description }
      </div>
    </section>
  );
}

export default FormDisplay;
