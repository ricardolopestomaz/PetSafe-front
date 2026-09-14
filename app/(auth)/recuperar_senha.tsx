import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "@/lib/supabaseClient";

import { COLORS } from "@/styles/authStyles";
import { recuperarSenhaStyles as styles } from "@/styles/recuperarSenhaStyles";

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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.topArea} />

        <View style={styles.card}>
          <Text style={styles.title}>Recuperar senha</Text>

          <Text style={styles.label}>E-mail</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color={COLORS.blue} />

            <TextInput
              style={styles.input}
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
            style={[styles.button, carregando && styles.buttonDisabled]}
            onPress={recuperar}
            disabled={carregando}
          >
            <Text style={styles.buttonText}>
              {carregando ? "Enviando..." : "Enviar link"}
            </Text>
          </Pressable>

          <View style={styles.linkContainer}>
            <Text style={styles.linkText}>Lembrou da senha? </Text>

            <Pressable onPress={() => router.replace("/(auth)/login")}>
              <Text style={styles.link}>Entrar</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}