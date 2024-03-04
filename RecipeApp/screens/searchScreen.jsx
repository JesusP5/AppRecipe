import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Keyboard } from 'react-native'
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { OnSearchBar } from "../components/SearchBar";
import { ElementsOnSearch } from "../components/OnSearch";
import { Recomendation } from '../components/SearchElement';
import { RoundButton } from '../components/BasicButton';
import SearchResults from './searchResultsScreen';


const populars = [
  {
    icon: require('../assets/ensalada.png'),
    title: 'Verduras',
    value: 'tomato&onion&lettuce&carrot&cucumber',
  },
  {
    icon: require('../assets/pollo.png'),
    title: 'Pollo',
    value: 'chicken',
  },
  {
    icon: require('../assets/res.png'),
    title: 'Res',
    value: 'beef',
  },
  {
    icon: require('../assets/arroz.png'),
    title: 'Arroz',
    value: 'rice',
  },
]

const Tendencia = [
  {
    title: 'Huevo',
    value: 'egg',
  },
  {
    title: 'Harina',
    value: 'flour',
  },
  {
    title: 'Mantequilla',
    value: 'butter',
  },
  {
    title: 'Arroz',
    value: 'rice',
  },
]
export default SearchScreen = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState(null);
 

  const handlePress = async (ingredients) => {

    

    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setData(data);
      

    } catch (error) {
      setError(error);
    }
    
    

  };

  


  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap)

  if (data != null) {
    return <SearchResults DataJson = {data}/>;
  }

    return (

      // Pongan su desvergue dentro del segundo View
      //G: xd
      <GestureDetector gesture={composed}>
        <View style={styles.container}>
          <View style={styles.contentMargin}>

            <OnSearchBar 
              value = {ingredients}
              onChangeText={setIngredients}
              onSubmit={()=>handlePress(ingredients)}
              placeholder="Enter ingredients"
              />
  
            <View style={styles.ContainerProp}>
              <Text style={styles.Text}>Populares</Text>
  
              <View style={styles.PopularesContent}>
  
                {populars.map((item, index) => (
                  <RoundButton key={index} title={item.title} image={item.icon} onPress={() => handlePress(item.value)} />
                ))}
              </View>
  
            </View>
  
            <View style={styles.ContainerProp}>
              <Text style={styles.Text}>Tendencia</Text>
  
              <View style={styles.TendenciaContent}>
  
                {Tendencia.map((item, index) => (
  
                  <Recomendation title={item.title} onPress={() => handlePress(item.value)} />
  
                ))}
  
              </View>
  
            </View>
  
            {data && <Text> {JSON.stringify(data)} </Text>}
  
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
    marginTop: '15%',
  },
  contentMargin: {
    marginHorizontal: '5%',
  },
  ContainerProp: {

    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',

  },
  PopularesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  TendenciaContent: {
    justifyContent: 'space-between',

  },
  Text: {
    fontFamily: 'Monsterrat-Bold',
    fontSize: 25,
    marginBottom: 10,

  },
});
