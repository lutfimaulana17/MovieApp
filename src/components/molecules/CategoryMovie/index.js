import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { Gap } from '../../atoms'

const CategoryMovie = ({active, text}) => {
    return (
        <View>
            <Text style={styles.title(active)}>{text}</Text>
            { active && <View style={styles.line} /> }
        </View>
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
