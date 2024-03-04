import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

function FoodCard({ title, description, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.cardText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        width:250,
        height:150,
        borderRadius: 10,
        padding:0,
        margin: 10,
    },
    cardText: {
        padding: 5,
        paddingLeft:0
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
    },
    image: {
        width: "100%",
        height: 104,
        borderRadius: 10,
    },
});

export default FoodCard;