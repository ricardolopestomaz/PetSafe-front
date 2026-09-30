import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const images = [
  require("../../assets/images/onboarding-dog-1.png"),
  require("../../assets/images/onboarding-cat-1.png"),
  require("../../assets/images/onboarding-dog-2.png"),
  require("../../assets/images/onboarding-cat-2.png"),
];

export default function Onboarding() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => {
        return (index + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={style.container}>
      <Image
        source={images[currentIndex]}
        style={style.image}
        resizeMode="contain"
      />

      <View style={style.card}>
        <Text style={style.logo}>
          Pet<Text style={style.safeColor}>Safe</Text>
        </Text>

        <View style={style.indicators}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                style.indicator,
                index === currentIndex && style.activeIndicator,
              ]}
            />
          ))}
        </View>
        <Text style={style.title}>Encontre seu pet com facilidade</Text>
        <Text style={style.description}>
          Com a medalhinha PetSafe, quem encontrar seu pet poderá acessar suas
          informações e entrar em contato com você.
        </Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={style.buttonText}>Continuar</Text>
          <Text style={style.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 70,
    alignItems: "center",
  },
  logo: {
    color: "#1D1E64",
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  safeColor: {
    color: "#Feb101",
  },
  indicators: {
    flexDirection: "row",
    marginBottom: 10,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 3,
  },
  activeIndicator: {
    backgroundColor: "#f6d27f",
    width: 18,
  },
  title: {
    color: "#222222",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    color: "#999999",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#1D1E64",
    borderRadius: 5,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "bold",
  },
  arrow: {
    color: "#FFFFFF",
    fontSize: 22,
    position: "absolute",
    right: 10,
  },
});
