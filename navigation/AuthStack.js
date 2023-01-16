import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import EmailScreen from '../screens/EmailScreen/EmailScreen';
import PinScreen from '../screens/PinScreen/PinScreen';

const Stack = createNativeStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
      <Stack.Screen name="PinScreen" component={PinScreen} />
    </Stack.Navigator>
  );
};
