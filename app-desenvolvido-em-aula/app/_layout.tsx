import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack> //Este comanmdo vai carregar na tela do usuario tudo o que temos na "Stack" "(Tabs)", cada aruiv nesta pasta,se trata de uma Tab;
        <Stack.Screen name="index" options={{ title: "Tela Inicial Para Atalhos"}}/>
        <Stack.Screen name="(timePreveiw)" options={{ title: "Previsçao do Tempo"}}/> //Opção para nomear o cabeçalho;
        <Stack.Screen name="(tabs)" /> //Option oculta o header das telas;
        <Stack.Screen name="+not-found" /> //Caso tenha algo configurado errado, e o usuario for acessar uma tela que não existe, ele será direcionado ta a "Stack" "+not-found";
      </Stack>
    </ThemeProvider>
  );
}
