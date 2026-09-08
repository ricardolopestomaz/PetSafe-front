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