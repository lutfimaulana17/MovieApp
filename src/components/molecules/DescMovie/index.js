import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'

const DescMovie = () => {
    return (
        <View>
            <Text style={styles.title}>Plot Summary</Text>
            <Text style={styles.desc}>American car designer Carroll Shelby and driver Kn Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order.</Text>
        </View>
    )
}

export default DescMovie

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '500',
        color: colors.text.primary,
    },
    desc: {
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: 'normal',
        color: colors.text.secondary,
        marginTop: 16
    }
})
