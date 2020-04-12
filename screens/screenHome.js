import React, { useReducer, useEffect } from "react";
import { StyleSheet, View} from 'react-native';
import { Button, Content, List, ListItem, Text} from 'native-base';
import { initialState, reducer } from "../reducers/Main.js";

function screenHome({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleCreateGame() {
      dispatch({type: "ADD_GAME"});
      //navigation.navigate('Game', { id: state.games.find((game) => game.id == state.game.length)});
    }

    console.log(state.games)

    return (
      <View style={styles.home}>
        <Content>
          <Button block info
            onPress={() => { handleCreateGame() }}>
            <Text>Start a Game</Text>
          </Button>
          <Button block primary
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: 0, counter:"Miss"}) }}>
            <Text>Update Game 0</Text>
          </Button>
          <Button block warning
            onPress={() => { dispatch({type: "DELETE_GAME", id: 0}) }}>
            <Text>Delete a Game</Text>
          </Button>
          <List>
            <Text>List of games</Text>
            { state.games.map(game => (
            <ListItem key={game.id} onPress={() => { navigation.navigate('Game', { id: game.id }) }}>
              <Text>id: {game.id}</Text>
              <Text>counterHit: {game.counterHit}</Text>
              <Text>counterMiss: {game.counterMiss}</Text>
            </ListItem>
            ))}
          </List>
        </Content>
      </View>
    );
}

const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default screenHome;