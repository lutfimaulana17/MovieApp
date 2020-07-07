import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const TypeMovie = ({text, onPress, activeText}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container(activeText === text && activeText)}>
            <Text style={styles.title(activeText === text && activeText)}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TypeMovie

const styles = StyleSheet.create({
    container: activeText => ({
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderWidth: activeText ? 0 : 1,
        borderColor: colors.border,
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 50,
        backgroundColor: activeText ? colors.lineCategory : colors.white
    }),  
    title: activeText => ({
        fontSize: 20,
        color: activeText ? 'white' : colors.text.primary2,
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        fontStyle: 'normal',
    })
})
