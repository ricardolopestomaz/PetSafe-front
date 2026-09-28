import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import "react-native-reanimated";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { useAuthDeepLink } from "@/hooks/use-auth-deep-link";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useAuthDeepLink();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          // Define a cor de fundo com base no tema (claro/escuro) diretamente nas opções da Stack
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "#121212" : "#FFFFFF",
          },
        }}
      />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </>
  );
}