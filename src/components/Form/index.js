import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './styles.css';

const Form = ({ setIsForm, setData }) => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required('Nome de usuário obrigatório')
      .max(18, 'Nome de usuário não pode ter mais de 18 caracteres'),
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    confirmEmail: yup
      .string()
      .required('Confirmação do email obrigatório')
      .email('Email inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .matches(
        '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*',
        'Senha deve ter pelo menos 1 letra minuscula, 1 letra maiuscula e 1 número'
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Senhas não batem')
      .required('Confirmação de senha obrigatória')
      .matches(
        '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).*',
        'Senha deve ter pelo menos 1 letra minuscula, 1 letra maiuscula e 1 número'
      ),
    petName: yup.string().required('Nome de pet obrigatório'),
    elefCost: yup.string().required('Chuta aí quanto custa um elefante'),
    pinguim: yup.string().required('Pinguim obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    setIsForm(false);
    setData(data);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome de usuário *" {...register('username')} />
        {errors.username?.message}
        <input placeholder="Nome completo *" {...register('name')} />
        {errors.name?.message}
        <input placeholder="Endereço de Email *" {...register('email')} />
        {errors.email?.message}
        <input
          placeholder="Confirme seu Email *"
          {...register('confirmEmail')}
        />
        {errors.confirmEmail?.message}
        <input
          type="password"
          placeholder="Senha *"
          {...register('password')}
        />
        {errors.password?.message}
        <input
          type="password"
          placeholder="Confirme sua senha *"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword?.message}
        <input placeholder="Nome do seu pet *" {...register('petName')} />
        {errors.petName?.message}
        <input
          placeholder="Quanto custa um elefante? *"
          {...register('elefCost')}
        />
        {errors.elefCost?.message}
        <input placeholder="Pinguim tem joelho? *" {...register('pinguim')} />
        {errors.pinguim?.message}
        <label>
          <input type="checkbox" />
          Eu aceito os termos de uso da aplicação.
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Form;
