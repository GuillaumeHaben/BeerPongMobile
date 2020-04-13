import 'react-native-gesture-handler'; {/* MUST BE IN LINE 1 OTHERWISE ERROR */}
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import screenHome from './screens/screenHome';
import screenGame from './screens/screenGame';
import screenHistory from './screens/screenHistory';
import { ContextProvider } from "./context/MyContext.js"

export default function App() {

  const HomeStack = createStackNavigator();

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={screenHome} />
        <HomeStack.Screen name="Game" component={screenGame} />
      </HomeStack.Navigator>
    );
  }
  const Menu = createBottomTabNavigator();

  return (
    <ContextProvider>
      <NavigationContainer>
        <Menu.Navigator initialRouteName="Home">
          <Menu.Screen name="Home" component={HomeStackScreen} options={{ title: 'Home' }}/>
          <Menu.Screen name="History" component={screenHistory} options={{ title: 'History' }}/>
        </Menu.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );


}