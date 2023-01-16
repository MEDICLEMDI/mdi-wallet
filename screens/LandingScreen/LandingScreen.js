import {
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import landingStyle from './landingStyle';
import screensStyle from '../screensStyle';
import landingLogo from '../../assets/images/landingLogoXML.js';
import {SvgXml} from 'react-native-svg';
function LandingScreen({navigation}) {
  return (
    <View style={screensStyle.root}>
      <View style={landingStyle.logo}>
        <SvgXml xml={landingLogo} />
      </View>
      <View style={landingStyle.buttonContainer}>
        <TouchableHighlight onPress={() => navigation.navigate('EmailScreen')}>
          <View style={landingStyle.button}>
            <Text style={landingStyle.buttonText}>START</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default LandingScreen;
