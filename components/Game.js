import React, { useContext } from 'react';
import { Button, Icon, Text, Container, View} from 'native-base';
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
         <View style={{flexDirection: "row"}}>
          <Button block success
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Hit"}) }}>
            <Text>{ game.counterHit } HIT</Text>
          </Button>
          { game.counterHit > 0 && <Button transparent
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Hit"}) }}>
            <Icon type='FontAwesome' name='undo' />
          </Button> }
        </View>

        <View style={{flexDirection: "row"}}>
          <Button block danger
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Miss"}) }}>
            <Text>{ game.counterMiss } MISS</Text>
          </Button>
          { game.counterMiss > 0 && <Button transparent 
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Miss"}) }}>
            <Icon type='FontAwesome' name='undo' />
          </Button> }
        </View>

        <Text>Total = { game.counterHit + game.counterMiss}</Text>
        <Text>{ successRate(game.counterHit, game.counterMiss) }% success</Text>
      </View> : <Text>Loading ...</Text>
    );
    
}

export default Game;