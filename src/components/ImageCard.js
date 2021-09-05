import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import {colors} from '../theme/colors';

export class ImageCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imageCard}
                    key={this.props.item.id}
                    source={{ uri: this.props.item.images?.fixed_width_small_still?.url }}
                    style={
                        {
                            borderColor: colors.veryLightPink,
                            borderRadius: 5,
                            borderWidth: 1,
                            width: 200,
                            height: 200,
                            margin: 10,
                            backgroundColor: colors.pink_light
                        }
                    }
                    resizeMode="contain"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display:"flex"
    },
    imageCard: {
        justifyContent: "center",
        alignContent: "center",
        position: "relative"
    }
});

export default ImageCard
