import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import screensStyle from '../screensStyle';
import homeStyle from './homeStyle';
import {FONTS, SIZES} from '../constants';

const HomeScreen = () => {
  return (
    <View style={screensStyle.root}>
      <View style={homeStyle.screen}>
        <View style={{...screensStyle.titleContainer, marginBottom: 42}}>
          <Text style={{...FONTS.h2, color: '#443927'}}>Wallet</Text>
          <View
            style={{
              backgroundColor: '#F2F2F2',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              borderRadius: SIZES.radius,
            }}>
            <Text
              style={{
                ...FONTS.h5,
                color: '#333333',
                paddingTop: 5,
                paddingRight: 7,
              }}>
              EN
            </Text>
            <Image source={require('../../assets/icons/arrow-down.png')} />
          </View>
        </View>
        <View style={homeStyle.addressBox}>
          <ImageBackground
            source={require('../../assets/images/card.png')}
            resizeMode="contain">
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 25,
                marginTop: 15,
              }}>
              <Image
                source={require('../../assets/icons/ic_logo.png')}
                style={{marginRight: 6}}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: 'NotoSansKR-Black',
                  color: '#706148',
                }}>
                MDI
              </Text>
            </View>
            <View
              style={{
                marginBottom: 25,
                marginLeft: 24,
              }}>
              <Text style={{color: '#443927', fontSize: 10}}>Address</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#706148', fontSize: 10}}>
                  0x641a08348c44B42c4d593113CB3a4d19c12C31D9
                </Text>

                <Image
                  source={require('../../assets/icons/copy.png')}
                  style={{width: 18, height: 18, marginLeft: 10}}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={homeStyle.box}>
          <View style={{marginLeft: 25}}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'NotoSansKR-Black',
              }}>
              1,234 MDI
            </Text>
            <Text style={{fontSize: 20, fontFamily: 'NotoSansKR-Black'}}>
              ≈ 0 USD
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              //   borderWidth: 1,
              marginBottom: 10,
              marginRight: 25,
            }}>
            <TouchableHighlight onPress={() => {}} underlayColor="#F5F5F5">
              <View
                style={{
                  ...homeStyle.button,
                }}>
                <Text
                  style={{
                    ...homeStyle.buttonText,
                  }}>
                  SEND
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
