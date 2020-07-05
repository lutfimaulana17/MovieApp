import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'

const TypeMovie = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

export default TypeMovie

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: colors.border,
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 50
    },  
    title: {
        fontSize: 20,
        color: colors.text.primary2,
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        fontStyle: 'normal',
    }
})
