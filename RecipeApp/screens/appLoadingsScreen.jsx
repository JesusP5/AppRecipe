import React from 'react';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export default function AppLoadingScreen() {
  const dismissOnTap = Gesture.Tap().onEnd(() => Keyboard.dismiss());
  const composed = Gesture.Simultaneous(dismissOnTap);

  return (
    <GestureDetector gesture={composed}>
      <View style={styles.container}>
        {/* Aquí puedes agregar elementos para tu pantalla de carga */}
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
