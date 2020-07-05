import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../utils/colors'
import { ILIntro1, ILIntro2, ILIntro3 } from '../../assets'
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 'one',
      title: 'The Most Updated',
      text: 'Find the latest\nMovie information',
      image: ILIntro1,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'two',
      title: 'Favorite movie',
      text: 'Mark and save your \nfavorite Movie',
      image: ILIntro2,
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Get Started',
      text: 'Ready to get started',
      image: ILIntro3,
      backgroundColor: '#22bcb5',
    }
  ];

const GetStarted = ({navigation}) => {
    _renderItem = ({ item }) => {
        return (
            <View
                style={[
                    styles.slide,
                    {
                        backgroundColor: item.backgroundColor,
                    },
                ]}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        );
    }
    _onDone = () => {
        navigation.replace('Home')
    }
    return <AppIntroSlider showSkipButton showPrevButton renderItem={this._renderItem} data={slides} onDone={this._onDone}/>
}

export default GetStarted

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },
    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
  });
