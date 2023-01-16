import {StyleSheet} from 'react-native';
import {FONTS} from '../constants';
const landingStyle = StyleSheet.create({
  screen: {},
  logo: {
    alignItems: 'center',
    flex: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#E7E1D5',
    height: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    ...FONTS.h4,
    color: 'black',
  },
});

export default landingStyle;
