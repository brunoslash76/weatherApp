import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Forecast from './pages/Forecast';
import Dashboard from './pages/Dashboard';
import City from './pages/City';

export default () =>
  createAppContainer(
    createSwitchNavigator({
      App: {
        screen: createStackNavigator(
          {
            Forecast,
            City,
            Dashboard,
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerTintColor: '#fff',
              headerLeftContainerStyles: {
                marginLeft: 20,
              },
            },
          }
        ),
      },
    })
  );
