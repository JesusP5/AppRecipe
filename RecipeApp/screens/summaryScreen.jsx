function SearchResultsScreen({ navigation }) {
    return <SearchResults navigation={navigation} />;
  }
  
  // En tu componente personalizado
  function SearchResults({ navigation }) {
    const goToSummary = (item) => {
      navigation.navigate('SummaryScreen', { item: item });
    };
  
    // El resto de tu código...
  }