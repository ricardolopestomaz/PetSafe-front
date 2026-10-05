import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
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

import * as AuthController from "@/controller/authController";
import { COLORS } from "@/global/themes";
import { supabase } from "@/lib/supabaseClient";

export default function RedefinirSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace("/(auth)/login");
      }
    });
  }, []);

  async function redefinir() {
    setCarregando(true);
    const resultado = await AuthController.realizarRedefinicaoSenha(
      novaSenha,
      confirmarSenha,
    );
    setCarregando(false);

    if (!resultado.sucesso) {
      Alert.alert("Erro ao redefinir senha", resultado.mensagem);
      return;
    }

    Alert.alert("Senha redefinida", "Sua senha foi alterada com sucesso.", [
      {
        text: "OK",
        onPress: () => {
          router.replace("/(auth)/login");
        },
      },
    ]);
  }

  return (
    <SafeAreaView style={style.container}>
      <KeyboardAvoidingView
        style={style.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={style.content}>
          <View style={style.card}>
            <Text style={style.title}>Redefinir senha</Text>

            <Text style={style.description}>
              Digite sua nova senha e confirme para finalizar a alteração.
            </Text>

            <Text style={style.label}>Nova senha</Text>

            <View style={style.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={COLORS.blue}
              />
              <TextInput
                style={style.input}
                value={novaSenha}
                onChangeText={setNovaSenha}
                placeholder="••••••••••"
                placeholderTextColor={COLORS.placeholder}
                secureTextEntry
              />
            </View>

            <Text style={style.label}>Confirmar nova senha</Text>

            <View style={style.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={COLORS.blue}
              />
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
              onPress={redefinir}
              disabled={carregando}
            >
              <Text style={style.buttonText}>
                {carregando ? "Salvando..." : "Salvar nova senha"}
              </Text>
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
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 28,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    color: "#1D1E64",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
    lineHeight: 20,
    color: "#666666",
    marginBottom: 20,
    textAlign: "center",
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
    marginBottom: 16,
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
});
