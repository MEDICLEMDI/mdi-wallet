import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import WalletStack from './WalletStack';

export default Router = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <WalletStack /> */}
    </NavigationContainer>
  );
};
