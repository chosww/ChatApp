import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { registerRootComponent } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

class App extends Component {
  render() {
    return (
    
      <View style={styles.container}>
        {/* <Text>Open D up App.tsx to start working on your app!</Text> */}
        <Button buttonText={"Click Me!"} buttonNumber={2} buttonClass="test1"></Button>
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