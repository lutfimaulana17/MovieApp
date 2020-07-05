import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Dummy1, IconStar } from '../../../assets'
import { colors } from '../../../utils'

const ItemMovie = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={Dummy1} style={styles.image} />
            <Text style={styles.title}>Ford v Ferrari</Text>
            <View style={styles.rating}>
                <IconStar />
                <Text style={styles.textRating}>8.2</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemMovie

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        alignItems: 'center'
    },  
    image: {
        width: 200,
        height: 310,
        borderRadius: 50
    },
    title: {
        marginTop: 20,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 28,
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
