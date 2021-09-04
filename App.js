import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import ListItems from './src/components/ListItems';
import SearchBar from './src/components/SearchBar';
import api from './src/utils/ApiBase';

class App extends React.Component {

  state = { images: [], currentSet: "What's trending" };

  componentDidMount() {
    this.onPageLoad();
  }

  // on search handler
  onPageLoad = async () => {
    console.log("onSearchSubmit called")
    const res = await api.get("/stickers/trending", {
      params: {
        limit: 10,
        api_key: "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"
      }
    });
    this.setState({ images: res.data.data, currentSet: "What's trending now" });
    console.log("onSearchSubmit res", res.data.data);
  };

  // on search handler
  onSearchSubmit = async (term) => {
    console.log("onSearchSubmit called")
    const res = await api.get("/stickers/search", {
      params: {
        q:term,
        limit: 50,
        api_key: "PTo8OaVWQlYP78CMUQtajXkPZ9eNEVxH"
      }
    });
    this.setState({ images: res.data.data, currentSet: `${res.data.pagination.total_count} results` });
    console.log("onSearchSubmit res", res.data.data);
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ListItems images={this.state.images} currentSet={this.state.currentSet} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default App;
