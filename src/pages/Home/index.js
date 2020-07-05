import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, TypeMovie, CategoryMovie, ItemMovie, Gap, RatedMovie } from '../../components'
import { colors } from '../../utils'

const Home = () => {
    const [categoryActive, setCategoryActive] = useState('In Theater')
    const [typeActive, setTypeActive] = useState('Comedy')
    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.page}>
            <View style={styles.wrapperSectionHeader}>
                <Gap height={40} />
                <Header style={styles.header}/>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={styles.wrapperSectionCategory}>
                    <Gap width={32} />
                    <CategoryMovie activeText={categoryActive} onPress={() => setCategoryActive('In Theater')} text="In Theater" />
                    <Gap width={20} />
                    <CategoryMovie activeText={categoryActive} onPress={() => setCategoryActive('Box Office')} text="Box Office" />
                    <Gap width={20} />
                    <CategoryMovie activeText={categoryActive} onPress={() => setCategoryActive('Coming Soon')} text="Coming Soon" />
                    <Gap width={20} />
               </View> 
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={styles.wrapperSectionType}>
                    <Gap width={32} />
                    <TypeMovie activeText={typeActive} onPress={() => setTypeActive('Action')} text="Action" />
                    <Gap width={10} />
                    <TypeMovie activeText={typeActive} onPress={() => setTypeActive('Crime')} text="Crime" />
                    <Gap width={10} />
                    <TypeMovie activeText={typeActive} onPress={() => setTypeActive('Comedy')} text="Comedy" />
                    <Gap width={10} />
                    <TypeMovie activeText={typeActive} onPress={() => setTypeActive('Drama')} text="Drama" />
                    <Gap width={20} />
                </View> 
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={styles.wrapperSectionItem}>
                    <Gap width={32} />
                    <ItemMovie />
                    <Gap width={25} />
                    <ItemMovie />
                    <Gap width={25} />
                    <ItemMovie />
                    <Gap width={25} />
               </View> 
            </ScrollView>
            <View style={styles.wrapperSectionTopRated}>
                <Text style={styles.sectionLabel}>Top Rated Movie</Text>
                <RatedMovie />
                <RatedMovie />
                <RatedMovie />
                <RatedMovie />
                <RatedMovie />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    wrapperSectionHeader: {
        paddingHorizontal: 32
    },
    wrapperSectionCategory: {
        flexDirection: 'row',
        marginTop: 30,
    },
    wrapperSectionType: {
        flexDirection: 'row',
        marginTop: 30,
    },
    wrapperSectionItem: {
        flexDirection: 'row',
        marginTop: 30,
    },
    sectionLabel: {
        fontSize: 20, 
        color: colors.text.primary,
        fontFamily: 'Proxima Nova',
        fontWeight: '400',
        fontStyle: 'normal',
        marginBottom: 16
    },
    wrapperSectionTopRated: {
        paddingHorizontal: 32,
        marginTop: 30,
    }
})
