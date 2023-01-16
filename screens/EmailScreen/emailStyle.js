import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';
export default emailStyle = StyleSheet.create({
  screen: {
    paddingTop: 60,
    paddingHorizontal: 24,
    borderColor: 'black',
    borderWidth: 1,
    flex: 10,
  },
  termsContainer: {
    borderRadius: SIZES.radius,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  termsElement: {
    flexDirection: 'row',
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
