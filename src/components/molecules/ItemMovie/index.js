import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dummy1, IconStar } from '../../../assets'
import { colors } from '../../../utils'

const ItemMovie = () => {
    return (
        <View style={styles.container}>
            <Image source={Dummy1} style={styles.image} />
            <Text style={styles.title}>Ford v Ferrari</Text>
            <View style={styles.rating}>
                <IconStar />
                <Text style={styles.textRating}>8.2</Text>
            </View>
        </View>
    )
}

export default ItemMovie

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignSelf: 'flex-start'
    },  
    image: {
        width: 310,
        height: 460,
        borderRadius: 50
    },
    title: {
        marginTop: 35,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 32,
        color: colors.text.primary
    },
    textRating: {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        color: colors.text.primary2,
        marginLeft: 8
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    }
})
