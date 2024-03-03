import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, } from '../components/SearchBar';
import {Keyboard} from 'react-native'
import { Gesture, GestureDetector, Simultaneous } from "react-native-gesture-handler";

export default DashboardScreen = () => {
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap)
  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.contentMargin}>
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
  contentMargin:{
    marginHorizontal: 50,
  }
});
