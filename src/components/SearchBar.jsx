import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="search gifs"
            />
        </View>
    );


}

const styles = StyleSheet.create({
    container:{
        top:0,
        position:"absolute",
        width:"100%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})