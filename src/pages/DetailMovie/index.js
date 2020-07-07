import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Dummy3 } from '../../assets'
import { colors } from '../../utils'
import { RateBoard, HeadContent, DescMovie, TeamMovie } from '../../components/molecules'
import { Gap } from '../../components'

const DetailMovie = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={Dummy3} style={styles.background}>
                <Text>Haloo</Text>
            </ImageBackground>
            <RateBoard />
            <View style={styles.wrapperContent}>
                <HeadContent />
                <Gap height={48} />
                <DescMovie />
                <TeamMovie />
            </View>
        </View>
    )
}

export default DetailMovie

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    background: {
        height: 353,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden'
    },
    wrapperContent: {
        marginLeft: 32,
        marginTop: 48
    }
})
