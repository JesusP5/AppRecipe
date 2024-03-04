import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {Keyboard} from 'react-native'
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import FoodCard from '../components/FoodCard';
import { OnSearchBar } from '../components/SearchBar';
import { useFonts } from 'expo-font';
import SummaryScreen from "./summaryScreen";
import AppLoadingScreen from './appLoadingsScreen';

export default SearchResults = ({DataJson, navigation}) => {
  const data = [DataJson];
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap)
  const [selectedElement, setSelectedElement] = useState(null);
  let [fontsLoaded] = useFonts({
    MoreSugar: require("../assets/fonts/MoreSugar-Regular.ttf"),
  });
  const goToSummary = (item) => {
    setSelectedElement(item);
    setCurrentPage('summary');
  };
  if (!fontsLoaded) {
    return <AppLoadingScreen />;
  }


return(
    // Pongan su desvergue dentro del segundo View

    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.contentMargin}>
        <SafeAreaView style={styles.safeContainer}>
        <OnSearchBar/>
        <Text style={{fontSize:25}}> Results </Text>
          <ScrollView>
            {DataJson.meals && DataJson.meals.map((item, index) => (
              <FoodCard
                style={styles.foodCard}
                key={index}
                title={item.strMeal}
                image={item.strMealThumb}
                onPress={() => {
                  goToSummary(item);
                }}
                />
            ))}
          </ScrollView>
          </SafeAreaView>
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
    marginHorizontal: 30,
  },
  foodCard: {
    marginVertical: 10,

  },
  
});