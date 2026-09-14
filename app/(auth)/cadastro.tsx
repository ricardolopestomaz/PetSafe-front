import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
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

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [
    confirmarSenha,
    setConfirmarSenha,
  ] = useState('');

  const [carregando, setCarregando] =
    useState(false);

  async function cadastrar() {
    setCarregando(true);

    const resultado =
      await AuthController.realizarCadastro(
        nome,
        email,
        senha,
        confirmarSenha
      );

    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert(
        'Erro ao criar conta',
        resultado.mensagem
      );

      return;
    }

    /*
      Se confirmação de e-mail estiver
      desativada no Supabase, já pode
      existir uma sessão.
    */
    if (resultado.possuiSessao) {
      router.replace('/(tabs)');
      return;
    }

    /*
      Com confirmação de e-mail ativada,
      o Supabase normalmente cria o usuário,
      mas ainda não inicia a sessão.
    */
    Alert.alert(
      'Conta criada',
      'Confira seu e-mail para confirmar sua conta.'
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
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>
              Criar uma conta
            </Text>

            <Text style={styles.label}>
              Nome
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={20}
                color={COLORS.blue}
              />

              <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do Exemplo"
                placeholderTextColor={
                  COLORS.placeholder
                }
              />
            </View>

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

            <Text style={styles.label}>
              Confirmar senha
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
              onPress={cadastrar}
              disabled={carregando}
            >
              <Text style={styles.buttonText}>
                {carregando
                  ? 'Criando conta...'
                  : 'Criar conta'}
              </Text>
            </Pressable>

            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>
                Já tem uma conta?{' '}
              </Text>

              <Pressable
                onPress={() =>
                  router.push(
                    '/(auth)/login'
                  )
                }
              >
                <Text style={styles.link}>
                  Faça login
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}