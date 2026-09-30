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

  const res = await AuthModel.login(emailLimpo, senha);
  if (!res.sucesso) {
    return {
      sucesso: false,
      mensagem: res.mensagem || 'Erro ao realizar login.',
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

  if (!nomeLimpo || !emailLimpo || !senha || !confirmarSenha) {
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

  const res = await AuthModel.cadastrar(nomeLimpo, emailLimpo, senha);
  if (!res.sucesso) {
    return {
      sucesso: false,
      mensagem: res.mensagem || 'Erro ao realizar cadastro.',
    };
  }

  return {
    sucesso: true,
    possuiSessao: Boolean(res.data?.session),
  };
}

export async function realizarRedefinicaoSenha(
  novaSenha: string,
  confirmarSenha: string
): Promise<Resultado> {
  if (!novaSenha || !confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'Preencha os dois campos de senha.',
    };
  }

  if (novaSenha !== confirmarSenha) {
    return {
      sucesso: false,
      mensagem: 'As senhas não são iguais.',
    };
  }

  const res = await AuthModel.atualizarSenha(novaSenha);
  if (!res.sucesso) {
    return {
      sucesso: false,
      mensagem: res.mensagem || 'Erro ao atualizar senha.',
    };
  }

  return {
    sucesso: true,
  };
}