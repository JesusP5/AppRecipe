import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";

export const Recomendation= ({ title, onPress}) =>(

    <View style = {styles.Container}>
    <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
      <Image source={require('../assets/loupe.png')} style = {styles.icon}/>
      <Text style = {styles.Text}>{title}</Text>
    </TouchableOpacity>
  </View>

);

export const Recent = ({ title, onPress, onPressClose}) =>(

  <View style = {styles.Container}>

  <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity} >
    <Image source={require('../assets/repeat.png')} style = {styles.iconRepeat}/>
    <Text style = {styles.TextRecomendation}>{title}</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress = {onPressClose} style={styles.closeButton}>
      <Image source={require('../assets/close.png')} style = {styles.iconClose}/>
    </TouchableOpacity>

</View>

);

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 38,
    width: 357,
  },
  TouchableOpacity:{
    
    flexDirection: 'row',
    alignItems: 'center',
    height: 38,
    width: 357,
  },

  closeButton:{
    marginBottom: 1,
    position: 'absolute',
    right: 5,
    top: 7,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    width: 30,
    height: 25,
  },
  
  icon:{ 
    width: 17,
    height: 17,
    margin: 5,
  },
  iconClose:{
    width: 7,
    height: 7,
    margin: 5,
    position: 'absolute',
  
  },

  iconRepeat:{
    width: 20,
    height: 20,
    left: 5
  },

  Text: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
  },
  TextRecomendation: {
    fontSize: 15,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
  },
  
});




