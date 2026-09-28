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

import { supabase } from "@/lib/supabaseClient";
import { COLORS } from "@/global/themes";

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
      <KeyboardAvoidingView
        style={style.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={style.topArea} />

        <View style={style.card}>
          <Text style={style.title}>Recuperar senha</Text>

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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  keyboard: {
    flex: 1,
  },
  topArea: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 26,
    color: "#1D1E64",
    marginBottom: 24,
  },
  label: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#1D1E64",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D4D4D4",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "#000000",
  },
  button: {
    height: 50,
    backgroundColor: "#FFB101",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: "#1D1E64",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  linkText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#000000",
  },
  link: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#1D1E64",
  },
});