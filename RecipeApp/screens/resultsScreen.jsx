
import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FoodCard from '../components/FoodCard';
import { OnSearchBar } from '../components/SearchBar';
import { useFonts } from 'expo-font';


const ResultsScreen = () => {
    const [data, setData] = useState([]);
    let [fontsLoaded] = useFonts({
      MoreSugar: require('../assets/fonts/MoreSugar-Regular.ttf'),
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://www.themealdb.com/api/json/v1/1/search.php?s=salad');
          const data = await response.json();
          setData(data.meals);
        } catch (error) {
          console.error('Error fetching data: ', error);
        } 
      };
      fetchData();
    },[]);

    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
    return (
      <SafeAreaView style={styles.safeContainer}>

      <OnSearchBar />
      <Text style={{fontFamily: 'MoreSugar', fontSize: 32, marginTop: 15}}>Results</Text>
      <ScrollView style={styles.container}>
        
        <View>
          {data && data.map((item, index) => (
            <FoodCard
              key={index}
              title={item.strMeal}
              description={item.strArea}
              image={item.strMealThumb}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
    );
};
const styles = {
    safeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        paddingTop: StatusBar.currentHeight,
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        flex: 1,
    },
};

export default ResultsScreen;