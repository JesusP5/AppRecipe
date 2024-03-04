import { StyleSheet, Text, View, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import SummaryScreen from "./summaryScreen"; // Asegúrate de importar tu SummaryScreen

import { SearchBar } from "../components/SearchBar";
import AppLoadingScreen from "./appLoadingsScreen";
import FoodCard from "../components/FoodCard";

export default function DashboardScreen() {
  const [recipes, setRecipes] = useState(null);
  const [simpleRecipes, setSimpleRecipes] = useState(null);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedSimpleElement, setSelectedSimpleElement] = useState(null);
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);
  const API_KEY = "affec1406a384e37982659a430a102d9";

  let [fontsLoaded] = useFonts({
    MoreSugar: require("../assets/fonts/MoreSugar-Regular.ttf"),
  });

  const goToSummary = (element) => {
    setSelectedElement(element);
    setSelectedSimpleElement(null);
    setCurrentPage('summary');
  };

  const goToSimpleSummary = (element) => {
    setSelectedSimpleElement(element);
    setSelectedElement(null);
    setCurrentPage('summary');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/random?number=5&apiKey=996ec117e0c249fcaa5a2d726bd9eddb"
        );

        if (!response.ok) {
          console.error("HTTP error", response.status);
          return;
        }

        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Fetch error", error);
      }
    };

    fetchData();

    const fetchSimpleData = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?query=easy&number=5&apiKey=996ec117e0c249fcaa5a2d726bd9eddb"
        );

        if (!response.ok) {
          console.error("HTTP error", response.status);
          return;
        }

        const data = await response.json();
        setSimpleRecipes(data.results);
      } catch (error) {
        console.error("Fetch error", error);
      }
    };

    fetchSimpleData();

  }, []);


  if (!fontsLoaded) {
    return <AppLoadingScreen />;
  }
  if (currentPage === "summary") {
    return <SummaryScreen selectedElement={selectedElement} selectedSimpleElement={selectedSimpleElement}/>;
  }
  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.contentMargin}>
          <Text style={styles.title}>COOKKING</Text>
          <SearchBar placeholder="Buscar una receta" />
          <ScrollView>
            <Text style={styles.title}>Aleatorias</Text>
            <ScrollView horizontal style={styles.scrollView}>
              {recipes &&
                recipes.map((element) => (
                  <FoodCard
                    key={element.id}
                    title={element.title}
                    image={element.image}
                    onPress={() => {
                      // Aqui va el elemento
                      goToSummary(element);
                    }}
                  />
                ))}
            </ScrollView>
            <Text style={styles.title}>Simples</Text>
            <ScrollView horizontal style={styles.scrollView}>
              {simpleRecipes &&
                simpleRecipes.map((element) => (
                  <FoodCard
                    key={element.id}
                    title={element.title}
                    image={element.image}
                    onPress={() => {
                      // Aqui va el elemento
                      goToSimpleSummary(element);
                    }}
                  />
                ))}
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "start",
    justifyContent: "start",
    marginTop: 25,
  },
  scrollView: {
    height: 'auto'
  },
  title: {
    fontFamily: "MoreSugar",
    fontSize: 28,
    marginVertical: 20,
  },
  contentMargin: {
    marginHorizontal: 40,
  },
});
