import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
       <SearchBar />
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
