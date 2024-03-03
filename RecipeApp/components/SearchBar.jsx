import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



export const  SearchBar  = ({ value, onChangeText, placeholder, onPress}) => (

    
    <View style={styles.container}>
    
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      onPressIn={onPress}
      value={value}
      placeholder={placeholder}
    />
    <Image
      source={require('../assets/loupe.png')}
      style={styles.icon}
    />
    
  </View>
      
    
    
);

export const OnSearchBar = ({value, onChangeText, placeholder, onPress}) => (
    <View style={styles.container}>

    
    
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
    <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
        <Image
            source={require('../assets/filter.png')}
            style={styles.iconFilter}
        />
    </TouchableOpacity>

    <Image
      source={require('../assets/loupe.png')}
      style={styles.icon}
    />

    </View>
);

 const styles = StyleSheet.create({ 

    container: {
        flexDirection: 'row',
    },

    input: {
      backgroundColor: '#F1F1F1',
      fontSize: 15,
      height: 38,
      width: '100%',
      borderRadius: 10,
      paddingLeft: 40,
    },
    inputOnsearch: {

    backgroundColor: '#F1F1F1',
      fontSize: 15,
      height: 38,
      width: '100%',
      borderRadius: 5,
      paddingLeft: 40,
    },

    icon: {
        
        width: 17,
        height: 17,
        left: 10,
        top: 10,
        position: 'absolute',
      },

      iconFilter: {
        width: 17,
        height: 17,
        position: 'absolute',
      },

    TouchableOpacity: {
        
        borderColor: '#A3A3A3',
        borderLeftWidth: 1,
        marginBottom: 1,
        position: 'absolute',
        right: 5,
        top: 7,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        width: 30,
        height: 25,
    }
    });


