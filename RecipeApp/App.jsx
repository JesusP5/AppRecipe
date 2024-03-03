import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  {SmallButton, RoundButton} from './components/BasicButton';
import FoodCard from './components/FoodCard';
import { SearchBar,OnSearchBar } from './components/SearchBar';
import {Recomendation, Recent}  from './components/SearchElement';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Components Basic button show</Text>
      <SmallButton title="Press me"/>
      <RoundButton title = "Burgir" image = {require('./assets/hamburger.png')}/>
      <Text>Components food card show</Text>
      <FoodCard title="Pasta´s House" description="Pasta | Italiana" image={require('./assets/FoodImgExample.jpg')}/>
      <StatusBar style="auto" />
      <Text>Components SearchBar and OnSearchBar show</Text>
      <SearchBar placeholder="Buscar una receta"/>
      <OnSearchBar placeholder="Buscar" />
      <Text>Components OnSearchElements and OnSearchBar show</Text>
      <Recomendation title = "Burger king"/>
      <Recent title='Arroz'/>
      

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
