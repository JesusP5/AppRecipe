import React, { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { RoundButton } from './BasicButton';
import * as Font from 'expo-font';
import { Recomendation } from './SearchElement';

import { Animated } from 'react-native';

Font.loadAsync({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    // Add more fonts as needed
  });




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





export const ElementsOnSearch = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);

  const goToSearchResultsScreen = (element) => {
    setSelectedElement(element);
    setCurrentPage('../screens/SearchResults');
  };

  
  

  const handlePress = async (ingredients) => {
    try{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
      const json = await response.json();
      setData(json);
      goToSearchResultsScreen(json);

      }catch (error){
      setError(error);
    }
  };


return(
    <View>

        <View style = {styles.Container}>
            <Text style = {styles.Text}>Populares</Text>

            <View style = {styles.PopularesContent}>

            {populars.map((item, index) => (
            <RoundButton key={index} title={item.title} image={item.icon} onPress={()=>handlePress(item.value)}/>
            ))}

        </View>
            
        </View>

        <View style = {styles.Container}>
            <Text style = {styles.Text}>Tendencia</Text>

            <View style = {styles.TendenciaContent}>

            {Tendencia.map((item, index) => (
              <Recomendation title={item.title} onPress={()=>handlePress(item.value)}/>
            
            ))}

            </View>
            
        </View>

        {data &&<Text> {JSON.stringify(data)} </Text>}

    </View>
  );
    
};

const styles = StyleSheet.create({
    ContainerProp:{
        
        marginVertical: 10,
        marginHorizontal: 10,
        justifyContent: 'space-between',

    },
    PopularesContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    TendenciaContent:{
        justifyContent: 'space-between',
        
    },
    Text:{
        fontFamily: 'Monsterrat-Bold',
        fontSize: 25,
        marginBottom: 10,
        
    },
});