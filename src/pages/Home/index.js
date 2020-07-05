import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, TypeMovie, CategoryMovie, ItemMovie, Gap } from '../../components'
import { colors } from '../../utils'

const Home = () => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapperSectionHeader}>
                <Gap height={56} />
                <Header style={styles.header}/>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={styles.wrapperSectionCategory}>
                    <Gap width={32} />
                    <CategoryMovie active text="In Theater" />
                    <Gap width={20} />
                    <CategoryMovie text="Box Office" />
                    <Gap width={20} />
                    <CategoryMovie text="Coming Soon" />
                    <Gap width={20} />
               </View> 
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <View style={styles.wrapperSectionType}>
                    <Gap width={32} />
                    <TypeMovie text="Action" />
                    <Gap width={10} />
                    <TypeMovie text="Crime" />
                    <Gap width={10} />
                    <TypeMovie text="Comedy" />
                    <Gap width={10} />
                    <TypeMovie text="Drama" />
                    <Gap width={20} />
                </View> 
            </ScrollView>
            <ItemMovie />
            <ItemMovie />
            <ItemMovie />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
    },
    wrapperSectionHeader: {
        paddingHorizontal: 32
    },
    wrapperSectionCategory: {
        flexDirection: 'row',
        marginTop: 48,
    },
    wrapperSectionType: {
        flexDirection: 'row',
        marginTop: 48,
    }
})
