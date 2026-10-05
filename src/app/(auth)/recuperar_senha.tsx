import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
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

import { COLORS } from "@/global/themes";
import { supabase } from "@/lib/supabaseClient";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function recuperar() {
    const emailLimpo = email.trim();

    if (!emailLimpo) {
      Alert.alert("E-mail obrigatório", "Digite seu e-mail.");
      return;
    }

    setCarregando(true);

    const { error } = await supabase.auth.resetPasswordForEmail(emailLimpo, {
      redirectTo: "petsafe://redefinir_senha",
    });

    setCarregando(false);

    if (error) {
      Alert.alert("Erro", error.message);
      return;
    }

    Alert.alert(
      "E-mail enviado",
      "Verifique sua caixa de entrada para redefinir sua senha.",
    );

    router.replace("/(auth)/login");
  }

  return (
    <SafeAreaView style={style.container}>
      {/* Botão de Voltar no Topo */}
      <View style={style.header}>
        <Pressable onPress={() => router.back()} style={style.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1D1E64" />
        </Pressable>
      </View>

      <KeyboardAvoidingView
        style={style.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={style.content}>
          <View style={style.card}>
            <Text style={style.title}>Recuperar senha</Text>

            <Text style={style.label}>E-mail</Text>

            <View style={style.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={COLORS.blue} />

              <TextInput
                style={style.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor={COLORS.placeholder}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <Pressable
              style={[style.button, carregando && style.buttonDisabled]}
              onPress={recuperar}
              disabled={carregando}
            >
              <Text style={style.buttonText}>
                {carregando ? "Enviando..." : "Enviar link"}
              </Text>
            </Pressable>

            <View style={style.linkContainer}>
              <Text style={style.linkText}>Lembrou da senha? </Text>

              <Pressable onPress={() => router.replace("/(auth)/login")}>
                <Text style={style.link}>Entrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboard: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    marginTop: -80,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 28,
    elevation: 4,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 20,
    color: COLORS.blue,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: COLORS.blue,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 9,
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    color: COLORS.black,
  },
  button: {
    height: 40,
    backgroundColor: COLORS.yellow,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 12,
    color: COLORS.white,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  linkText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: COLORS.black,
  },
  link: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 12,
    color: COLORS.yellow,
  },
});
