import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/onboardingStyles";

export default function Onboarding() {
  const router = useRouter();

  // Índice da imagem
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cria um array de imagens
  const images = [
    require("../../assets/images/onboarding-dog-1.png"),
    require("../../assets/images/onboarding-dog-2.png"),
    require("../../assets/images/onboarding-dog-3.png"),
    require("../../assets/images/onboarding-dog-4.png"),
  ];

  // Troca a imagem automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => {
        return (index + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Container principal da tela
  return (
    <View style={styles.container}>
      <Image source={images[currentIndex]} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.logo}>
          Pet<Text style={styles.safeColor}>Safe</Text>
        </Text>

        {/* container dos indicadores/bolinhas que mostram a imagem atual */}
        <View style={styles.indicators}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentIndex && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        <Text style={styles.title}>Encontre seu pet com facilidade</Text>
        <Text style={styles.description}>
          Com a medalhinha PetSafe, quem encontrar seu pet poderá acessar suas
          informações e entrar em contato com você.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(auth)/login")}
        >
          <Text style={styles.buttonText}>Continuar</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
