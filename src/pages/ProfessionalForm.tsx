import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { putProfissionalData } from '../redux/actions';
import { GlobalStateType } from '../types';

function ProfessionalForm() {
  const initialPersonal = useSelector((state: GlobalStateType) => state.professionalData);

  const [form, setForm] = useState(initialPersonal);
  const { resume, role, description } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (
    { target }: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        console.log('Ao clicar, envie a informação do formulário');
        dispatch(putProfissionalData(form));
        navigate('/form-display');
      } }
    >
      <h1 className="title">Informações Profissionais</h1>
      <TextArea
        label="Resumo do currículo: "
        value={ resume }
        name="resume"
        maxLength="1000"
        onChange={ handleChange }
        required
      />
      <Input
        label="Cargo:"
        name="role"
        type="text"
        value={ role }
        onChange={ handleChange }
        required
      />
      <TextArea
        label="Descrição do cargo: "
        name="description"
        maxLength="500"
        onChange={ handleChange }
        value={ description }
        required
      />
      <Button
        type="submit"
        label="Enviar"
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}
export default ProfessionalForm;
