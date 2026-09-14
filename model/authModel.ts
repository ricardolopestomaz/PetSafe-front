import { supabase } from '@/lib/supabaseClient';

export function login(
  email: string,
  senha: string
) {
  return supabase.auth.signInWithPassword({
    email,
    password: senha,
  });
}

export function cadastrar(
  nome: string,
  email: string,
  senha: string
) {
  return supabase.auth.signUp({
    email,
    password: senha,

    options: {
      data: {
        nome,
      },
    },
  });
}

export function atualizarSenha(novaSenha: string) {
  return supabase.auth.updateUser({
    password: novaSenha,
  });
}

export function recuperarSenha(email: string) {
  return supabase.auth.resetPasswordForEmail(
    email,
    {
      redirectTo: 'petsafe://redefinir_senha',
    }
  );
}