import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Dummy3, IconMenu, IconBack } from '../../assets'
import { colors } from '../../utils'
import { RateBoard, HeadContent, DescMovie, TeamMovie } from '../../components/molecules'
import { Gap } from '../../components'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DetailMovie = ({navigation}) => {
    return (
        <ScrollView style={styles.page}>
            <ImageBackground source={Dummy3} style={styles.background}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconBack style={styles.iconback} />
                </TouchableOpacity>
            </ImageBackground>
            <RateBoard />
            <View style={styles.wrapperContent}>
                <HeadContent />
                <Gap height={48} />
                <DescMovie />
                <Gap height={48} />
                <Text style={styles.textTeam}>Cast & Crew</Text>
                <Gap height={16} />
                <View style={styles.wrapperTeams}>
                     <TeamMovie />
                     <Gap width={28} />
                     <TeamMovie />
                     <Gap width={28} />
                     <TeamMovie />
                     <Gap width={28} />
                     <TeamMovie />
                     <Gap width={28} />
                     <TeamMovie />
                </View>
            </View>
        </ScrollView>
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
    },
    textTeam: {
        fontSize: 24,
        fontStyle: 'normal',
        fontFamily: 'Proxima Nova',
        fontWeight: '500',
        color: colors.text.primary,
    },
    wrapperTeams: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconback: {
        marginTop: 56,
        marginLeft: 32
    }
})
