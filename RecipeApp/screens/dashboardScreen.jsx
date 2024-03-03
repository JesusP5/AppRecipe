import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, } from '../components/SearchBar';
import {Keyboard} from 'react-native'
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';
import AppLoadingScreen from './appLoadingsScreen';

export default DashboardScreen = () => {
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);

  let [fontsLoaded] = useFonts({
    'MoreSugar': require('../assets/fonts/MoreSugar-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoadingScreen />;
  }



  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.contentMargin}>
          <Text style={styles.title}>
            COOKKING
          </Text>
          <SearchBar placeholder="Buscar una receta"/>
        </View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'start',
  },
  title: {
    fontFamily: 'MoreSugar',
    fontSize: 28,
    marginVertical: 20,
  },
  contentMargin:{
    marginHorizontal: 50,
  }
});
