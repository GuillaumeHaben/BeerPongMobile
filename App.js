import 'react-native-gesture-handler'; {/* MUST BE IN LINE 1 OTHERWISE ERROR */}
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import screenHome from './screens/screenHome';
import screenGame from './screens/screenGame';
import screenHistory from './screens/screenHistory';
import { ContextProvider } from "./context/MyContext.js"
import { StyleSheet, SafeAreaView,StatusBar } from 'react-native';

export default function App() {

  function getHeaderTitle(route) {
    //const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'Home'
    // switch (routeName) {
    //   case 'Home':
    //     return 'Home'
    //   case 'History':
    //     return 'History'
    // }
    return route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'Home'
  }

  const Menu = createBottomTabNavigator();

  function HomeTabScreen() {
    return (
      <Menu.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: '#e74c3c' }}>
        <Menu.Screen name="Home" component={screenHome} options={{ title: 'Home', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          )}}/>
        <Menu.Screen name="History" component={screenHistory} 
          options={{ title: 'History', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )}}/>
      </Menu.Navigator>
    );
  }

  const HomeStack = createStackNavigator();

  return (
    <SafeAreaView style={styles.safe}>
    <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
    <ContextProvider>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeTabScreen} options={({ route }) => ({ title: getHeaderTitle(route)})}/>
          <HomeStack.Screen name="Game" component={screenGame} options={({ route }) => ({ title: 'Game '+route.params.id,gestureEnabled:false})} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </ContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});