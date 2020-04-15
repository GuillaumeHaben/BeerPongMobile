import React,{ useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import Game from '../components/Game';
import GameStat from '../components/GameStat';
import { Context } from "../context/MyContext.js"

function screenGame({ route }) {

  const [state, dispatch] = useContext(Context);
  const { id } = route.params;

    /**
     * Find game by id
     * @param {*} games List of games
     * @param {*} id id of game you're looking for
     * return a game
     */
    function getGame(games, id) {
      return games.find((game) => game.id === id)
    }
  
  const game = getGame(state.games, id);

  const gameFinished = game.status>=0 ? true :false ;

  return (
    <View style={styles.game}>
      {gameFinished ?
      <GameStat game={game}></GameStat> :
      <Game game={game}></Game>}
    </View>
  );
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        padding:25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

  export default screenGame;