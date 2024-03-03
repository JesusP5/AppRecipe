import { StyleSheet, Text, View, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Gesture, GestureDetector, ScrollView } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';

import { SearchBar, } from '../components/SearchBar';
import AppLoadingScreen from './appLoadingsScreen';
import FoodCard from '../components/FoodCard';

export default function DashboardScreen() {
  const [recipes, setRecipes] = useState(null);

  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);
  const API_KEY = "affec1406a384e37982659a430a102d9";

  let [fontsLoaded] = useFonts({
    'MoreSugar': require('../assets/fonts/MoreSugar-Regular.ttf'),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=affec1406a384e37982659a430a102d9');
        
        if (!response.ok) {
          console.error('HTTP error', response.status);
          return;
        }
        
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Fetch error', error);
      }
    };
  
    fetchData();
  }, []);


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
          <Text style={styles.title}>
            Aleatorias
          </Text>
          <ScrollView horizontal>
            {
              recipes &&
              recipes.map(element => (
                <FoodCard
                  key={element.id}
                  title={element.title}
                  image={element.image}
                  onPress={
                    () => {
                      // Aqui va el elemento
                    }
                  }
                />
              ))
            }
          </ScrollView>
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
