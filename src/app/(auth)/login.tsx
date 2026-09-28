import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/global/themes";
import * as AuthController from "@/controller/authController";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function entrar() {
    setCarregando(true);
    const resultado = await AuthController.realizarLogin(email, senha);
    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert("Erro ao entrar", resultado.mensagem);
      return;
    }

    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={style.topArea} />

        <View style={style.card}>
          <Text style={style.title}>Login</Text>

          {/* Campo E-mail */}
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

          {/* Campo Senha */}
          <Text style={style.label}>Senha</Text>
          <View style={style.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={COLORS.blue}
            />
            <TextInput
              style={style.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="••••••••••"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry
            />
          </View>

          {/* Campo Esqueceu a Senha */}
          <Pressable onPress={() => router.push("/(auth)/recuperar_senha")}>
            <Text style={[style.link, { textAlign: "right", marginBottom: 8 }]}>
              Esqueci minha senha
            </Text>
          </Pressable>

          {/* Botão Entrar */}
          <Pressable
            style={[style.button, carregando && style.buttonDisabled]}
            onPress={entrar}
            disabled={carregando}
          >
            <Text style={style.buttonText}>
              {carregando ? "Entrando..." : "Entrar"}
            </Text>
          </Pressable>

          {/* Link para Cadastro */}
          <View style={style.linkContainer}>
            <Text style={style.linkText}>É novo por aqui? </Text>
            <Pressable onPress={() => router.push("/(auth)/cadastro")}>
              <Text style={style.link}>Cadastre-se</Text>
            </Pressable>
          </View>
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
  keyboardView: {
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