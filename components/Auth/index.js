import { createStackNavigator } from 'react-navigation';

import StartScreen from './StartScreen';

const AuthStack = createStackNavigator({ Start: StartScreen });

export default AuthStack;
