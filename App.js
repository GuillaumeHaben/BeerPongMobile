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

  const HomeTab = createBottomTabNavigator();

  function HomeTabScreen() {
    return (
      <HomeTab.Navigator initialRouteName="Home">
        <HomeTab.Screen name="Home" component={screenHome} />
        <HomeTab.Screen name="History" component={screenHistory} options={{ title: 'History' }}/>
      </HomeTab.Navigator>
    );
  }

  const Menu = createStackNavigator();

  return (
    <ContextProvider>
      <NavigationContainer>
        <Menu.Navigator>
          <Menu.Screen name="Home" component={HomeTabScreen} options={{ title: 'Home' }}/>
          <Menu.Screen name="Game" component={screenGame} options={({ route }) => ({ title: 'Game '+route.params.id})} />
        </Menu.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}