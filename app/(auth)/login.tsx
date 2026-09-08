import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

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

import {
    COLORS,
    authStyles as styles,
} from '@/styles/authStyles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] =
    useState(false);

  async function entrar() {
    setCarregando(true);

    const resultado =
      await AuthController.realizarLogin(
        email,
        senha
      );

    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert(
        'Erro ao entrar',
        resultado.mensagem
      );

      return;
    }

    /*
      Ajuste somente se a rota da área
      logada do projeto tiver outro nome.
    */
    router.replace('/(tabs)');
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
            Entrar
          </Text>

          <Text style={styles.label}>
            E-mail
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={COLORS.blue}
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="nome_exemplo@gmail.com"
              placeholderTextColor={
                COLORS.placeholder
              }
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Text style={styles.label}>
            Senha
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={COLORS.blue}
            />

            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
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
            onPress={entrar}
            disabled={carregando}
          >
            <Text style={styles.buttonText}>
              {carregando
                ? 'Entrando...'
                : 'Entrar'}
            </Text>
          </Pressable>

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>
              É novo por aqui?{' '}
            </Text>

            <Pressable
              onPress={() =>
                router.push(
                  '/(auth)/cadastro'
                )
              }
            >
              <Text style={styles.link}>
                Cadastre-se
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}