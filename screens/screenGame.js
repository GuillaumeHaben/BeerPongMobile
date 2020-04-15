import React,{ useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import Game from '../components/Game';
import GameStat from '../components/GameStat';
import { Context } from "../context/MyContext.js";
import { getGame, getGameStatus } from "../utils/toolsGame.js";

function screenGame({ route }) {

  const [state, dispatch] = useContext(Context);
  const { id } = route.params;  
  const game = getGame(state.games, id);
  const isFinished = getGameStatus(game);

  return (
    <View style={ styles.game }>
      { isFinished ?
      <GameStat game={ game }></GameStat> :
      <Game game={ game }></Game>}
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