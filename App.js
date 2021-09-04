import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import ListItems from './src/components/ListItems';
import SearchBar from './src/components/SearchBar';
import api from './src/utils/ApiBase';

class App extends React.Component {

  state = { images: [] };

  // on search handler
  onSearchSubmit = async (term) => {
    console.log("onSearchSubmit called")
    const res = await api.get("/stickers/trending", {
      params: {
        api_key: "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"
      }
    });
    this.setState({ images: res.data.data });
    console.log("onSearchSubmit res", res.data.data);
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ListItems images={this.state.images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;
