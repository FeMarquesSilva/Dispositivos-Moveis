//Criei esta tab para deixar os arquivos da primeira aula:
import 'react-native-reanimated';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';

export default function RootLayout() {

  //Ao iniciar a tela, fecha o splashScreen;
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ScrollView>
      <Header title="Home Screen" />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: "#f25",
    padding: 50,
    color: "#fff",
  }
})