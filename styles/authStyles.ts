import { StyleSheet } from 'react-native';

export const COLORS = {
  yellow: '#FFB101',
  blue: '#1D1E64',
  white: '#FFFFFF',
  gray: '#D4D4D4',
  black: '#000000',
  placeholder: '#999999',
};

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },

  keyboard: {
    flex: 1,
  },

  topArea: {
    height: 95,
  },

  card: {
    flex: 1,

    backgroundColor: COLORS.white,

    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,

    paddingHorizontal: 24,
    paddingTop: 28,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',

    color: COLORS.blue,

    textAlign: 'center',

    marginBottom: 26,
  },

  label: {
    fontSize: 12,

    color: COLORS.blue,

    marginBottom: 5,
  },

  inputContainer: {
    height: 50,

    backgroundColor: COLORS.gray,

    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,

    marginBottom: 14,

    gap: 10,
  },

  input: {
    flex: 1,

    fontSize: 12,

    color: COLORS.black,
  },

  button: {
    height: 50,

    backgroundColor: COLORS.blue,

    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 8,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: COLORS.white,

    fontWeight: '600',
    fontSize: 13,
  },

  linkContainer: {
    flexDirection: 'row',

    justifyContent: 'center',

    marginTop: 20,
  },

  linkText: {
    fontSize: 12,

    color: COLORS.black,
  },

  link: {
    fontSize: 12,

    fontWeight: '600',

    color: COLORS.yellow,
  },
});