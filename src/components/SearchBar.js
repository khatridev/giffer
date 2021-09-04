import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { colors } from '../theme/colors';

class SearchBar extends React.Component {
    state = { term: "" };

    onTextSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log("onTextSubmit", this.props, this.state.term);
    };

    render() {
        return (
            <View style={styles.container} >
                <Image
                    source={require('../assets/images/search.png')} //Change your icon image here
                    style={styles.imageStyle}
                />
                <TextInput
                    placeholder="What's on your mind"
                    onSubmitEditing={this.onTextSubmit}
                    value={this.state.term}
                    onChangeText={(text) => this.setState({ term: text })}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,

    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
});

export default SearchBar;