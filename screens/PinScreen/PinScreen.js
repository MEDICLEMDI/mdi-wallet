import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import screensStyle from '../screensStyle';
import pinStyle from './pinStyle';
import {FONTS, SIZES} from '../constants';
import {useState} from 'react';
// import {dapp_backend} from './communicate';

function PinScreen() {
  // console.log(dapp_backend);
  const [email, setEmail] = useState('');
  const [verification, setVerification] = useState('');
  const [modal, setModal] = useState(true);
  return (
    <View style={screensStyle.root}>
      <Modal
        animationType="fade"
        transparent={modal}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <View style={screensStyle.modal}>
          <View style={screensStyle.centeredView}>
            <View style={screensStyle.modalView}>
              <Text style={{...FONTS.h2, color: 'black'}}>NOTICE</Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: 'black',
                  lineHeight: 50,
                  textAlign: 'center',
                }}>
                This email account does not exist. Please Register your email or
                please check you email account again
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View style={pinStyle.screen}>
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
      <View style={pinStyle.buttonContainer}>
        <TouchableHighlight
          onPress={email ? () => console.log('press') : () => {}}>
          <View
            style={{
              ...pinStyle.button,
              backgroundColor: '#666666',
            }}>
            <Text
              style={{
                ...pinStyle.buttonText,
                color: 'white',
              }}>
              RESEND
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={email ? () => console.log('press') : () => {}}>
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
}

export default PinScreen;
