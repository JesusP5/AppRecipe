import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Keyboard } from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";

export default function SummaryScreen({
  selectedElement,
  selectedSimpleElement,
}) {
  const [data, setData] = useState(null);
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);

  useEffect(() => {
    if (selectedElement !== null) {
      setData(selectedElement);
    } else if (selectedSimpleElement !== null) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${selectedSimpleElement.id}/information?apiKey=996ec117e0c249fcaa5a2d726bd9eddb`
          );

          if (!response.ok) {
            console.error("HTTP error", response.status);
            return;
          }

          const dat = await response.json();
          setData(dat);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [selectedElement, selectedSimpleElement]);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const ingredients = data.extendedIngredients
    .map((ingredient) => ingredient.original)
    .join("\n");
  const instructionsWithoutTags = data.instructions.replace(/<[^>]*>/g, "");


  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.topScreen}>
          <Text style={styles.title}>{data.title}</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <ScrollView style={styles.botScreen}>
          <Text style={styles.titleSumary}>Recipe:</Text>
          <Text>{instructionsWithoutTags}</Text>
          <Text style={styles.titleSumary}>Ingredients:</Text>
          <Text>{ingredients}</Text>
        </ScrollView>
      </View>
    </GestureDetector>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: "MoreSugar",
    fontSize: 24,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  titleSumary: {
    fontFamily: "MoreSugar",
    fontSize: 20,
    marginVertical: 20,
  },
  topScreen: {
    flex: 1,
    alignItems: "center",
  },
  botScreen: {
    flex: 1,
    marginTop: 15,
  },
  image: {
    width: "90%",
    height: "75%",
    borderRadius: 10,
    margin: 0,
  },
});
//Para levantar main 
