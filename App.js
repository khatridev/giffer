import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListItems from './src/components/ListItems';
import SearchBar from './src/components/SearchBar';
import { getTrendingStickers, queryStickers } from './src/services/Giphy';
import { colors } from './src/theme/colors';
import * as GLOBAL from './src/utils/Consts';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentSet: "Trending now",
      searchTerm: ""
    };
  }

  // on search handler
  onSearchSubmit = async (term) => {
    res = await queryStickers(term, GLOBAL.API_RESPONSE_LIMIT, 0);
    this.setState({
      images: res.data.data,
      currentSet: `Showing about ${res.data.pagination.total_count} results`,
      searchTerm: term
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onSubmit={this.onSearchSubmit} />
        <ListItems
          images={this.state.images}
          currentSet={this.state.currentSet}
          searchTerm={this.state.searchTerm}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
