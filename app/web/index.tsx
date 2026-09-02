import { StyleSheet, Text, View } from 'react-native';

export default function WebHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💻 AuTag Painel Web</Text>
      <Text style={styles.subtitle}>Versão web para o navegador funcionando perfeitamente!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8f4f8' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50' },
  subtitle: { fontSize: 16, color: '#34495e', marginTop: 8 }
});