import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './pages/dashboard';
import Details from './pages/Details';
import Search from './pages/Search';
import Anime from './pages/Anime';

import Header from './components/Header';

const {Navigator, Screen} = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Screen
          name="dashboard"
          component={Dashboard}
          options={{
            headerShown: true,
            header: () => <Header />,
          }}
        />
        <Screen name="details" component={Details} />

        <Screen
          name="search"
          component={Search}
          options={{
            headerShown: true,
            header: () => <Header />,
          }}
        />
        <Screen
          name="anime"
          component={Anime}
          options={{
            headerShown: true,
            header: () => <Header />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
