import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'
import { Gap } from '../../atoms'

const CategoryMovie = ({text, onPress, activeText}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title(activeText === text && activeText)}>{text}</Text>
            { activeText === text && <View style={styles.line} /> }
        </TouchableOpacity>
    )
}

export default CategoryMovie

const styles = StyleSheet.create({
    title: (active) => ({
        fontSize: 32,
        color: colors.text.primary,
        fontFamily: 'Proxima Nova',
        fontWeight: '600',
        fontStyle: 'normal',
        opacity: active ? 1 : 0.3
    }),
    line: {
        backgroundColor: colors.lineCategory,
        width: 40,
        height: 6,
        borderRadius: 100,
        marginTop: 16,
    }
})
