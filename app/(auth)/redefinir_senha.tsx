import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import * as AuthController from '@/controller/authController';
import { supabase } from '@/lib/supabaseClient';

import {
  COLORS,
  authStyles as styles,
} from '@/styles/authStyles';

export default function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState('');

  const [
    confirmarSenha,
    setConfirmarSenha,
  ] = useState('');

  const [carregando, setCarregando] =
    useState(false);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!data.session) {
          router.replace('/(auth)/login');
        }
      });
  }, []);

  async function redefinir() {
    setCarregando(true);

    const resultado =
      await AuthController.realizarRedefinicaoSenha(
        novaSenha,
        confirmarSenha
      );

    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert(
        'Erro ao redefinir senha',
        resultado.mensagem
      );

      return;
    }

    Alert.alert(
      'Senha redefinida',
      'Sua senha foi alterada com sucesso.'
    );

    router.replace('/(auth)/login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <View style={styles.topArea} />

        <View style={styles.card}>
          <Text style={styles.title}>
            Redefinir senha
          </Text>

          <Text style={styles.label}>
            Nova senha
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={COLORS.blue}
            />

            <TextInput
              style={styles.input}
              value={novaSenha}
              onChangeText={setNovaSenha}
              placeholder="••••••••••"
              placeholderTextColor={
                COLORS.placeholder
              }
              secureTextEntry
            />
          </View>

          <Text style={styles.label}>
            Confirmar nova senha
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={COLORS.blue}
            />

            <TextInput
              style={styles.input}
              value={confirmarSenha}
              onChangeText={
                setConfirmarSenha
              }
              placeholder="••••••••••"
              placeholderTextColor={
                COLORS.placeholder
              }
              secureTextEntry
            />
          </View>

          <Pressable
            style={[
              styles.button,

              carregando &&
                styles.buttonDisabled,
            ]}
            onPress={redefinir}
            disabled={carregando}
          >
            <Text style={styles.buttonText}>
              {carregando
                ? 'Salvando...'
                : 'Salvar nova senha'}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}