import * as Yup from 'yup';

export function isValidCreate() {
  const schema = Yup.object().shape({
    nameSave: Yup.string().required('Nome é obrigatório'),
    emailSave: Yup.string()
      .email('Insira um email valido')
      .required('Email obrigatório'),
    passwordSave: Yup.string()
      .required('Senha invalida!')
      .min(6, 'No minino 6 digitos'),
  });

  return schema;
}

export function isValidLogin() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email valido')
      .required('Email obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatoria')
      .min(6, 'No minino 6 digitos'),
  });

  return schema;
}
