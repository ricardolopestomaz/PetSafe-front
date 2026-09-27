import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Importação dos banners em PNG
import Banner1 from "@/assets/banners/banner1.png";
import Banner2 from "@/assets/banners/banner2.png";
import Banner3 from "@/assets/banners/banner3.png";
import Banner4 from "@/assets/banners/banner4.png";

import { styles } from "@/styles/homeStyles";

// Hook de exemplo para obter o utilizador autenticado
const useUser = () => {
  return { name: "Rafaela" };
};

const banners = [
  {
    imagem: Banner1,
    titulo: "Sua Tag ID inteligente sempre ativa.",
    subtitulo: "Conecte a identificação do seu pet com um clique.",
  },
  {
    imagem: Banner2,
    titulo: "Histórico de leituras em tempo real.",
    subtitulo: "Saiba exatamente onde e quando a medalha foi lida.",
  },
  {
    imagem: Banner3,
    titulo: "Saúde e vacinas organizadas.",
    subtitulo: "Histórico médico e lembretes sempre à mão.",
  },
  {
    imagem: Banner4,
    titulo: "Assistente inteligente 24 horas.",
    subtitulo: "Tire dúvidas sobre cuidados e bem-estar do pet.",
  },
];

export default function Home() {
  const { name } = useUser();
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [abaAtiva, setAbaAtiva] = useState("home");
  const [filtroAtivo, setFiltroAtivo] = useState("pets");

  const opacidade = useRef(new Animated.Value(1)).current;

  // Animação de Fade automática dos banners
  useEffect(() => {
    const intervalo = setInterval(() => {
      Animated.timing(opacidade, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIndiceAtual((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

        Animated.timing(opacidade, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 4000);

    return () => clearInterval(intervalo);
  }, [opacidade]);

  const primeiroNome = name ? name.split(" ")[0] : "Usuário";

  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        {/* NOME DINÂMICO */}
        <Text style={styles.titulo}>Olá, {primeiroNome}!</Text>

        <View style={styles.bannerWrapper}>
          <Animated.View
            style={[styles.bannerContainer, { opacity: opacidade }]}
          >
            <Image
              source={banners[indiceAtual].imagem}
              style={styles.imagemBanner}
              resizeMode="cover"
            />

            <View style={styles.textoBanner}>
              <Text style={styles.tituloBanner} numberOfLines={2}>
                {banners[indiceAtual].titulo}
              </Text>
              <Text style={styles.subtituloBanner} numberOfLines={2}>
                {banners[indiceAtual].subtitulo}
              </Text>
            </View>
          </Animated.View>
        </View>

        {/* INDICADORES DO CARROSSEL */}
        <View style={styles.indicadores}>
          {banners.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicador,
                index === indiceAtual && styles.indicadorAtivo,
              ]}
            />
          ))}
        </View>

        {/* FILTROS HORIZONTAIS COM SCROLL */}
        <View style={styles.scrollWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerBotoesScroll}
          >
            <TouchableOpacity
              style={filtroAtivo === "pets" ? styles.botaoAtivo : styles.botao}
              onPress={() => setFiltroAtivo("pets")}
            >
              <Text
                style={
                  filtroAtivo === "pets"
                    ? styles.textoBotaoAtivo
                    : styles.textoBotao
                }
              >
                Meus Pets
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                filtroAtivo === "historico" ? styles.botaoAtivo : styles.botao
              }
              onPress={() => setFiltroAtivo("historico")}
            >
              <Text
                style={
                  filtroAtivo === "historico"
                    ? styles.textoBotaoAtivo
                    : styles.textoBotao
                }
              >
                Histórico de Escaneamento
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={filtroAtivo === "outro" ? styles.botaoAtivo : styles.botao}
              onPress={() => setFiltroAtivo("outro")}
            >
              <Text
                style={
                  filtroAtivo === "outro"
                    ? styles.textoBotaoAtivo
                    : styles.textoBotao
                }
              >
                Parcerias
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* BOTÃO ADICIONAR */}
        <TouchableOpacity style={styles.adicionar}>
          <Text style={styles.textoAdicionar}>+ Adicionar</Text>
        </TouchableOpacity>
      </View>

      {/* NAVEGAÇÃO INFERIOR (BOTTOM BAR) */}
      <View style={styles.rodape}>
        <TouchableOpacity
          style={styles.itemRodape}
          onPress={() => setAbaAtiva("home")}
        >
          <Octicons
            name="home"
            size={20}
            color={abaAtiva === "home" ? "#FFA800" : "#D1D1D6"}
          />
          {abaAtiva === "home" && <View style={styles.tracoAtivo} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemRodape}
          onPress={() => setAbaAtiva("ai")}
        >
          <MaterialCommunityIcons
            name="robot"
            size={20}
            color={abaAtiva === "ai" ? "#FFA800" : "#D1D1D6"}
          />
          {abaAtiva === "ai" && <View style={styles.tracoAtivo} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemRodape}
          onPress={() => setAbaAtiva("scanner")}
        >
          <Ionicons
            name="qr-code-outline"
            size={20}
            color={abaAtiva === "scanner" ? "#FFA800" : "#D1D1D6"}
          />
          {abaAtiva === "scanner" && <View style={styles.tracoAtivo} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemRodape}
          onPress={() => setAbaAtiva("chat")}
        >
          <Ionicons
            name="chatbubble-outline"
            size={20}
            color={abaAtiva === "chat" ? "#FFA800" : "#D1D1D6"}
          />
          {abaAtiva === "chat" && <View style={styles.tracoAtivo} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemRodape}
          onPress={() => setAbaAtiva("pets")}
        >
          <FontAwesome5
            name="paw"
            size={20}
            color={abaAtiva === "pets" ? "#FFA800" : "#D1D1D6"}
          />
          {abaAtiva === "pets" && <View style={styles.tracoAtivo} />}
        </TouchableOpacity>
      </View>
    </View>
  );
}
