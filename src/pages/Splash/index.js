import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILLogo, ILReact } from '../../assets'
import { colors } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        }, 3000)
    }, [])
    return (
        <View style={styles.page}>
            <Image source={ILReact} style={styles.image} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white },
    image: {
        width: 100,
        height: 100
    }
})
