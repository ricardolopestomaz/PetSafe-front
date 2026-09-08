import * as AuthModel from '@/model/authModel';

type Resultado = {
  sucesso: boolean;
  mensagem?: string;
};

type ResultadoCadastro = Resultado & {
  possuiSessao?: boolean;
};

function emailValido(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export async function realizarLogin(
  email: string,
  senha: string
): Promise<Resultado> {
  const emailLimpo = email.trim();

  if (!emailLimpo || !senha) {
    return {
      sucesso: false,
      mensagem: 'Preencha o e-mail e a senha.',
    };
  }

  if (!emailValido(emailLimpo)) {
    return {
      sucesso: false,
      mensagem: 'Digite um e-mail válido.',
    };
  }

  const { error } =
    await AuthModel.login(
      emailLimpo,
      senha
    );

  if (error) {
    return {
      sucesso: false,
      mensagem: error.message,
    };
  }

  return {
    sucesso: true,
  };
}

export async function realizarCadastro(
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string
): Promise<ResultadoCadastro> {
  const nomeLimpo = nome.trim();
  const emailLimpo = email.trim();

  if (
    !nomeLimpo ||
    !emailLimpo ||
    !senha ||
    !confirmarSenha
  ) {
    return {
      sucesso: false,
      mensagem: 'Preencha todos os campos.',
    };
  }

  if (!emailValido(emailLimpo)) {
    return {
      sucesso: false,
      mensagem: 'Digite um e-mail válido.',
    };
  }

  if (senha !== confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'As senhas não são iguais.',
    };
  }

  const { data, error } =
    await AuthModel.cadastrar(
      nomeLimpo,
      emailLimpo,
      senha
    );

  if (error) {
    return {
      sucesso: false,
      mensagem: error.message,
    };
  }

  return {
    sucesso: true,
    possuiSessao: !!data.session,
  };
}