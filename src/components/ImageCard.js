import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import {colors} from '../theme/colors';

export class ImageCard extends Component {
    render() {
        return (
            <View>
                <Image style={styles.imageCard}
                    key={this.props.item.id}
                    source={{ uri: this.props.item.images?.fixed_width_small_still?.url }}
                    style={
                        styles.Image,
                        {
                            borderColor: colors.veryLightPink,
                            borderRadius: 5,
                            borderWidth: 1,
                            width: 300,
                            height: 300,
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
    imageCard: {
        justifyContent: "center",
        alignContent: "center",
        position: "relative"
    }
});

export default ImageCard
