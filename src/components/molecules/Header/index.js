
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconMenu, IconSearch } from '../../../assets'

const Header = () => {
    return (
        <View style={styles.container}>
            <IconMenu />
            <IconSearch />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
