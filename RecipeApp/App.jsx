import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  SmallButton from './components/BasicButton';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Components small button show</Text>
      <SmallButton title="Press me"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
