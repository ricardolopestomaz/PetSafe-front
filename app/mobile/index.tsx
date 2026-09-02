import { StyleSheet, Text, View } from 'react-native';

export default function MobileHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 PetSafe Mobile</Text>
      <Text style={styles.subtitle}>Aplicativo do pet rastreável funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f6fa' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2f3640' },
  subtitle: { fontSize: 14, color: '#718093', marginTop: 8 }
});