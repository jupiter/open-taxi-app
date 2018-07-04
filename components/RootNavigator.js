import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from './AuthLoadingScreen';
import AuthNavigator from './Auth';
import MainNavigator from './Main';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
