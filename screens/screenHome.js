import React, { useContext } from "react";
import { StyleSheet, View} from 'react-native';
import { Button, Content, List, ListItem, Text} from 'native-base';
import { Context } from "../context/MyContext.js"

function screenHome({ navigation }) {

  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.home}>
      <Content>
        <Button block info
          onPress={() => { navigation.navigate('Game', { id: state.games.length }) }}>
          <Text>Start a Game</Text>
        </Button>
        <Button block warning
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