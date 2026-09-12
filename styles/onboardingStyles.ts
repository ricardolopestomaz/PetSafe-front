import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    paddingTop: 20,
    paddingBottom: 30,

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
