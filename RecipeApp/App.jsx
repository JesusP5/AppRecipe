import { SafeAreaView, StyleSheet, } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TabScreen from './screens/tabScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <TabScreen/>
      </SafeAreaView>
    </GestureHandlerRootView>
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