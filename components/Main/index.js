import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

const MainDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default MainDrawerNavigator;
