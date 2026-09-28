import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import * as AuthController from '@/controller/authController';
import { COLORS } from '@/global/themes';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function cadastrar() {
    setCarregando(true);
    const resultado = await AuthController.realizarCadastro(
      nome,
      email,
      senha,
      confirmarSenha
    );
    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert('Erro ao criar conta', resultado.mensagem);
      return;
    }

    if (resultado.possuiSessao) {
      router.replace('/(tabs)');
      return;
    }

    Alert.alert(
      'Conta criada',
      'Confira seu e-mail para confirmar sua conta.'
    );
    router.replace('/(auth)/login');
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={style.topArea} />

        <View style={style.card}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={style.title}>Criar uma conta</Text>

            <Text style={style.label}>Nome</Text>
            <View style={style.inputContainer}>
              <Ionicons name="person-outline" size={20} color={COLORS.blue} />
              <TextInput
                style={style.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do Exemplo"
                placeholderTextColor={COLORS.placeholder}
              />
            </View>

            <Text style={style.label}>E-mail</Text>
            <View style={style.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={COLORS.blue} />
              <TextInput
                style={style.input}
                value={email}
                onChangeText={setEmail}
                placeholder="nome_exemplo@gmail.com"
                placeholderTextColor={COLORS.placeholder}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <Text style={style.label}>Senha</Text>
            <View style={style.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.blue} />
              <TextInput
                style={style.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="••••••••••"
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry
              />
            </View>

            <Text style={style.label}>Confirmar senha</Text>
            <View style={style.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color={COLORS.blue} />
              <TextInput
                style={style.input}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                placeholder="••••••••••"
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry
              />
            </View>

            <Pressable
              style={[style.button, carregando && style.buttonDisabled]}
              onPress={cadastrar}
              disabled={carregando}
            >
              <Text style={style.buttonText}>
                {carregando ? 'Criando conta...' : 'Criar conta'}
              </Text>
            </Pressable>

            <View style={style.linkContainer}>
              <Text style={style.linkText}>Já tem uma conta? </Text>
              <Pressable onPress={() => router.push('/(auth)/login')}>
                <Text style={style.link}>Faça login</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  keyboard: {
    flex: 1,
  },
  topArea: {
    height: 95,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.blue,
    textAlign: "center",
    marginBottom: 26,
  },
  label: {
    fontSize: 12,
    color: COLORS.blue,
    marginBottom: 5,
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 14,
    gap: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: COLORS.black,
  },
  button: {
    height: 50,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 13,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  linkText: {
    fontSize: 12,
    color: COLORS.black,
  },
  link: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.yellow,
  },
});