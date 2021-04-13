import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import Home from './views/home/Home.js';
import Pokemon from './views/pokemon/Pokemon.js';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon" component={Pokemon} />
      </NativeRouter>
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
  activeSpace: {
    margin: 50,
  }
});
