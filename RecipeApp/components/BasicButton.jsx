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
    padding: 10,
    borderRadius: 10,
  },

  Text: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginBottom: 1,
    textAlign: "center",
  },
});

export default SmallButton;
