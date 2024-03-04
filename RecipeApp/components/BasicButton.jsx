import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";


export function SmallButton({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.SmallButton}>
      <Text style={styles.Text}>{title}</Text>
    </TouchableOpacity>
  );
}

export const RoundButton = ({image, onPress, title}) =>(

  <View style = {styles.RoundButtonContainer}>
    <TouchableOpacity onPress={onPress} style={styles.RoundButton}>
      <Image source = {image} style = {styles.icon}/>
      
    </TouchableOpacity>
    <Text style={styles.textRoundButton}>{title}</Text>
  </View>

  

);

const styles = StyleSheet.create({
  SmallButton: {
    backgroundColor: "#F1F1F1",
    margin: 10,
    borderRadius: 5,
  },
  RoundButtonContainer:{
    margin: 10,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'flex-start', // Add this line
  },

  RoundButton:{
    backgroundColor: "#F1F1F1",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: 'flex-start', // Add this line
  },
  icon:{
    width: 30,
    height: 30,
    margin: 15,
  },

  Text: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center",
  },
  textRoundButton: {
    fontSize: 15,
    textAlign: "center",
  },
});

