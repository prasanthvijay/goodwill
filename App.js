import { createStackNavigator, createAppContainer } from 'react-navigation';

import InitialScreen from './App/Startup/Initial';
import LoginScreen from './App/Startup/LoginScreen';
import RegisterScreen from './App/Startup/RegisterScreen';
import VerifyScreen from './App/Startup/VerifyScreen';

const AppNavigator = createStackNavigator({
  Initial: { 
    screen: InitialScreen,
      navigationOptions: {
        header: null,
      } 
  },
  Login:{
    screen: LoginScreen,
    navigationOptions:{
        header:null,
    }
  },
  Register:{
    screen: RegisterScreen,
    navigationOptions:{
        header:null,
    }
  },
  Verify:{
    screen: VerifyScreen,
    navigationOptions:{
        header:null,
    }
  },
  },{
    headerMode: 'none',
    initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);


