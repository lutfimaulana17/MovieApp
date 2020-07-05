import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Dummy2, IconStar } from '../../../assets'
import { colors } from '../../../utils'

const RatedMovie = () => {
    return (
        <View style={styles.container}>
            <Image source={Dummy2} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>Ford v Ferrari</Text>
                <Text style={styles.category}>Action</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}

export default RatedMovie

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        alignItems: 'center'
    },
    rate: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        color: colors.text.primary, 
    },
    category: {
        fontSize: 12,
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: '600',
        color: colors.text.secondary, 
        marginTop: 2
    },
    profile: {
        flex: 1,
    }
})
