import React, { Component } from 'react'
import { StyleSheet,View,Image } from 'react-native';

export class ImageCard extends Component {
    render() {
        return (
            <View>
                <Image
                    source={this.props.image.urls?.regular}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
});

export default ImageCard
