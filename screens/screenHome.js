import React, { useReducer } from "react";
import { StyleSheet, View} from 'react-native';
import { Button, Content, List, ListItem, Text } from 'native-base';
import { initialState, reducer } from "../reducers/Main.js";

function screenHome({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <View style={styles.container}>
        <Content>
          <Button block info
            onPress={() => {navigation.navigate('Game')}}>
            <Text>Start a Game</Text>
          </Button>
          <Button block primary
            onPress={() => { dispatch({type: "ADD_GAME"}) }}>
            <Text>Create a Game</Text>
          </Button>
          <Button block warning
            onPress={() => { dispatch({type: "DELETE_GAME"}) }}>
            <Text>Delete a Game</Text>
          </Button>
          <List>
            <Text>List of games</Text>
            {state.games.map(game => (
            <ListItem>
              <Text>{game.id}</Text>
            </ListItem>
            ))}
          </List>
          <List>
            <Text>List of profile</Text>
            {state.profile.map(profile => (
            <ListItem>
              <Text>{profile}</Text>
            </ListItem>
            ))}
          </List>
        </Content>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default screenHome;