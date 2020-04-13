import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Body, List, ListItem, Text, Container, Header, Content, Left, Right, Thumbnail, } from 'native-base';
import { Context } from "../context/MyContext.js"
import moment from 'moment'

function screenHistory({ navigation }) {

  const [state, dispatch] = useContext(Context);

  /**
     * Return successRate of the current game
     * @param {*} hit Number of hit
     * @param {*} miss Number of miss
     * return a percentage
     */
    function successRate(hit, miss) {
      if (hit == 0 && miss == 0) return 0;
      return Math.floor(100 * hit / (hit + miss));
    }

  return (
    state.games.length != 0 ? 
    <Container>
         <Button full danger
           onPress={() => { dispatch({type: "DELETE_GAMES"}) }}>
           <Text>Delete All Games</Text>
         </Button>
        <Content>
          <List>
            { state.games.map(game => (
            <ListItem thumbnail key={ game.id }>
              <Left>
                <Thumbnail square source={ require("../assets/redCup.png") } />
              </Left>
              <Body>
                <Text>Game { game.id }</Text>
                <Text note numberOfLines={1}>{ moment(game.date).from(moment()) }</Text>
                <Text note numberOfLines={1}>Success rate: { successRate(game.counterHit, game.counterMiss) }%</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => { navigation.navigate('Game', { id: game.id }) }}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            ))}
          </List>
        </Content>
      </Container>
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