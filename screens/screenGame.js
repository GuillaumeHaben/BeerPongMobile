import React from 'react';
import { StyleSheet, View} from 'react-native';
import Game from '../components/Game';
import GameStat from '../components/GameStat';

function screenGame({ route , navigation}) {

  const { id } = route.params;
  const gameFinished = false;

  return (
    <View style={styles.game}>
      {gameFinished ?
      <GameStat id={id}></GameStat> :
      <Game id={id}></Game>}
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