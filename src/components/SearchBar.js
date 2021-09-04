import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { colors } from '../theme/colors';

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
                    placeholder="What's on your mind"
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
        marginTop: 20,
        display:"flex",
        marginHorizontal:20

    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        fontSize:20,
        width:"100%",
        color:colors.blue_seadark,
        backgroundColor:colors.white,
        marginHorizontal:10,
        opacity:0.7
    },
});

export default SearchBar;