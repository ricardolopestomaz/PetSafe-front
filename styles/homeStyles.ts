import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PADDING_HORIZONTAL = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: PADDING_HORIZONTAL,
  },

  titulo: {
    marginTop: 80,
    marginBottom: 10,
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
    color: "#2C2C2E",
  },

  /* Banner Responsivo */
  bannerWrapper: {
    width: "100%",
    aspectRatio: 1.95,
  },

  bannerContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },

  imagemBanner: {
    width: "100%",
    height: "100%",
  },

  /* Texto Responsivo dentro do Banner */
  textoBanner: {
    position: "absolute",
    top: "22%",
    left: "6%",
    width: "55%",
  },

  tituloBanner: {
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    lineHeight: Math.round(SCREEN_WIDTH * 0.052),
  },

  subtituloBanner: {
    marginTop: "3%",
    fontSize: Math.round(SCREEN_WIDTH * 0.03),
    fontFamily: "Poppins_400Regular",
    color: "rgba(255, 255, 255, 0.85)",
    lineHeight: Math.round(SCREEN_WIDTH * 0.04),
  },

  /* Indicadores */
  indicadores: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 20,
  },

  indicador: {
    width: 18,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 3,
  },

  indicadorAtivo: {
    backgroundColor: "#9A97C6",
  },

  /* Filtros com Scroll Horizontal */
  scrollWrapper: {
    marginHorizontal: -PADDING_HORIZONTAL,
  },

  containerBotoesScroll: {
    paddingHorizontal: PADDING_HORIZONTAL,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  botaoAtivo: {
    backgroundColor: "#FFA800",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  textoBotaoAtivo: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Poppins_600SemiBold",
  },

  botao: {
    backgroundColor: "#F2F2F7",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  textoBotao: {
    color: "#A0A0A5",
    fontSize: 13,
    fontFamily: "Poppins_400Regular",
  },

  /* Botão Adicionar */
  adicionar: {
    alignSelf: "flex-end",
    marginTop: 24,
  },

  textoAdicionar: {
    color: "#1C1B5E",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
  },

  /* Rodapé */
  rodape: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#FFFFFF",
    paddingBottom: 10,
    marginBottom: 40,
    borderTopColor: "#F2F2F7",
  },

  itemRodape: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    position: "relative",
  },

  tracoAtivo: {
    position: "absolute",
    bottom: -8,
    width: 16,
    height: 3,
    backgroundColor: "#FFA800",
    borderRadius: 2,
  },
});
