import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconStar2, IconStar3 } from '../../../assets'
import { colors } from '../../../utils'

const RateBoard = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container1}>
                <IconStar3/>
                <Text style={styles.title}>8.2/10</Text>
                <Text style={styles.desc}>150,212</Text>
            </View>
            <View style={styles.container2}>
                <IconStar2/> 
                <Text style={styles.title}>Rate This</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.metaScore}>86</Text>
                <Text style={styles.title}>Metascore</Text>
                <Text style={styles.desc}>62 critic reviews</Text>
            </View>
        </View>
    )
}

export default RateBoard

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        paddingTop: 19,
        paddingBottom: 19,
        paddingLeft: 61,
        paddingRight: 20,
        backgroundColor: colors.white,
        alignSelf: 'flex-end',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        marginTop: -70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        color: colors.text.primary,
        marginTop: 4
    },
    metaScore: {
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '500',
        color: colors.white,
        backgroundColor: '#51CF66',
        paddingVertical: 7,
        paddingHorizontal: 9
    },
    container1: {
        marginRight: 50,
        alignItems: 'center'
    },
    container2: {
        marginRight: 48,
        alignItems: 'center'
    },
    container3: {
        alignItems: 'center'
    },
    desc: {
        fontSize: 12,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '500',
        color: colors.text.secondary,
        marginTop: 2
    }
})
