import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/global/themes";
import { supabase } from "@/lib/supabaseClient";

export default function Perfil() {
  const [carregando, setCarregando] = useState(false);

  async function sair() {
    try {
      setCarregando(true);
      await supabase.auth.signOut();
      router.replace("/(auth)/login");
    } catch {
      Alert.alert("Erro", "Não foi possível encerrar a sessão.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Meu Perfil</Text>
      </View>

      <View style={style.content}>
        <View style={style.avatarContainer}>
          <Ionicons name="person-circle-outline" size={100} color={COLORS.blue} />
        </View>

        <Pressable
          style={[style.logoutButton, carregando && style.buttonDisabled]}
          onPress={sair}
          disabled={carregando}
        >
          <Ionicons name="log-out-outline" size={20} color={COLORS.white} />
          <Text style={style.logoutText}>
            {carregando ? "Saindo..." : "Sair da Conta"}
          </Text>
        </Pressable>
      </View>
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
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.blue,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    marginTop: 20,
  },
  logoutButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#E53E3E",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  logoutText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 14,
  },
});
