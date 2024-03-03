import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import DashboardScreen from './screens/dashboardScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TabScreen from './screens/tabScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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