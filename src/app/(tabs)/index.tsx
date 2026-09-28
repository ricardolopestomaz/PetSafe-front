import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "@/global/themes";
import { listarMeusPets, Pet } from "@/services/pets";

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [carregando, setCarregando] = useState(true);

  async function carregarPets() {
    try {
      setCarregando(true);
      const data = await listarMeusPets();
      setPets(data || []);
    } catch {
      setPets([]);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    Promise.resolve().then(() => {
      carregarPets();
    });
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Meus Pets</Text>
        <Pressable
          style={style.addButton}
          onPress={() => router.push("/pet/novo" as any)}
        >
          <Ionicons name="add" size={24} color={COLORS.white} />
        </Pressable>
      </View>

      {carregando ? (
        <ActivityIndicator
          size="large"
          color={COLORS.blue}
          style={style.loading}
        />
      ) : pets.length === 0 ? (
        <View style={style.emptyContainer}>
          <Ionicons name="paw-outline" size={64} color={COLORS.placeholder} />
          <Text style={style.emptyText}>Nenhum pet cadastrado ainda.</Text>
        </View>
      ) : (
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id || Math.random().toString()}
          contentContainerStyle={style.listContent}
          renderItem={({ item }) => (
            <Pressable
              style={style.card}
              onPress={() => router.push(`/pet/${item.id}` as any)}
            >
              <View style={style.cardInfo}>
                <Text style={style.petName}>{item.nome}</Text>
                <Text style={style.petDetails}>
                  {item.especie} • {item.raca || "Sem raça definida"}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={COLORS.blue} />
            </Pressable>
          )}
        />
      )}
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.blue,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    marginTop: 40,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: COLORS.placeholder,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.gray,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.blue,
  },
  petDetails: {
    fontSize: 12,
    color: COLORS.black,
    marginTop: 2,
  },
});
