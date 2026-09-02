import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Index() {
  if (Platform.OS === 'web') {
    return <Redirect href={'/web' as any} />; // O Expo Router assume o index de (web) na web se configurado, ou use o caminho direto abaixo
  }
  
  return <Redirect href={'/mobile' as any} />;
}