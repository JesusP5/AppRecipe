import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function SmallButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#F1F1F1",
    margin: 10,
    borderRadius: 5,
  },

  Text: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center",
  },
});

export default SmallButton;
