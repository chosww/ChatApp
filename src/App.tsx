import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open D up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default registerRootComponent(App);