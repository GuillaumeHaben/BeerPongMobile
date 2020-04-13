import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, List, ListItem, Text} from 'native-base';
import { Context } from "../context/MyContext.js"

function screenHistory() {

  const [state, dispatch] = useContext(Context);

  return (
    state.games ? 
    <View style={styles.history}>
        <Button block danger
          onPress={() => { dispatch({type: "DELETE_GAMES"}) }}>
          <Text>Delete All Games</Text>
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
    </View>
    :
    <View style={styles.history}>
      <Text>No game so far...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default screenHistory;