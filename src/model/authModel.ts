import { supabase } from '@/lib/supabaseClient';

export async function login(email: string, senha: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error) {
    return { sucesso: false, mensagem: error.message };
  }

  return { sucesso: true, data };
}

export async function cadastrar(nome: string, email: string, senha: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
    options: {
      data: {
        nome,
      },
    },
  });

  if (error) {
    return { sucesso: false, mensagem: error.message };
  }

  return { sucesso: true, data };
}

export async function atualizarSenha(novaSenha: string) {
  const { data, error } = await supabase.auth.updateUser({
    password: novaSenha,
  });

  if (error) {
    return { sucesso: false, mensagem: error.message };
  }

  return { sucesso: true, data };
}
