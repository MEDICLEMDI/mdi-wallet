import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';
export default emailStyle = StyleSheet.create({
  screen: {
    paddingTop: 60,
    paddingHorizontal: 24,
    flex: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    width: Dimensions.get('window').width / 2,
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
