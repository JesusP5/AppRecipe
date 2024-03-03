import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import {
    Gesture,
    GestureDetector,
    ScrollView,
  } from "react-native-gesture-handler";

export default function SummaryScreen({selectedElement}) {
    const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
    const composed = Gesture.Simultaneous(dismissOnTap);
    const data = selectedElement;
  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        <Text>{data.title}</Text>
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
  },
  title: {
    fontFamily: "MoreSugar",
    fontSize: 28,
    marginVertical: 20,
  },
  contentMargin: {
    marginHorizontal: 50,
  },
});
