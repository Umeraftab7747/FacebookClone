import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// dashboard
import {
  Dashboard,
  SearchScreen,
  NotficationScreen,
  Chatscreen,
  Profile,
} from '../screens';

export class StackNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotficationScreen"
            component={NotficationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chatscreen"
            component={Chatscreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
