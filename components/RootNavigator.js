import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoadingScreen from './LoadingScreen';
import AuthNavigator from './Auth';
import MainNavigator from './Main';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);
