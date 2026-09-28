import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';

let envUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
let envKey =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

const isValidUrl = Boolean(
  envUrl && (envUrl.startsWith('http://') || envUrl.startsWith('https://'))
);

if (!isValidUrl || !envKey) {
  console.warn(
    '[Supabase] Variáveis do Supabase não configuradas ou URL inválida. O aplicativo está rodando em modo de teste sem conexão real.'
  );
  envUrl = 'https://placeholder.supabase.co';
  envKey = 'placeholder-key';
}

export const supabase = createClient(
  envUrl!,
  envKey!,
  {
    auth: {
      storage:
        Platform.OS === 'web'
          ? undefined
          : AsyncStorage,

      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  }
);