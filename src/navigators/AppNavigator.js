import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/HomeScreen';
// import Components

const Stack = createStackNavigator();

export default class AppNavigator extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="Screen1Name"
            component={Screen1}
            options={{
              headerShown: true,
              title: 'Images',
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
