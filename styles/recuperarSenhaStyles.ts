import { StyleSheet } from "react-native";

export const recuperarSenhaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboard: {
    flex: 1,
  },

  topArea: {
    flex: 1,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,

    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 26,
    color: "#1D1E64",
    marginBottom: 24,
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
    marginBottom: 20,
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

  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  linkText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#000000",
  },

  link: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    color: "#1D1E64",
  },
});