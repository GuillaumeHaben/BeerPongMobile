import React, { useContext } from 'react';
import { Button, Icon, Text} from 'native-base';
import { StyleSheet, View} from 'react-native';
import { Context } from "../context/MyContext.js"

function Game({ id }) {

    const [state, dispatch] = useContext(Context);

    /**
     * Find game by id
     * @param {*} games List of games
     * @param {*} id id of game you're looking for
     * return a game
     */
    function getGame(games, id) {
      return games.find((game) => game.id === id)
    }

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

    // Check if game exist, if not, create it
    if (state.games.length == id) {
      dispatch({type: "ADD_GAME"});
    }

    const game = getGame(state.games, id);

    return (
      game ? 
      <View>

         <View style={styles.buttonRow}>
          <Button style={styles.buttonHit} block success
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Hit"}) }}>
            <Text style={styles.textScore}>{ game.counterHit }{'\n'}HIT</Text>
          </Button>
          <Button transparent
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Hit"}) }}>
            <Icon type='FontAwesome' name='undo' style={{ fontSize: 32 }}/>
          </Button> 
        </View>

        <View style={styles.buttonRow}>
          <Button style={styles.buttonHit} block danger
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Miss"}) }}>
            <Text style={styles.textScore}>{ game.counterMiss }{'\n'}MISS</Text>
          </Button>
          <Button transparent 
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Miss"}) }}>
            <Icon type='FontAwesome' name='undo' style={{ fontSize: 32 }}/>
          </Button>
        </View>

        <View style={styles.totalInfoRow}>
          <Text>{ game.counterHit + game.counterMiss} shots</Text>
        </View>

        <View style={styles.bottomInfoRow}>
          <Text style={styles.textSucess}>{ successRate(game.counterHit, game.counterMiss) }%{'\n'}success</Text>
        </View>
      </View> : <Text>Loading ...</Text>
    );
    
}

const styles = StyleSheet.create({
  buttonRow:{
    flex: 4,
    width: "100%",
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  totalInfoRow:{
    flex:1,
    borderRadius: 5,
    borderColor:'silver',
    borderWidth:0.5,
    marginHorizontal:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bottomInfoRow:{
    flex:4,
    borderRadius: 5,
    borderWidth:0.5,
    borderColor:'silver',
    margin:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonHit: {
    flex:1,
    height:'100%',
  },
  textScore:{
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
  },
  textSucess:{
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
  },
});

export default Game;