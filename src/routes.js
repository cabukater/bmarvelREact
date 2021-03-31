import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '~/screens/Home';
import About from '~/screens/About';

const Routes = createAppContainer(
    createSwitchNavigator({
      App: createSwitchNavigator({
        Home,
      }),
     App2: createStackNavigator(
        {
            About,
        
        },
      ),
    }),

);

export default Routes;