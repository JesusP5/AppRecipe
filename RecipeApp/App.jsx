import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  SmallButton from './components/BasicButton';
import FoodCard from './components/FoodCard';
import { SearchBar,OnSearchBar } from './components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Components small button show</Text>
      <SmallButton title="Press me"/>
      <Text>Components food card show</Text>
      <FoodCard title="Pasta´s House" description="Pasta | Italiana" image={require('./assets/FoodImgExample.jpg')}/>
      <StatusBar style="auto" />
      <Text>Components SearchBar and OnSearchBar</Text>
      <SearchBar placeholder="Buscar una receta"/>
      <OnSearchBar placeholder="Buscar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
