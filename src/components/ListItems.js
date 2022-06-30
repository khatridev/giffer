import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
import ImageCard from './ImageCard';
import { colors } from '../theme/colors';
import { getTrendingStickers, queryStickers } from '../services/Giphy';
import * as GLOBAL from '../utils/Consts';



// Main list component
class ListItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: this.props.images
        }
    }


    componentDidMount() {
        this.onPageLoad();
    }

    onPageLoad = async () => {
        res = await getTrendingStickers(GLOBAL.API_RESPONSE_LIMIT, 0);
        this.setState({
            offset: 0,
            data: res.data.data
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.searchTerm != this.props.searchTerm) {
            this.setState({ offset: 0, data: this.props.images });
        }
    }

    _renderItem = ({ item }) => {
        return <ImageCard item={item} />
    }
    
    _fetchResults = async () => {
        const { data, offset } = this.state;
        this.setState({ data: data, offset: GLOBAL.API_RESPONSE_LIMIT + offset + 1 });

        if (this.props.searchTerm !== "") {
            queryStickers(this.props.searchTerm, GLOBAL.API_RESPONSE_LIMIT, GLOBAL.API_RESPONSE_LIMIT + this.state.offset).then((res) => {
                this.setState({
                    data: data.concat(res.data.data),
                    offset: this.state.offset
                });
            });
        } else {
            getTrendingStickers(GLOBAL.API_RESPONSE_LIMIT, GLOBAL.API_RESPONSE_LIMIT + this.state.offset).then((res) => {
                this.setState({
                    data: data.concat(res.data.data),
                    offset: this.state.offset
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1
    },
    labelContainer: {
        backgroundColor: colors.blue_seadark,
        alignSelf: "flex-end"

    },
    flatList: {
        marginTop: 10,
        width: '100%',
        height: '100%'
    },
    listLabel: {
        fontSize: 16,
        color: "white",
        padding: 2,
        marginHorizontal: 10

    }

});

export default ListItems;