import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TypeMovie, Gap } from '../../atoms'
import { colors } from '../../../utils'

const HeadContent = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Ford v Ferrari</Text>
            <View style={styles.wrapperdesc}>
                <Text style={styles.desc}>2019</Text>
                <Text style={styles.desc}>PG-13</Text>
                <Text style={styles.desc}>2h 32min</Text>
            </View>
            <View style={styles.wrappertype}> 
                <TypeMovie text="Action" />
                <Gap width={10} />
                <TypeMovie text="Crime" />
                <Gap width={10} />
                <TypeMovie text="Comedy" />
            </View>
        </View>
    )
}

export default HeadContent

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Proxima Nova',
        fontWeight: '600',
        fontSize: 32,
        fontStyle: 'normal',
        color: colors.text.primary
    },
    desc: {
        fontFamily: 'Proxima Nova',
        fontWeight: 'normal',
        fontSize: 16,
        fontStyle: 'normal',
        color: colors.text.secondary,
        marginRight: 28
    },
    wrapperdesc: {
        flexDirection: 'row',
        marginTop: 8
    },
    wrappertype: {
        flexDirection: 'row',
        marginTop: 20
    }
})
