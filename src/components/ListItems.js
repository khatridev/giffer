import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, useWindowDimensions, Dimensions } from 'react-native';
import ImageCard from './ImageCard';
import { colors } from '../theme/colors';
import { getTrendingStickers, queryStickers } from '../services/Giphy';
import * as GLOBAL from '../utils/Consts';



// main component
class ListItems extends React.Component {
    // const {width, height} = Dimensions.get('window');
    // setColumnNo(Math.ceil(width/100));

    state = {
        offset: 0,
        data: []
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({ offset: 0, data: this.props.images });
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate", prevProps.searchTerm, this.props.searchTerm);
        if (prevProps.searchTerm != this.props.searchTerm) {
            console.log("componentDidUpdate NE");
            this.setState({ offset: 0, data: this.props.images });
        }
    }

    _renderItem = ({ item }) => {
        return <ImageCard item={item} />
    }

    check = () => {
        console.log("check", this.props.images);
    }
    _fetchResults = async () => {
        console.log("_fetchREsult", this.props.searchTerm, GLOBAL.API_RESPONSE_LIMIT, this.state.offset);
        const { data, offset } = this.state;
        this.setState({ data: data, offset: GLOBAL.API_RESPONSE_LIMIT + offset + 1 });

        if (this.props.searchTerm !== "") {
            queryStickers(this.props.searchTerm, GLOBAL.API_RESPONSE_LIMIT, GLOBAL.API_RESPONSE_LIMIT + this.state.offset).then((res)=>{
                this.setState({
                    data: data.concat(res.data.data),
                    offset:this.state.offset
                });
            });
        } else {
            getTrendingStickers(GLOBAL.API_RESPONSE_LIMIT, GLOBAL.API_RESPONSE_LIMIT + this.state.offset).then((res) => {
                this.setState({
                    data: data.concat(res.data.data),
                    offset:this.state.offset
                });
            });
        }

        
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.labelContainer}>
                    <Text style={styles.listLabel}>{this.props.currentSet}</Text>
                </View>
                <FlatList
                    style={styles.flatList}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    onEndReached={this._fetchResults}
                    onEndReachedThreshold={0.7}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    labelContainer: {
        backgroundColor: colors.blue_seadark,
        alignSelf: "flex-end"

    },
    flatList: {
        marginTop: 10
    },
    listLabel: {
        fontSize: 16,
        color: "white",
        padding: 2,
        marginHorizontal: 10

    }

});

export default ListItems;