import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import emailStyle from './emailStyle';
import {FONTS, SIZES} from '../constants';
import screensStyle from '../screensStyle';
import {useState} from 'react';

const EmailScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [verification, setVerification] = useState('');
  const [code, setCode] = useState('');
  const [checkmarks, setCheckmarks] = useState({
    terms: false,
    personalData: false,
    marketing: false,
  });
  return (
    <View style={screensStyle.root}>
      <View style={emailStyle.screen}>
        <View style={{...screensStyle.titleContainer, marginBottom: 42}}>
          <Text style={{...FONTS.h2, color: '#443927'}}>
            Verify you email address
          </Text>
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
        <View style={{...screensStyle.titleContainer, marginBottom: 42}}>
          <Text style={{...FONTS.h3, color: '#443927'}}>PIN number reset</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 13,
              borderRadius: SIZES.radius,
              borderWidth: 0.5,
              borderColor: '#E8E8E8',
            }}>
            <Image source={require('../../assets/icons/check.png')} />
            <Text
              style={{
                ...FONTS.h5,
                color: '#333333',
                paddingTop: 9,
                paddingBottom: 5,
                paddingLeft: 5,
              }}>
              Reset
            </Text>
          </View>
        </View>
        <View
          style={{
            ...emailStyle.termsContainer,
            borderBottomColor: '#fff',
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
          }}>
          <View
            style={{
              ...screensStyle.titleContainer,
            }}>
            <Text style={{...FONTS.h2, color: '#443927'}}>
              Agree to all use of Wallet
            </Text>
            <Pressable
              onPress={() => {
                setCheckmarks(prevState => {
                  return prevState.terms &&
                    prevState.marketing &&
                    prevState.personalData
                    ? {terms: false, marketing: false, personalData: false}
                    : {terms: true, marketing: true, personalData: true};
                });
              }}>
              {checkmarks.terms &&
              checkmarks.marketing &&
              checkmarks.personalData ? (
                <Image
                  source={require('../../assets/icons/multichecked.png')}
                />
              ) : (
                <Image source={require('../../assets/icons/multicheck.png')} />
              )}
            </Pressable>
          </View>
        </View>
        <View
          style={{
            ...emailStyle.termsContainer,
            borderTopColor: '#E8E8E8',
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            marginBottom: 25,
          }}>
          <View style={emailStyle.termsElement}>
            <Text style={{...FONTS.body5, flex: 1}}>[Required]</Text>
            <Text style={{...FONTS.body5, flex: 2}}>
              Agree to the Wallet Terms and Conditions
            </Text>
            <View style={{padding: 5, marginHorizontal: 10}}>
              <Text
                style={{
                  ...FONTS.h5,
                  flex: 1,
                  borderRadius: SIZES.radius,
                  borderWidth: 0.5,
                  borderColor: '#E8E8E8',
                  padding: 5,
                  color: '#333333',
                }}>
                see all
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setCheckmarks(prevState => {
                  return {...prevState, terms: !prevState.terms};
                });
              }}>
              <View style={{alignSelf: 'center'}}>
                {checkmarks.terms ? (
                  <Image
                    source={require('../../assets/icons/multichecked.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icons/multicheck.png')}
                  />
                )}
              </View>
            </Pressable>
          </View>
          <View style={emailStyle.termsElement}>
            <Text style={{...FONTS.body5, flex: 1}}>[Required]</Text>
            <Text style={{...FONTS.body5, flex: 2}}>
              Consent to collection and use of personal information
            </Text>
            <View style={{padding: 5, marginHorizontal: 10}}>
              <Text
                style={{
                  ...FONTS.h5,
                  flex: 1,
                  borderRadius: SIZES.radius,
                  borderWidth: 0.5,
                  borderColor: '#E8E8E8',
                  padding: 5,
                  color: '#333333',
                }}>
                see all
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setCheckmarks(prevState => {
                  return {...prevState, personalData: !prevState.personalData};
                });
              }}>
              <View style={{alignSelf: 'center'}}>
                {checkmarks.personalData ? (
                  <Image
                    source={require('../../assets/icons/multichecked.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icons/multicheck.png')}
                  />
                )}
              </View>
            </Pressable>
          </View>
          <View style={emailStyle.termsElement}>
            <Text style={{...FONTS.body5, flex: 1}}>[Optional]</Text>
            <Text style={{...FONTS.body5, flex: 2}}>
              Agree to notification of marketing information
            </Text>
            <View style={{padding: 5, marginHorizontal: 10}}>
              <Text
                style={{
                  ...FONTS.h5,
                  flex: 1,
                  borderRadius: SIZES.radius,
                  borderWidth: 0.5,
                  borderColor: '#E8E8E8',
                  padding: 5,
                  color: '#333333',
                }}>
                see all
              </Text>
            </View>
            <Pressable
              onPress={() => {
                setCheckmarks(prevState => {
                  return {...prevState, marketing: !prevState.marketing};
                });
              }}>
              <View style={{alignSelf: 'center'}}>
                {checkmarks.marketing ? (
                  <Image
                    source={require('../../assets/icons/multichecked.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icons/multicheck.png')}
                  />
                )}
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{marginBottom: 15}}>
          <Text style={FONTS.body5}>Email Account</Text>
          <TextInput
            placeholder={'Please enter your email address'}
            value={email}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
              paddingHorizontal: 14,
              paddingVertical: 8,
            }}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Text style={FONTS.body5}>Verification Code</Text>
          <TextInput
            placeholder={'Please enter your verification code'}
            value={verification}
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: 10,
              paddingHorizontal: 14,
              paddingVertical: 8,
            }}
            onChangeText={setVerification}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 0.5,
            borderColor: '#989898',
            marginVertical: 15,
          }}
        />
        <View>
          <Text style={{fontSize: 10, color: '#989898'}}>
            ˙ If you lose your email account, you may not be able to access your
            Wallet and assets.
          </Text>
          <Text style={{fontSize: 10, color: '#989898'}}>
            ˙ The user is responsible for the loss of assets due to the loss of
            e-mail account
          </Text>
          <Text style={{fontSize: 10, color: '#989898'}}>
            ˙ Please pay close attention to the security of your e-mail account.
          </Text>
        </View>
      </View>
      <View style={emailStyle.buttonContainer}>
        <TouchableHighlight
          onPress={email ? () => console.log('press') : () => {}}>
          <View
            style={{
              ...emailStyle.button,
              backgroundColor: '#666666',
            }}>
            <Text
              style={{
                ...emailStyle.buttonText,
                color: 'white',
              }}>
              RESEND
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('PinScreen')}>
          <View
            style={{
              ...emailStyle.button,
              backgroundColor: !email ? '#989898' : '#E7E1D5',
            }}>
            <Text
              style={{
                ...emailStyle.buttonText,
                color: !email ? 'white' : '#333333',
              }}>
              NEXT
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default EmailScreen;
