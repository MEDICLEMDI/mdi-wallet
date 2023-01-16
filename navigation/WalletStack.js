import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export default WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#F5F5F5'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Transfer" /> */}
    </Stack.Navigator>
  );
};
