import React from "react";
import { View, Text, StyleSheet, Image, Keyboard} from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";

export default function SummaryScreen({ selectedElement }) {
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);
  const data = selectedElement;
  const instructionsWithoutTags = data.instructions.replace(/<[^>]*>/g, '');
  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <View style={styles.topScreen}>
          <Text style={styles.title}>{data.title}</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
        </View>
        <View style={styles.botScreen}>
          <Text style={styles.titleSumary}>Recipe:</Text>
          <Text>{instructionsWithoutTags}</Text>
        </View>
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
  },
  image: {
    width: "90%",
    height: "75%",
    borderRadius: 10,
    margin:0,
  },
});
