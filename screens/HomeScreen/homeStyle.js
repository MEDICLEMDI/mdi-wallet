import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';
export default emailStyle = StyleSheet.create({
  screen: {
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  addressBox: {marginBottom: 20},
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 28,
    paddingBottom: 20,
  },
  //   termsContainer: {
  //     borderRadius: SIZES.radius,
  //     borderColor: '#E8E8E8',
  //     borderWidth: 1,
  //     backgroundColor: 'white',
  //     paddingHorizontal: 10,
  //     paddingVertical: 10,
  //   },
  //   termsElement: {
  //     flexDirection: 'row',
  //   },
  //   buttonContainer: {
  //     flex: 1,
  //     flexDirection: 'row',
  //   },
  button: {
    alignItems: 'center',
    backgroundColor: '#E7E1D5',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    ...FONTS.h4,
    color: 'black',
    paddingHorizontal: 28,
    paddingVertical: 9,
  },
});
