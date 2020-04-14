import React, { useContext } from 'react';
import { Button, Icon, Text} from 'native-base';
import { StyleSheet, View} from 'react-native';
import { Context } from "../context/MyContext.js"

function GameStat({ id }) {

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
    
    const game = getGame(state.games,id);

    return (
      game ? 
      <View>
      </View> : <Text>Loading ...</Text>
    );
    
}

const styles = StyleSheet.create({

});

export default GameStat;