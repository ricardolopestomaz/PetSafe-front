import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { useEffect } from 'react';

import { supabase } from '@/lib/supabaseClient';

function extrairTokensDaUrl(url: string) {
  const partes = url.split('#');

  if (partes.length < 2) {
    return null;
  }

  const params = new URLSearchParams(partes[1]);

  const accessToken = params.get('access_token');
  const refreshToken = params.get('refresh_token');

  if (!accessToken || !refreshToken) {
    return null;
  }

  return { accessToken, refreshToken };
}

async function tratarUrl(url: string | null) {
  if (!url) {
    return;
  }

  const tokens = extrairTokensDaUrl(url);

  if (!tokens) {
    return;
  }

  const { error } = await supabase.auth.setSession({
    access_token: tokens.accessToken,
    refresh_token: tokens.refreshToken,
  });

  if (error) {
    return;
  }

  router.replace('/(auth)/redefinir_senha');
}

export function useAuthDeepLink() {
  useEffect(() => {
    // App aberto a partir do link (app fechado/background)
    Linking.getInitialURL().then(tratarUrl);

    // App já aberto em primeiro plano
    const subscription = Linking.addEventListener(
      'url',
      (evento) => {
        tratarUrl(evento.url);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);
}