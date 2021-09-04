import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import ImageCard from './ImageCard';

const numColumns = 2;

// main component
const ListItems = (props) => {

    const _renderItem = ({ item }) => {
        return <Image style={styles.imageCard}
            key={item.id}
            source={{ uri: item.images?.fixed_height_small_still?.url }}
            style={
                styles.Image,
                {
                    width: 200,
                    height: 200,
                }
            }
            resizeMode="cover"
        />
    }

    const check = () => {
        console.log("check", props.images);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.listLabel}>{props.currentSet}</Text>
            <FlatList
                data={props.images}
                renderItem={_renderItem}
                numColumns={numColumns}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        fontSize: 30,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
    },
    imageCard: {
        position: "relative"
    },
    listLabel: {
        fontSize:28,
        opacity:0.5,
        color: "grey",
        alignItems: "flex-start"
    }

});

export default ListItems;