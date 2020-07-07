import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dummy4 } from '../../../assets'
import { colors } from '../../../utils'

const TeamMovie = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={Dummy4} />
            <Text style={styles.name}>James Mangold</Text>
            <Text style={styles.desc}>Director</Text>
        </View>
    )
}

export default TeamMovie

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },  
    avatar: {
        width: 80,
        height: 80
    },
    name: {
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        color: colors.text.primary,
        maxWidth: 80,
        marginTop: 12,
        textAlign: 'center'
    },
    desc: {
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        color: colors.text.secondary,
        maxWidth: 80,
        marginTop: 4,
        textAlign: 'center'
    }
})
