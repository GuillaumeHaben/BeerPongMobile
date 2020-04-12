import 'react-native-gesture-handler'; {/* MUST BE IN LINE 1 OTHERWISE ERROR */}
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import screenHome from './screens/screenHome';
import screenGame from './screens/screenGame';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={screenHome} options={{ title: 'Beer Pong App' }}/>
        <Stack.Screen name="Game" component={screenGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}