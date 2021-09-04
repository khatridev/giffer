import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class SearchBar extends React.Component {
    state = { term: "" };

    onTextSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
        console.log("onTextSubmit",this.props,this.state.term);
    };

    render() {
        return (
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    placeholder="search gifs"
                    onSubmitEditing={this.onTextSubmit}
                    value={this.state.term}
                    onChangeText={(text) => this.setState({ term: text})}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        top: 0,
        position: "absolute",
        width: "100%",
        marginTop: 20

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SearchBar;