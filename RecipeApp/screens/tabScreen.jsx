import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Svg from 'react-native-svg';
import DashboardScreen from './dashboardScreen';
import SearchScreen from './searchScreen';
import FavoritesScreen from './favoritesScreen';

const barItems = [
  {
    icon: 'https://www.svgrepo.com/show/22031/home-icon-silhouette.svg',
    page: <DashboardScreen/>,
  },
  {
    icon: 'https://www.svgrepo.com/show/532555/search.svg',
    page: <SearchScreen/>,
  },
  {
    icon: 'https://www.svgrepo.com/show/532473/heart.svg',
    page: <FavoritesScreen/>,
  },
];

export default function DashboardPage() {
  const [selectedWidgetIndex, setSelectedWidgetIndex] = useState(0);

  const onPageChanged = (index) => {
    setSelectedWidgetIndex(index);
  };

  return (
    <View style={styles.container}>
      {barItems[selectedWidgetIndex].page}
      <View style={styles.bottomBar}>
        {barItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onPageChanged(index)}>
            <Svg.SvgUri width="25" height="25" uri={item.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomBar: {
    borderRadius: 15,
    shadowColor: '#a1a1a1',
    shadowOpacity: 0.15,
    height: 'auto',
    shadowOffset: {height: -5},
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
  },
});
